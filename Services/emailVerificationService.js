const nodemailer = require('./nodemailer/transporter');
const UserModel = require('../models/user');

// Generate a random 6-digit OTP
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP to user's email
async function sendOtp(email) {
  try {
    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('User with this email does not exist');
    }

    // Generate OTP and set expiration (10 minutes from now)
    const otp = generateOtp();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Update user with OTP details
    user.verificationToken = otp;
    user.verificationExp = otpExpiresAt;
    await user.save();

    // Send email with OTP
    const mailOptions = {
      from: 'faizahojo40@gmail.com',
      to: email,
      subject: 'Your Verification OTP',
      text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
      html: `<p>Your OTP is: <strong>${otp}</strong>. It will expire in 10 minutes.</p>`
    };

    await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully');
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Failed to send OTP');
  }
}

// Verify the OTP entered by user
async function verifyOtp(email, otp) {
  try {
    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('User with this email does not exist');
    }

    // Check if OTP matches and isn't expired
    const currentTime = new Date();
    if (user.verificationToken !== otp || currentTime > new Date(user.verificationExp)) {
      throw new Error('Invalid or expired OTP');
    }

    // Mark user as verified and clear OTP fields
    user.isVerified = true;
    user.verificationToken = null;
    user.verificationExp = null;
    await user.save();

    return true;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw new Error('Failed to verify OTP');
  }
}

module.exports = {
  sendOtp,
  verifyOtp
};