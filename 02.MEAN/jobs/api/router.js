'use strict';

const router = {
  'GET' : {}
}

module.exports.get = (rota, controller) => {
  router['GET'][rota] = controller;
}

module.exports.processRequest = (req, res) => {
  const action = router[req.method][req.url];
  if(action) {
    action(req, res);
  } else {
    res.end();
  }
}
