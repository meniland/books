const Item = require("../models/Items");
const upload = require('../config/multerConfig');

exports.uploadItem = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const newItem = new Item({
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            photoPath: req.file.path // Path to uploaded photo
        });

        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error('Error uploading item:', error);
        res.status(500).json({ error: 'Failed to upload item' });
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

