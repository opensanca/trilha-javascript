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

module.exports.get = (query) => {
  return User.find(query);
};
