'use strict';

const Company = require('../models/company-model');
const ctrl = {};

ctrl.getCompanies = (req, res) => {
    Company.get(req.query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

ctrl.getCompany = (req, res) => {
    Company.getById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}

ctrl.saveCompany = (req, res) => {
    Company.save(req.body)
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

ctrl.updateCompany = (req, res) => {
    Company.update(req.params.id, req.body)
      .then((data) => {
        res.status(200).send();
      })
      .catch((err) => {
        res.staus(500).send(err);
      });
}

ctrl.removeCompany = (req, res) => {
    Company.remove(req.params.id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.staus(500).send(err);
      });
}

module.exports = ctrl;
