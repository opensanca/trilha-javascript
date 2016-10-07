'use strict';

const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  segment: {
    type: String,
    default: null
  },
  email: {
    type: String,
    required: true
  },
  site: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  },
  tecnologies: {
    type: String,
    default: null
  },
  active: {
      type: Boolean,
      default: true
  }
});

const Company = mongoose.model('Company', schema);

module.exports.get = (query) => {
    query.active = true;
    return Company.find(query);
}

module.exports.getById = (_id) => {
  let _query = { _id, active: true };
  let _fields = { email: false};
  return Company.findOne(_query, _fields);
};

module.exports.save = (company) => {
    return new Promise((resolve, reject) => {
        new Company(company).save((err, data) => {
            if (err) { // the function will execute when it contains error
                return reject(err);
            }

            resolve({ // the funciton was execute successfully
                _id: data._id
            });
        });
    });
}

module.exports.update = (_id, company) => {
    let _query = { _id }; // same as let _query = { _id: _id };

    return Company.update(_query, company);
};

module.exports.remove = (_id) => {
  let _query = { _id };
  let _fields = { active: false };
  return Company.update(_query, _fields);
};
