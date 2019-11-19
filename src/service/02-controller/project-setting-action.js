/*
* */
const projectSettingBll = require("../03-bll/project-setting-bll")

// 插入配置
function insertProjectSetting(payload) {

	let params = {
		projectName: payload.name
	}

	params = Object.assign(params,payload)

	return projectSettingBll.insertProjectSetting(params)
}

// 修改配置
function updateProjectSetting(payload) {

	let params = {
		projectId: payload.projectId,
		projectName: payload.name,
		toolSetting: payload.toolSetting,
		engineSetting: payload.engineSetting
	}

	return projectSettingBll.updateProjectSetting(params)

}

// 获取配置详情
function getProjectSettingDetail(projectId) {

	return projectSettingBll.getProjectSettingDetail(projectId)
}

// 获取配置列表
function getProjectSettingList() {

	return projectSettingBll.getProjectSettingList()
}

module.exports = {
	insertProjectSetting,
	updateProjectSetting,
	getProjectSettingDetail,
	getProjectSettingList
}
