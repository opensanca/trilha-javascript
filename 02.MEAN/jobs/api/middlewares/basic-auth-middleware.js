'use strict';

const AUTHORIZATION_METHOD = 'Basic';
const User = require('../models/user-model');

module.exports = (req, res, next) => {
  let _basicHeader = req.headers.authorization || '';
  let _basicHeaderData = _basicHeader.split(' ');

  if(_basicHeaderData && _basicHeaderData[0] !== AUTHORIZATION_METHOD) {
    return res.status(403).send(req.messages.forbidden);
  }

  let _basicAuthCredentialData = (new Buffer(_basicHeaderData[1], 'base64'))
      .toString('utf8')
      .split(':');

  let _credentials = {
    name: _basicAuthCredentialData[0],
    password: _basicAuthCredentialData[1]
  }

  User.authorization(_credentials)
    .then((data) => {
      if(data && data != null) {
        req.user = data;
        return next();
      }
      return res.status(401).send();
    })
    .catch((err) => {
      return res.status(401).send();
    });
};
