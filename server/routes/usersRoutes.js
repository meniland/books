const express = require('express');
const User = require("../models/User");
const router = express.Router();
const saveUser = async (req, res) => {
    const newUser = new User({
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 30
    });

    try {
        await newUser.save();
    } catch (e) {
        console.log(e)
    }
}

router
    .route('/')
    .post(saveUser)

module.exports = router;
