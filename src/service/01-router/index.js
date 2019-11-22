const express = require('express')
const router = express.Router()

// const projectSettingRouter = require("./project-setting-router")
// const projectTplRouter = require('./project-tpl-router')
const example = require('./example');
const user = require('./distribute');

/*
// 示例
router.get("/getInfo", function (req, res) {

    const body = req.body

    res.send("122")
})*/

// projectSettingRouter.reqDistribute(router)
// projectTplRouter.reqDistribute(router)
example.reqDistribute(router);
user.reqDistribute(router);

module.exports = router;
