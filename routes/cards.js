const express = require('express');
const router = express.Router();
const { getCards, createCard } = require('../controllers/cards');

router.get('/cards', getCards);
router.post('/cards', createCard);

module.exports = router;