const express = require('express');
const router = express.Router();
const reportController = require('../controller/reportController');

router.post('/', reportController.createReport);
router.get('/list/:section', reportController.getReportListBySection);
router.post('/update', reportController.updateReport);

module.exports = router;