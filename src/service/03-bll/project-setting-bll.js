const projectSettingDAL = require("../04-dal/project-setting-dal")

// 保存配置
function insertProjectSetting(payload) {

	return projectSettingDAL.insertProjectSetting(payload)
}

// 修改配置
function updateProjectSetting(payload) {

	return projectSettingDAL.updateProjectSetting(payload)
}

// 获取配置列表
function getProjectSettingList() {

	return new Promise((resolve, reject) => {

		projectSettingDAL.getProjectSettingList().then(res => {

			let result = null

			if (res.rows.length > 0) {

				result = res.rows.map(item => {

					return {

						id: item["PROJECTID"], // 配置工具改造完需要删除
						projectId: item["PROJECTID"],
						fromProjectTplId: item["FROMPROJECTTPLID"],
						name: item["PROJECTNAME"], // 配置工具改造完需要删除
						projectName: item["PROJECTNAME"],
						previewStatus: ["PREVIEWSTATUS"],
						deployStatus:["PREVIEWSTATUS"],
						toolVersion: item["TOOLVERSION"],
						engineVersion: item["ENGINEVERSION"],
						isDeleted: item["ISDELETED"],
						status: item["STATUS"],
						createdDate: item["CREATEDDATE"],
						modifiedDate: item["MODIFIEDDATE"],
						businessType: item["BUSINESSTYPE"]
					}
				})
			}

			resolve(result)

		}).catch(reject)
	})
}

// 获取配置详情
function getProjectSettingDetail(projectId) {

	return new Promise((resolve, reject) => {

		projectSettingDAL.getProjectSettingDetail(projectId).then(res => {

			if (res.rows.length > 0) {

				let sourceData = res.rows[0],
					result = {
						id: sourceData["PROJECTID"], // 配置工具改造完需要删除
						projectId: sourceData["PROJECTID"],
						name: sourceData["PROJECTNAME"], // 配置工具改造完需要删除
						projectName: sourceData["PROJECTNAME"],
						toolSetting: sourceData["TOOLSETTING"], // 配置工具配置
						createdDate: sourceData["CREATEDDATE"],
						modifiedDate: sourceData["MODIFIEDDATE"],
						toolVersion: sourceData["TOOLVERSION"],
						engineVersion: sourceData["ENGINEVERSION"],
						previewStatus: sourceData["PREVIEWSTATUS"],
						deployStatus: sourceData["DEPLOYSTATUS"],
						businessType: sourceData["BUSINESSTYPE"]
					}

				resolve(result)

			} else {

				reject("没有找到匹配的数据，projectId:" + projectId)
			}

			resolve(res.rows)

		}).catch(reject)
	})
}

module.exports = {
	insertProjectSetting,
	updateProjectSetting,
	getProjectSettingList,
	getProjectSettingDetail
}

