const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
};

const createCard = (req, res) => {
  console.log(req.user._id);
  Card.create(req.body)
    .then((newCard) => res.send(newCard))
    .catch((error) => res.status(500).send(console.log(error)));
};

module.exports = {
  getCards,
  createCard,
};