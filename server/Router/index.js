const express = require('express');
const router = express.Router();

const reportRouter = require('./report');
const sectionRouter = require('./section');

router.use('/report', reportRouter);
router.use('/section', sectionRouter);

module.exports = router;