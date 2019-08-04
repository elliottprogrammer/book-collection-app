const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// connect to DB
mongoose.connect(process.env.MLAB_URI, { useNewUrlParser: true }, () =>
    console.log('connected to DB!')
);

// import routes
const authRoute = require('./routes/auth');
const bookRoute = require('./routes/books');

// middleware
app.use(express.json());

// route middleware
app.use('/api/user', authRoute);
app.use('/api/books', bookRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server running on port 5000...'));
