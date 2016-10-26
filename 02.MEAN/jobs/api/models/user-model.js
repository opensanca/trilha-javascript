'use strict';

const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});
const User = mongoose.model('User', schema);

module.exports.authorization = (credentials) => {
  let _fields = { password: false };
  return User.findOne(credentials, _fields);
}

module.exports.get = (query) => {
  return User.find(query);
};

module.exports.getById = (_id) => {
  let _query = { _id };
  let _fields = { password: false };
  return User.findOne(_query, _fields);
};

module.exports.save = (user) => {
  return new Promise((resolve, reject) => {
    new User(user).save((err, data) => {
      if(err) {
        return reject(err);
      }

      return resolve({ _id: data._id });
    });
  });
};

module.exports.update = (_id, user) => {
  let _query = { _id };
  return User.update(_query, user);
};

module.exports.remove = (_id) => {
  let _query = { _id };
  return User.remove(_query);
};
