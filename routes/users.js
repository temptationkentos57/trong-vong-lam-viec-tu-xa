const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Tạo người dùng mới
router.post('/', async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;