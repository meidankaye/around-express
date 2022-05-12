const path = require('path');
const { getJsonFromFile } = require('../helpers/files');

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = async (req, res) => {
  const users = await getJsonFromFile(usersFilePath);

  res.send(users);
};

const getUserById = async (req, res) => {
  try {
    const users = await getJsonFromFile(usersFilePath);
    const userId = users.find((user) => user._id === req.params.id);

    if (!userId) {
      res.status(404).send({ message: 'User ID not found' });
    } else {
      res.status(200).send(userId);
    }
  } catch (err) {
    res.status(500).send({ message: 'An error has occurred on the server' });
  }
};

module.exports = {
  getUsers,
  getUserById,
};