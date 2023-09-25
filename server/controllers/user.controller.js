const User = require('../models/user.model');

// Create Commands for User

const createUser = (req, res) => {
    User.exists({
        name: req.body.name
    })
    .then( userExists => {
        if (userExists) {
            return Promise.reject('This user name already exists!')
        }
        return User.create(req.body);
    })
    .then(saveResult => res.json(saveResult))
    .catch((err) => res.status(400).json(err));
};

// Read Commands for User

const findAllUsers = (req, res) => {
    User.find()
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch((err) => res.status(400).json(err));
};

const findUser = (req, res) => {
    User.exists({ _id: req.params.id })
    .then( userExists => {
        if (userExists) {
            return User.findOne({ _id: req.params.id })
        }
        return Promise.reject('This user does not exist!');
    })
    .then(saveResult => res.json(saveResult))
    .catch((err) => res.status(400).json(err));
};

// Update Commands for User

const updateExistingUser = (req, res) => {
    User.exists({ _id: req.params.id })
    .then( userExists => {
        if (userExists) {
            return User.findOneAndUpdate({ _id: req.params.id },
                req.body, { new: true, runValidators: true }
                )
        }
        return Promise.reject('This user does not exist!');
    })
    .then(saveResult => res.json(saveResult))
    .catch((err) => res.status(400).json(err));
};

// Delete Commands for User

const deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    createUser,
    findAllUsers,
    findUser,
    updateExistingUser,
    deleteUser
};