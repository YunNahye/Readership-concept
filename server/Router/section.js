const express = require('express');
const router = express.Router();
const sectionController = require('../controller/sectionController');

router.post('/', sectionController.createSection);
router.get('/', sectionController.getSectionList);

module.exports = router;