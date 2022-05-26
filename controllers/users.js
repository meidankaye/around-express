// const path = require('path');
const User = require('../models/user');
// const { getJsonFromFile } = require('../helpers/files');

// const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.send(users);
  } catch (error) {
    res.status(500).send({ message: 'An error has occurred on the server' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).send({ message: 'User ID not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: 'An error has occurred on the server' });
  }
};

// const createUser = async (req, res) => {

// ;}

module.exports = {
  getUsers,
  getUserById,
};