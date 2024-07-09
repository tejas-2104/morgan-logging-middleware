const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/log', homeController.index);

module.exports = router;
