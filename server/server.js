const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI;

const usersRouter = require('./routes/usersRoutes');
const itemsRouter = require('./routes/itemsRoutes');
const authRouter = require('./routes/authRoutes');
const jwtAuthMiddleware = require("./middlewares/authMiddleware");

app.use(cors());
app.use(express.json());
const path = require('path');

// Serve static files for uploads
app.use('/uploads', express.static(path.join(__dirname, 'config', 'uploads')));

mongoose.connect(MONGO_URI)
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error(err));

// Apply JWT middleware before protected routes
app.use(jwtAuthMiddleware)

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/items', itemsRouter);
app.use('/api/v1', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
