const express = require('express');
const router = express.Router();
const reportController = require('../controller/reportController');

router.post('/', reportController.createReport);
router.get('/:section', reportController.getReportListBySection);

module.exports = router;