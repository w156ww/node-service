const express = require('express')
const router = express.Router()

const user = require('./distribute');

/*
// 示例
router.get("/getInfo", function (req, res) {

    const body = req.body

    res.send("122")
})*/

user.reqDistribute(router);

module.exports = router;
