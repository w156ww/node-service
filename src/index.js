const express = require('express');
const app = express();

const cors = require('./middleware/cors');
const responseFilter = require('./middleware/response-filter');
// set cors
app.use(cors);
// 响应中间件
app.use(responseFilter);

// router
const router = require('./service/01-router/index');



app.use(router);

require('./db-helper/index');


app.listen(3000, () => {
    console.log('Example app listening on port 3000');
});


