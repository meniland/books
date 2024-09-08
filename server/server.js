const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb://mongo:27017/mydatabase';
const usersRouter = require('./routes/usersRoutes');
const itemsRouter = require('./routes/itemsRoutes');

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI)
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error(err));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/items', itemsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
