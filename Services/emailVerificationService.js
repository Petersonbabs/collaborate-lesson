
const { sendOtpEmail } = require('./emailService');
const { generateOtp } = require('../utils/generateOtp');


const models = {
  buyer: require('../models/Buyer'),
  seller: require('../models/Seller'),
  rider: require('../models/Rider'),
};

/**
 
  @param {string} role - 'buyer' | 'seller' | 'rider'
  @param {string} email
  @returns {Promise<void>}
 */
async function sendOtp(role, email) {
  const Model = models[role.toLowerCase()];
  if (!Model) throw new Error('Invalid user role');

  const user = await Model.findOne({ email });
  if (!user) throw new Error(`${role} with this email does not exist`);

  const otp = generateOtp();
  user.otp = otp;
  user.otpExpiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes expiry
  await user.save();

  await sendOtpEmail({
    to: user.email,
    name: user.name,
    otp,
    role,
  });
}

/**
 
  @param {string} role - 'buyer' | 'seller' | 'rider'
  @param {string} email
  @param {string} otp
  @returns {Promise<boolean>}
 */
async function verifyOtp(role, email, otp) {
  const Model = models[role.toLowerCase()];
  if (!Model) throw new Error('Invalid user role');

  const user = await Model.findOne({ email });
  if (!user) throw new Error(`${role} with this email does not exist`);

  const now = Date.now();
  if (user.otp !== otp || now > user.otpExpiresAt) {
    throw new Error('Invalid or expired OTP');
  }

  user.isVerified = true;
  user.otp = null;
  user.otpExpiresAt = null;
  await user.save();

  return true;
}

module.exports = {
  sendOtp,
  verifyOtp,
};
