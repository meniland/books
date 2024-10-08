const express = require('express');
const itemController = require('../controllers/itemsController');
const router = express.Router();

router
    .route('/')
    .get(itemController.getItems)
    .post(itemController.saveItem)

module.exports = router;
