const express = require('express');
const router = express.Router();

// Employee Model
const Employee = require('../../models/employee');

// @route   GET api/employee
// @desc    Get all employees
// @access  Public
router.get('/', (req, res) => {
  Employee.find()
    .sort({date: -1})
    .then(employees => res.json(employees))
});

module.exports = router;