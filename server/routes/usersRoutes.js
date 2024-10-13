const express = require('express');
const usersController = require("../controllers/usersController");
const router = express.Router();

router
    .route('/')
    .post(usersController.saveUser)

module.exports = router;
