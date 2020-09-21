const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    bookedEvents = [
        {}
    ]
})

module.exports = Profile = mongoose.model('profile', UserSchema)