const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }

});


module.exports = mongoose.model('User', UserSchema);