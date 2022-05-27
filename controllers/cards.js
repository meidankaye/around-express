const mongoose = require('mongoose');
const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
};

const createCard = (req, res) => {
  Card.create(req.body)
    .then((newCard) => res.send(newCard))
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(mongoose.Types.ObjectId(req.params.cardId))
    .orFail()
    .then((card) => res.send(card))
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};