const User = require('../models/user');

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
    const user = await User.findById(req.params.userId);

    if (!user) {
      res.status(404).send({ message: 'User ID not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: 'An error has occurred on the server' });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.send(newUser);
  } catch (error) {
    res.status(500).send({ message: 'An error has occurred on the server' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};