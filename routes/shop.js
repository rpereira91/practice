// all the practices are listed as a "shop" where the objects are displayed

const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

module.exports = router;