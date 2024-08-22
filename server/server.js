const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./mongo_models/User');

const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb://mongo:27017/mydatabase';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI)
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error(err));

// Sample API endpoint
app.get('/api/data', async (req, res) => {
    const newUser = new User({
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 30
    });

// Save the user to the database
    try {
        await newUser.save();
    } catch (e) {
        console.log(e)
    }
    res.json({message: 'Hello from the server !'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
