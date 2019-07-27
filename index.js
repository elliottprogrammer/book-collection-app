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

// route middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('server running on port 3000...'));
