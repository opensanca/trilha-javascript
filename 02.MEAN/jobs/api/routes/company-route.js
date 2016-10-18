'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/company-controller')

// Retrive
router.get('/companies', ctrl.getCompanies);
// Retrive
router.get('/company/:id', ctrl.getCompany);
// Create
router.post('/company', ctrl.saveCompany);
// Update
router.put('/company/:id', ctrl.updateCompany);
// Delete
router.delete('/company/:id', ctrl.removeCompany);

module.exports = router;
