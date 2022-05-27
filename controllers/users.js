const User = require('../models/user');

const getUsers = (req, res) => {
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
  User.create(req.body)
    .then((newUser) => res.send(newUser))
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
};

const updateUserProfile = (req, res) => {
  User.findByIdAndUpdate(req.user._id, { name: req.name, about: req.about })
    .then((newData) => res.send(newData))
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
};

const updateUserAvatar = (req, res) => {
  User.findByIdAndUpdate(req.user._id, { avatar: '' })
    .then((newAvatar) => res.send(newAvatar))
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserProfile,
  updateUserAvatar,
};