const express = require('express');
const Item = require("../models/Items");
const router = express.Router();
const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}



router
    .route('/')
    .get(getItems)


module.exports = router;
