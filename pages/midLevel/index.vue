<template>
	<view style="font-family: Source Han Sans CN;">
		<cu-custom :is-back="false" bgColor="main-color">
		  <block slot="content">村民贷系统</block>
		</cu-custom>
		<view class="card" style="background: linear-gradient(-60deg,#67a3fc 5%, #3576fd 94%)">
			<img class="img" src="@/static/midLevel/bussiness_icon.png">
			<view class="mid">
				<view class="ch-Zn">业务概括</view>
				<view class="en">Business Overview</view>
			</view>
			<view class="btn" style="background: #3576fd;">查看</view>
		</view>
		<view class="card" style="background: linear-gradient(61deg,#fb8161 14%, #fbc880 94%);">
			<img class="img" src="@/static/midLevel/info_icon.svg">
			<view class="mid">
				<view class="ch-Zn">信息查询</view>
				<view class="en">Information Search</view>
			</view>
			<view class="btn" style="background: #fb8161;">查看</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
.card {
	height: 241rpx;
	width: 690rpx;
	margin: 35rpx auto 0;
	padding: 76rpx 46rpx;
	border-radius: 10rpx;
	display: flex;
	align-items: center;
}
.img {
	width: 82rpx;
	height: 89rpx;
	margin-right: 38rpx;
}
.mid {
	height: 100%;
	width: 400rpx;
}
.ch-Zn {
	width: 127rpx;
	height: 30rpx;
	width: 100%;
	font-size: 32rpx;
	font-weight: 700;
	word-break: keep-all;
	color: #ffffff;
}
.en {
	width: 211rpx;
	height: 19rpx;
	width: 100%;
	opacity: 0.75;
	font-size: 24rpx;
	font-weight: 400;
	word-break: keep-all;
	color: #ffffff;
	margin-top: 24rpx;
}
.btn {
	width: 125rpx;
	height: 55rpx;
	border-radius: 28rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
}
</style>