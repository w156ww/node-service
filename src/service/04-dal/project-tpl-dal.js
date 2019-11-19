const dbHelper = require("../../../infrastructure/db-helper/index")

// 插入配置
function insertProjectTpl(payload) {

	const sqlCmd = "INSERT INTO RTPVIEW_FRONT_H5PROJECTTPL(eid,id,projectTplId,projectTplName,toolVersion,engineVersion,toolSetting,fromProjectId,businessType) VALUES(SEQ_EID.nextval,SEQ_RTPVIEW_FRONT.nextval,:projectTplId,:projectTplName,:toolVersion,:engineVersion,:toolSetting,:fromProjectId,:businessType)",
		bindValues = {
			projectTplId: payload.projectTplId,
			projectTplName: payload.projectTplName,
			toolVersion: payload.toolVersion,
			engineVersion: payload.engineVersion,
			toolSetting: payload.toolSetting ? JSON.stringify(payload.toolSetting) : "",
			fromProjectId: payload.fromProjectId,
			businessType: payload.businessType ? payload.businessType : "0" // 当前业务类型
		}


	return dbHelper.executeInsert(sqlCmd, bindValues)
}

// 修改配置
function updateProjectTpl(payload) {

	const sqlCmd = "update RTPVIEW_FRONT_H5PROJECTTPL SET toolSetting = :toolSetting,engineSetting = :engineSetting where projectTplId = :projectTplId",
		bindValues = {
			projectTplId: payload.projectTplId,
			toolSetting: JSON.stringify(payload.toolSetting),
			engineSetting: JSON.stringify(payload.engineSetting),
		}

	return dbHelper.executeModify(sqlCmd, bindValues)
}


// 获取配置列表（未删除）
function getProjectTplList() {

	const sqlCmd = "select * from RTPVIEW_FRONT_H5PROJECTTPL t where t.isDeleted = 0 order by t.id desc ",
		bindValues = []

	return dbHelper.executeQuery(sqlCmd, bindValues)
}

// 获取配置详情
function getProjectTplDetail(projectTplId) {

	const sqlCmd = "select id,projectTplId,projectTplName,toolSetting,toolVersion,engineVersion,fromProjectId,createdDate,modifiedDate,BUSINESSTYPE from RTPVIEW_FRONT_H5PROJECTTPL t where t.projectTplId = :projectTplId",
		bindValues = {
			projectTplId: projectTplId
		}

	return dbHelper.executeQuery(sqlCmd, bindValues)
}


module.exports = {
	insertProjectTpl,
	updateProjectTpl,
	getProjectTplList,
	getProjectTplDetail
}


