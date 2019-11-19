/*
* 设置路由模块*/
const projectSettingAction = require("../02-controller/project-setting-action")

// 请求分发
function reqDistribute(router) {

    // 新增配置
    router.post("/insertProjectSetting", function (req, res) {

        const body = req.body

        // 需要前端传递
        //body.engineVersion = PACKAGE.version

        projectSettingAction.insertProjectSetting(body).then((data) => {

            res.send(res.getSuccessResult(data))

        }).catch(err => {

            res.send(res.getErrorResult(err.toString()))
        })
    })

    // 保存配置
    router.post("/updateProjectSetting", function (req, res) {

        const body = req.body

        projectSettingAction.updateProjectSetting(body).then((data) => {

            res.send(res.getSuccessResult(data))

        }).catch(err => {

            res.send(res.getErrorResult(err.toString()))
        })
    })

    // 获取配置详情
    router.get("/getProjectSettingDetail", function (req, res) {

        const params = req.query

        projectSettingAction.getProjectSettingDetail(params.projectId).then((data) => {

            res.send(res.getSuccessResult(data))

        }).catch(err => {

            res.send(res.getErrorResult(err.toString()))
        })
    })

    // 获取配置详情
    router.get("/getProjectSettingList", function (req, res) {

        projectSettingAction.getProjectSettingList().then((data) => {

            res.send(res.getSuccessResult(data))

        }).catch(err => {

            res.send(res.getErrorResult(err.toString()))
        })
    })
}

module.exports = {
    reqDistribute
}
