const User = require('../models/user');

const getUsers = (req, res) => {
  console.log('Hi');
  User.find({})
    .then((users) => res.send(users))
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
};

const getUserById = (req, res) => {
  User.findById(req.params.userId)
    .orFail()
    .then((user) => res.send(user))
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
};

const createUser = (req, res) => {
  console.log(req.body);
  User.create(req.body)
    .orFail()
    .then((newUser) => res.send(newUser))
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};