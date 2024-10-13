const jwt = require('jsonwebtoken');
const User = require("../models/User");

exports.saveUser = async (req, res) => {
    const newUser = new User({
        "name": req.username,
        "password": req.password
    });

    try {
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, 'your_jwt_secret_key', { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Failed to create user' });
    }
}
