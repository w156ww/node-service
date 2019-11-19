const projectTplDAL = require("../04-dal/project-tpl-dal")

// 保存配置
function insertProjectTpl(payload) {

	return projectTplDAL.insertProjectTpl(payload)
}

// 修改配置
function updateProjectTpl(payload) {

	return projectTplDAL.updateProjectTpl(payload)
}

// 获取配置列表
function getProjectTplList() {

	return new Promise((resolve, reject) => {

		projectTplDAL.getProjectTplList().then(res => {

			let result = null

			if (res.rows.length > 0) {

				result = res.rows.map(item => {

					return {

						id: item["PROJECTID"], // 配置工具改造完需要删除
						projectTplId: item["PROJECTTPLID"],
						fromProjectId: item["FROMPROJECTID"], // 来源id
						name: item["PROJECTTPLNAME"], // 配置工具改造完需要删除
						projectTplName: item["PROJECTTPLNAME"],
						toolVersion: item["TOOLVERSION"],
						engineVersion: item["ENGINEVERSION"],
						isDeleted:item["ISDELETED"],
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
function getProjectTplDetail(projectTplId) {

	return new Promise((resolve, reject) => {

		projectTplDAL.getProjectTplDetail(projectTplId).then(res => {

			if (res.rows.length > 0) {

				let sourceData = res.rows[0],
					result = {
						id: sourceData["PROJECTID"], // 配置工具改造完需要删除
						projectTplId: sourceData["PROJECTTPLID"],
						name: sourceData["PROJECTTPLNAME"], // 配置工具改造完需要删除
						projectTplName: sourceData["PROJECTTPLNAME"],
						toolSetting: sourceData["TOOLSETTING"], // 配置工具配置
						fromProjectId: sourceData["FROMPROJECTID"], // 来源id
						createdDate: sourceData["CREATEDDATE"],
						modifiedDate: sourceData["MODIFIEDDATE"],
						toolVersion: sourceData["TOOLVERSION"],
						engineVersion: sourceData["ENGINEVERSION"],
						businessType: sourceData["BUSINESSTYPE"]
					}

				resolve(result)

			} else {

				reject("没有找到匹配的数据，projectTplId:" + projectTplId)
			}

			resolve(res.rows)

		}).catch(reject)
	})
}

module.exports = {
	insertProjectTpl,
	updateProjectTpl,
	getProjectTplList,
	getProjectTplDetail
}

