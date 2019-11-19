const projectTplBll = require("../03-bll/project-tpl-bll")

// 插入配置
function insertProjectTpl(payload) {

	let params = {
		projectTplName: payload.name
	}

	params = Object.assign(params,payload)

	return projectTplBll.insertProjectTpl(params)
}

// 修改配置
function updateProjectTpl(payload) {

	let params = {
		projectTplId: payload.projectTplId,
		projectTplName: payload.name,
		toolSetting: payload.toolSetting,
		engineSetting: payload.engineSetting
	}

	return projectTplBll.updateProjectTpl(params)

}

// 获取配置详情
function getProjectTplDetail(projectTplId) {

	return projectTplBll.getProjectTplDetail(projectTplId)
}

// 获取配置列表
function getProjectTplList() {

	return projectTplBll.getProjectTplList()
}

module.exports = {
	insertProjectTpl,
	updateProjectTpl,
	getProjectTplDetail,
	getProjectTplList
}
