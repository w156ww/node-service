const RESPONSE_CODES = {
    CODE_200: {code: 200, message: "响应成功"},
    CODE_204: {code: 204, message: "服务器成功处理了请求，但没有返回任何内容"},

    CODE_401: {code: 401, message: "权限验证失败"},
    CODE_404: {code: 404, message: "请求未找到"},
    CODE_408: {code: 408, message: "请求超时"},

    CODE_500: {code: 500, message: "服务器异常"},

    CODE_0: {code: 0, message: "未知异常"},

    /*
    * 1000~1200 验证问题
    */
    CODE_1001: {code: 1001, message: "'task' can't be empty."},
    CODE_1002: {code: 1002, message: "'config' can't be empty."},
    CODE_1003: {code: 1003, message: "'projectId' can't be empty."},

    /*
    * 1201~1400 解析问题
    */
    CODE_1201: {code: 1201, message: "解析异常."},

    /*
    * 1401~1600 预览、发布问题
    */
    CODE_1401: {code: 1401, message: "服务被占用，10秒后重试"},

    /*
    * 1601~1801 业务问题
    */
    CODE_1601: {code: 1601, message: "最新版本与日志版本不一致"},

};

/**
 * @desc 获取响应代码信息
 * @param code
 */
function getResCodeInfo(code) {
    const codeItem = Object.values(RESPONSE_CODES).find(item => item.code === code)

    if (!codeItem) {
        console.log(`getCodeInfoByCode::can not find response code ${code}.`)
    }
    return codeItem
}

/**
 * @desc 对成功响应的数据处理
 * @param data {any} 需要返回的数据
 * @param exMsg {String} 额外的补充信息
 * @param code {Number} 响应代码
 * @return {String} 序列化信息
 */
function getSuccessResult(data, exMsg = '', code = RESPONSE_CODES.CODE_200.code) {
    const resCodeInfo = getResCodeInfo(code);

    return JSON.stringify({code, data, msg: `${resCodeInfo.message}.${exMsg}`});
}

/**
 * @desc 处理失败的结果
 * @param exMsg
 * @param code
 * @returns {string}
 */
function getErrorResult(exMsg = '', code = RESPONSE_CODES.CODE_500.code) {
    const resCodeInfo = getResCodeInfo(code),
        errMsg = `${resCodeInfo.message}。${exMsg}`

    return JSON.stringify({code, msg: errMsg})
}


// 响应过滤
const responseFilter = function (req, res, next) {

    res.getSuccessResult = getSuccessResult;
    res.getErrorResult = getErrorResult;
    next();
};

module.exports = responseFilter;
