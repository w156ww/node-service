const {login, register} = require('../../db-helper/helper');


// 请求分发
function reqDistribute(router) {
    // 登录
    router.post("/user/login", function (req, res) {

        const body = req.body;
        console.log('登录');
        login(body).then((data) => {
            res.send(res.getSuccessResult(data))

        }).catch(err => {
            res.send(res.getErrorResult(err.toString()))
        })
    });

    // 注册
    router.post('/user/register', function (req, res) {
        const body = req.body;
        console.log('注册');
        register(body, res).then(data => {
            res.send(res.getSuccessResult(data))

        }).catch(err => {

            res.send(res.getErrorResult(err.toString()))
        })
    })

}

module.exports = {
    reqDistribute
}
