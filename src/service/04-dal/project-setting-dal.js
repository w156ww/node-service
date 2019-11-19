const dbHelper = require("../../../infrastructure/db-helper/index")

// 插入配置
function insertProjectSetting(payload) {

	const sqlCmd = "INSERT INTO RTPVIEW_FRONT_H5PROJECTSETTING(eid,id,projectId,projectName,toolVersion,engineVersion,toolSetting,fromProjectTplId,businessType) VALUES(SEQ_EID.nextval,SEQ_RTPVIEW_FRONT.nextval,:projectId,:projectName,:toolVersion,:engineVersion,:toolSetting,:fromProjectTplId,:businessType)",
		bindValues = {
			projectId: payload.projectId,
			projectName: payload.projectName,
			toolVersion: payload.toolVersion,
			engineVersion: payload.engineVersion, // 解析引擎提供
			toolSetting: payload.toolSetting ? JSON.stringify(payload.toolSetting) : "",
			fromProjectTplId: payload.fromProjectTplId,
			businessType: payload.businessType ? payload.businessType : "0" // 当前业务类型
		}


	return dbHelper.executeInsert(sqlCmd, bindValues)
}

// 修改配置
function updateProjectSetting(payload) {

	const sqlCmd = "update RTPVIEW_FRONT_H5PROJECTSETTING SET toolSetting = :toolSetting,engineSetting = :engineSetting where projectId = :projectId",
		bindValues = {
			projectId: payload.projectId,
			toolSetting: JSON.stringify(payload.toolSetting),
			engineSetting: JSON.stringify(payload.engineSetting),
		}

	return dbHelper.executeModify(sqlCmd, bindValues)
}


// 获取配置列表（未删除）
function getProjectSettingList() {

	const sqlCmd = "select * from RTPVIEW_FRONT_H5PROJECTSETTING t where t.isDeleted = 0 order by t.id desc ",
		bindValues = []

	return dbHelper.executeQuery(sqlCmd, bindValues)
}

// 获取配置详情
function getProjectSettingDetail(projectId) {

	const sqlCmd = "select id,projectId,projectName,toolSetting,toolVersion,engineVersion,previewStatus,deployStatus,createdDate,modifiedDate,BUSINESSTYPE from RTPVIEW_FRONT_H5PROJECTSETTING t where t.projectId = :projectId",
		bindValues = {
			projectId: projectId
		}

	return dbHelper.executeQuery(sqlCmd, bindValues)
}


module.exports = {
	insertProjectSetting,
	updateProjectSetting,
	getProjectSettingList,
	getProjectSettingDetail
}


