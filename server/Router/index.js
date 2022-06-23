const express = require('express');
const router = express.Router();

const reportRouter = require('./report');

router.use('/report', reportRouter);

module.exports = router;