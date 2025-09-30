const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Đăng tin tuyển dụng
router.post('/', async (req, res) => {
  const newJob = new Job(req.body);
  try {
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;