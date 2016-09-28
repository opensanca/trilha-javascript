'use strict';

const fs = require('fs');
const xlsx = require('node-xlsx');
const Company = require('./models/company-model');

const dataXls = xlsx.parse(fs.readFileSync(`${__dirname}/data/empresas-sao-carlos.xlsx`));

const companies = dataXls[0].data.slice(1);

companies.forEach((company) => {
  new Company(...company).save();
});
