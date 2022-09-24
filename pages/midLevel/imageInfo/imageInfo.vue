<template>
	<view>
		<cu-custom :is-back="false">
		  <block slot="content">村民贷系统</block>
		</cu-custom>
		<view class="main">
			<view class="search">
				<input style="width: 100%;" type="idcard" placeholder="请输入您的证件号码">
				<img class="search-icon" src="@/static/midLevel/search.png">
			</view>
			<view class="navigate">
				<view class="classify">
					<view @click="bindClassify(0)" :class="classifyStatus === 0 ? 'classify-chose-active' : 'classify-chose'">管理类</view>
					<view @click="bindClassify(1)" :class="classifyStatus === 1 ? 'classify-chose-active' : 'classify-chose'">要件类</view>
				</view>
				<view class="service">
					<view @click="bindService(0)" :class="serviceStatus === 0 ? 'service-chose-active' : 'service-chose'">未结清业务</view>
					<view @click="bindService(1)" :class="serviceStatus === 1 ? 'service-chose-active' : 'service-chose'">已结清业务</view>
				</view>
			</view>
			<view class="image-info">
				<view class="tip">选择下方所需图片</view>
				<view class="card" @click="bindImage(0)">
					<view class="card-name">身份证</view>
					<view class="card-body" :class="imageStatus === 0 ? 'active-border' : ''">
						<img class="card-img" :src="imageURL[0]">
						<view v-if="imageStatus === 0">
							<view class="left-top">身份证</view>
							<view class="right-bottom"></view>
							<img class="ok-icon" src="@/static/midLevel/imageInfo/hk_right.png">
						</view>
					</view>
				</view>
				<view class="card" @click="bindImage(1)">
					<view class="card-name">户口本</view>
					<view class="card-body" :class="imageStatus === 1 ? 'active-border' : ''">
						<img class="card-img" :src="imageURL[1]">
						<view v-if="imageStatus === 1">
							<view class="left-top">户口本</view>
							<view class="right-bottom"></view>
							<img class="ok-icon" src="@/static/midLevel/imageInfo/hk_right.png">
						</view>
					</view>
				</view>
				<view class="card" @click="bindImage(2)">
					<view class="card-name">结婚证</view>
					<view class="card-body" :class="imageStatus === 2 ? 'active-border' : ''">
						<img class="card-img" :src="imageURL[2]"></img>
						<view v-if="imageStatus === 2">
							<view class="left-top">结婚证</view>
							<view class="right-bottom"></view>
							<img class="ok-icon" src="@/static/midLevel/imageInfo/hk_right.png">
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			classifyStatus: 0,
			serviceStatus: 0,
			imageStatus: -1,
			imageURL: ["https://i1.hdslb.com/bfs/face/aaf33dced1941af0946f37c62f4b48fcaba9c9a2.jpg@92w_92h.webp",
			"https://i1.hdslb.com/bfs/face/aaf33dced1941af0946f37c62f4b48fcaba9c9a2.jpg@92w_92h.webp",
			"https://i1.hdslb.com/bfs/face/aaf33dced1941af0946f37c62f4b48fcaba9c9a2.jpg@92w_92h.webp"]
		}
	},
	methods: {
		bindClassify(status) {
			this.classifyStatus = status
		},
		bindService(status) {
			this.serviceStatus = status
		},
		bindImage(status) {
			this.imageStatus = status
		}
	}
}
</script>

<style scoped>
.search {
	width: 100%;
	height: 96rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 32rpx;
	background-color: #fff;
	margin-bottom: 30rpx;
}
.search-icon {
	height: 37rpx;
	width: 36rpx;
}	
.main {
	font-family: Source Han Sans CN;
	padding-top: 24rpx;
}
.navigate {
	width: 100%;
	height: 230rpx;
	display: flex;
	flex-direction: column;
	padding: 0 32rpx;
	background-color: #fff;
}
.classify, .service {
	flex: 1;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.classify {
	border-bottom: 1rpx solid #dddddd;
}
.classify-chose {
	height: 45rpx;
	color: #a0a0a0;
	border-bottom: 3rpx solid #ffffff;
}
.classify-chose-active {
	height: 45rpx;
	color: #5484FD;
	border-bottom: 3rpx solid #5484FD;
}
.service-chose {
	width: 196rpx;
	height: 57rpx;
	color: #a0a0a0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.service-chose-active {
	width: 196rpx;
	height: 57rpx;
	color: #FFFFFF;
	background: #5484fd;
	border-radius: 29rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.image-info {
	width: 690rpx;
	height: 1363rpx;
	background: #fff;
	border-radius: 10rpx;
	margin: 31rpx auto 0;
	padding: 40rpx 27rpx 50rpx;
}
.card {
	margin-top: 50rpx;
}
.tip {
	font-size: 32rpx;
	font-weight: 700;
	color: #2d2f31;
}
.card-name {
	font-size: 28rpx;
	font-weight: 400; 
	color: #2d2f31;
	margin-bottom: 28rpx;
}
.card-img {
	width: 100%;
	height: 100%;
	border-radius: 10rpx;
}
.card-body {
	width: 595rpx;
	height: 299rpx;
	background: #eaeaea;
	border-radius: 15rpx;
	position: relative;
}
.active-border {
	border: 4rpx solid #4E8BFF;
}
.left-top {
	position: absolute;
	width: 180rpx;
	height: 70rpx;
	left: -4rpx;
	top: -4rpx;
	background: linear-gradient(0deg,#4e8bff 5%, #52b0ff 94%);
	border-radius: 5rpx;
	border-top-left-radius: 15rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
}
.right-bottom {
	position: absolute;
	width: 0;
	height: 0;
	right: -4rpx;
	bottom: -4rpx;
	border-bottom: 32rpx solid #4E8BFF;
	border-left: 32rpx solid transparent;
	border-right: 32rpx solid #4E8BFF;
	border-top: 32rpx solid transparent;
	border-bottom-right-radius: 15rpx;
}
.ok-icon {
	position: absolute;
	height: 23rpx;
	width: 29rpx;
	right: 2rpx;
	bottom: 2rpx;
}
</style>