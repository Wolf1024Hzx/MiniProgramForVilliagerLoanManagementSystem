<template>
  <view>
    <cu-custom :is-back="false">
      <block slot="content">村民贷系统</block>
    </cu-custom>
    <view class="main">
      <view class="card" style="background: linear-gradient(-60deg,#67a3fc 5%, #3576fd 94%)">
        <img class="img" :src="getImgUrl('midLevel/bussiness_icon.png')">
        <view class="mid">
          <view class="ch-Zn">业务概括</view>
          <view class="en">Business Overview</view>
        </view>
        <view class="btn" style="background: #3576fd;">查看</view>
      </view>
      <view class="card" style="background: linear-gradient(61deg,#fb8161 14%, #fbc880 94%);">
        <img class="img" :src="getImgUrl('midLevel/info_icon.svg')">
        <view class="mid">
          <view class="ch-Zn">信息查询</view>
          <view class="en">Information Search</view>
        </view>
        <view class="btn" style="background: #fb8161;">查看</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    getImgUrl(url) {
      return this.$resourceRoute(url)
    }
  }
}
</script>

<style scoped>
.main {
	font-family: Source Han Sans CN;
	padding-top: 24rpx;
}
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.ch-Zn {
	font-size: 32rpx;
	font-weight: 700;
	color: #ffffff;
}
.en {
	opacity: 0.75;
	font-size: 24rpx;
	font-weight: 400;
	color: #ffffff;
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
