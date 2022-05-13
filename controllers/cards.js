const path = require('path');
const { getJsonFromFile } = require('../helpers/files');

const cardsFilePath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = async (req, res) => {
  try {
    const cards = await getJsonFromFile(cardsFilePath);

    res.send(cards);
  } catch (error) {
    res.status(500).send({ message: 'An error has occurred on the server' });
  }
};

module.exports = {
  getCards,
};