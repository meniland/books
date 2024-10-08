const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const PORT = 5000;
const MONGO_URI = 'mongodb+srv://mlandman:meni8633@cluster0.ws6nf.mongodb.net/books?retryWrites=true&w=majority&appName=Cluster0';
// const MONGO_URI = process.env.MONGO_URL;
const usersRouter = require('./routes/usersRoutes');
const itemsRouter = require('./routes/itemsRoutes');

app.use(cors());
app.use(express.json());
dotenv.config({ path: './config.env' });

mongoose.connect(MONGO_URI)
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error(err));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/items', itemsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
