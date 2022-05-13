const express = require('express');
const router = express.Router();
const { getCards } = require('../controllers/cards');

router.get('/card', getCards);

module.exports = router;