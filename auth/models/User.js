const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, sparse: true },
    password: String,
    googleId: String
});

module.exports = mongoose.model('User', UserSchema);
