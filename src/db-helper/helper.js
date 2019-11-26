const {User} = require('./model/index');
const responseStatus = require('./response-status');

function handleError(err) {
    return Promise.reject(err);
}

function handleSuccess(data) {
    return Promise.resolve(data);
}


function login(req) {

    console.log(req);

    const {account, password} = req;

    return new Promise((resolve, reject) => {

        User.findOne({account}, function (err, user) {

            if (err) return reject(err);

            if (!user) {

                resolve(responseStatus.loginFail);
            } else {

                if (password !== user.password) {

                    resolve(responseStatus.loginFail);
                } else {

                    resolve(responseStatus.loginSuccess);
                }

            }

        })
    })
}


function register(req, res) {

    console.log(req);

    const {account, password} = req;

    return new Promise((resolve, reject) => {

        User.findOne({account: account}, function (err, user) {

            if (err) return reject(err);

            console.log('find user::', user);

            if (user) {

                resolve(responseStatus.registered);

            } else {

                User.create({
                    account,
                    password
                }).then((err, result) => {
                    if (err) {
                        resolve(responseStatus.registerFail);
                    } else {
                        resolve(responseStatus.registerSuccess);
                    }
                })
            }

        })
    })
}


module.exports = {
    login,
    register
}




