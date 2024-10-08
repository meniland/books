const Item = require("../models/Items");

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

exports.saveItem = async (req, res) => {
    try {
        await Item.create(req.body);
        console.log('Item was save successfully');
        res.status(201).json({status: 'success'});
    } catch (e) {
        console.log(e);
        res.status(400).json({status: 'failure'});
    }
}
