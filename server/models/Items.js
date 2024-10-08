const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: {type: String}
});

const Item = mongoose.model('items', itemSchema);

module.exports = Item;
