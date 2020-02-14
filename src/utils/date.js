
export function formatDate(oldDate, fmt) {
	let date = new Date()
	// 可以接收String、number、Date类型，前两种当时间戳来处理
	if (typeof oldDate === 'string' || typeof oldDate === 'number') {
		date = new Date(+oldDate)
	} else {
		date = oldDate
	}

	// 匹配格式化的时间是否有年份
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	}
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	}
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + ''
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
		}
	}
	return fmt
}

// 补0
function padLeftZero(str) {
	return ('00' + str).substr(str.length)
}
