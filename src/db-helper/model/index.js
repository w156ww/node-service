const mongoose = require('mongoose');
const {userSchema} = require('../Schema/index');


const User = mongoose.model('User', userSchema);



module.exports = {
    User
}


