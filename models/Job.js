const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  freelancersApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);