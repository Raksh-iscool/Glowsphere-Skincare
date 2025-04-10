const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
require('dotenv').config();

const app = express();

app.use('/static', express.static(path.join(__dirname, 'auth', 'views')));

require('./auth/config/passport');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./auth/routes/auth'));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'auth/views/login.html'));
});
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'auth/views/signup.html'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
