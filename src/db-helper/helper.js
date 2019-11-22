const {User} = require('./model/index');

function handleError(err) {
    return Promise.reject(err);
}

function handleSuccess(data) {
    return Promise.resolve(data);
}


function login(req) {
    console.log(req);
    return User.findOne({account: req.userName, password: req.password}, function (err, user) {
        if (err) return handleError(err);
        return handleSuccess({
            data: {
                success: true
            }
        });
    })
}


function register(req, res) {

    console.log(req);
    return new Promise((resolve, reject) => {
        User.findOne({account: req.userName}, function (err, user) {
            if (err) return reject(err);
            console.log('find user::', user);

            const data = {
                success: true
            };

            resolve(data);

        })
    })
    // return User.findOne({account: req.userName}, function (err, user) {
    //     if (err) return handleError(err);
    //     console.log('find user::', user);
    //
    //     const data = {
    //         success: true
    //     };
    //
    //     res.send(res.getSuccessResult(data))
    //
    // })
}


module.exports = {
    login,
    register
}




