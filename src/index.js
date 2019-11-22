const express = require('express');
const app = express();
const bodyParser = require("body-parser")

const ip = require("ip");
const cors = require('./middleware/cors');
// const cors = require('cors');
const responseFilter = require('./middleware/response-filter');

const apiConfig = require('./config/api.config');
// router
const router = require('./service/01-router/index');


const hostname = ip.address()
const port = apiConfig.port;

// set cors
app.use(cors);
// 响应中间件
app.use(responseFilter);




// parse post request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(router);

require('./db-helper/index');


app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});


