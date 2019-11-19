
// 路由配置

const projectSettingAction = require("../02-controller/project-setting-action")

// 请求分发
function reqDistribute(router) {

    router.post("/testPost", function (req, res) {

        const body = req.body
        const data = {method: 'post'};
        res.send(res.getSuccessResult(data))
    });


    router.get("/testGet", function (req, res) {

        const params = req.query;

        const data = {method: 'get'};

        res.send(res.getSuccessResult(data))
    });
}

module.exports = {
    reqDistribute
}
