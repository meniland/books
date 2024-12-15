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

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('/app/config/uploads'));

mongoose.connect(MONGO_URI)
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error(err));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/items', itemsRouter);
app.use('/api/v1', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
