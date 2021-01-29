const requireApi = require.context(
	// api目录的相对路径
	'.',
	// 是否查询子目录
	false,
	// 查询文件的最后一个后缀
	/.js$/
)

let moudle = {}

requireApi.keys().forEach((key, index) => {
	if (key === './index.js') return
	Object.assign(moudle, requireApi(key))
})

export default moudle
