'use strict';

const Company = require('../models/company-model');
const ctrl = {};

ctrl.getCompanies = (req, res) => {
  res.send(Company.get(req.query.name));
};

ctrl.getCompany = (req, res) => {
  res.send(Company.getById(req.params.id));
};

ctrl.createCompany = (req, res) => {
  new Company(
    req.body.name,
    req.body.segment,
    req.body.email,
    req.body.site,
    req.body.city,
    req.body.tecnologies
  ).save();

  // 201 == Created
  res.status(201).send(req.body);
};

ctrl.updateCompany = (req, res) => {
  let company = new Company(
    req.body.name,
    req.body.segment,
    req.body.email,
    req.body.site,
    req.body.city,
    req.body.tecnologies
  );

  company.id = req.params.id;

  company.update();

  res.send(req.body);
}

ctrl.deleteCompany = (req, res) => {
  Company.remove(req.params.id)
  res.send();
};

module.exports = ctrl;
