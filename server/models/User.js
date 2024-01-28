// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: String,
    first_name: String,
    dob_day: String,
    dob_month: String,
    dob_year: String,
    show_gender: Boolean,
    gender_identity: String,
    gender_interest: String,
    url: String,
    about: String,
    matches: [String] // Assuming matches contain user IDs
});

const User = mongoose.model('User', userSchema);

module.exports = User;
