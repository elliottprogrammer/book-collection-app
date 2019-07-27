const express = require('express');
const app = express();

// import routes
const authRoute = require('./routes/auth');

// route middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('server running on port 3000...'));
