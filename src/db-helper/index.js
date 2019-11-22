const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');
// const {login, register} = require('./helper');


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    keepAlive: 120,
};

mongoose.connect(dbConfig.test, options);








