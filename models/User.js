const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['freelancer', 'employer'], required: true },
  profile: { type: Object, default: {} }
});

module.exports = mongoose.model('User', userSchema);