const express = require('express');
const router = express.Router();
const reportController = require('../controller/reportController');

router.post('/', reportController.createReport);

module.exports = router;