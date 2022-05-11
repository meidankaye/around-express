const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
  res.send('Users');
});

router.get('/users/:id', (req, res) => {
  res.send('User ${req.params.id}');
});

module.exports = router;
