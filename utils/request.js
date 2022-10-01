const root = 'http://120.24.235.36:8089/'

function resolvePath(url) {
	if(url.startsWith('/')) 
		return root + url.substring(1)
	return root + url
}

export default (url, method, data) => new Promise((resolve, reject) => {
	uni.request({
		url: resolvePath(url),
		method,
		data,
		success: (res) => {
			if(res.data.code === 200){
				resolve(res.data.data)
			}else{
				reject(res)
				uni.showToast({
					title: res.data.message || '未知错误',
					icon:'error'
				})
			}
		},
		fail: (err) => {
			reject(err)
			uni.showToast({
			  title: '网络错误',
			  icon: 'error'
			})
		}
	})
})