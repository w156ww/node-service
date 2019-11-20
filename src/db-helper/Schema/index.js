const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [
        {body: String, date: Date}
    ],
    date: {
        type: Date, default: Date.now
    },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});


blogSchema.methods.findSimilarTypes = function(cb) {

};

blogSchema.statics.findByName = function(name, cb) {

};






module.exports = {
    blogSchema
};





