const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    account: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});




module.exports = {
    userSchema
};





