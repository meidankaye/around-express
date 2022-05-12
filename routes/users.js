const express = require('express');
const router = express.Router();
const { getUsers, getUserById } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);

module.exports = router;
