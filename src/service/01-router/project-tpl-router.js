const projectTplAction = require("../02-controller/project-tpl-action")


// 请求分发
function reqDistribute(app) {

    // 新增配置
    app.post("/insertProjectTpl", function (req, res) {

        const body = req.body

        // 需要前端传递
        //body.engineVersion = PACKAGE.version

        projectTplAction.insertProjectTpl(body).then((data) => {

            res.send(res.getSuccessResult(data))

        }).catch(err => {

            res.send(res.getErrorResult(err.toString()))
        })
    })


    // 保存配置
    app.post("/updateProjectTpl", function (req, res) {

        const body = req.body

        projectTplAction.updateProjectTpl(body).then((data) => {

            res.send(res.getSuccessResult(data))

        }).catch(err => {

            res.send(res.getErrorResult(err.toString()))
        })
    })

    // 获取配置详情
    app.get("/getProjectTplDetail", function (req, res) {

        const params = req.query

        projectTplAction.getProjectTplDetail(params.projectTplId).then((data) => {

            res.send(res.getSuccessResult(data))

        }).catch(err => {

            res.send(res.getErrorResult(err.toString()))
        })
    })

    // 获取配置详情
    app.get("/getProjectTplList", function (req, res) {

        projectTplAction.getProjectTplList().then((data) => {

            res.send(res.getSuccessResult(data))

        }).catch(err => {

            res.send(res.getErrorResult(err.toString()))
        })

    })
}

module.exports = {
    reqDistribute
}
