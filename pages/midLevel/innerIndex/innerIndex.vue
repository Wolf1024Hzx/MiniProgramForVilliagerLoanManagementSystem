<template>
  <view>
    <cu-custom :isBack="true">
      <block slot="content">村民贷系统</block>
    </cu-custom>
    <view class="main">
      <view class="card" @click="router(0)">
        <img class="img" :src="getImgUrl('midLevel/innerIndex/icon1.png')">
        <view class="mid">
          <view class="ch-Zn">客户信息</view>
          <view class="en">Customer Information</view>
        </view>
        <view class="arrow" />
      </view>
      <view class="card" @click="router(1)">
        <img class="img" :src="getImgUrl('midLevel/innerIndex/icon2.png')">
        <view class="mid">
          <view class="ch-Zn">影像信息</view>
          <view class="en">Image Information</view>
        </view>
        <view class="arrow" />
      </view>
      <view class="card" @click="router(2)">
        <img class="img" :src="getImgUrl('midLevel/innerIndex/icon3.png')">
        <view class="mid">
          <view class="ch-Zn">集团客户</view>
          <view class="en">Group Clients</view>
        </view>
        <view class="arrow" />
      </view>
      <view class="card" @click="router(3)">
        <img class="img" :src="getImgUrl('midLevel/innerIndex/icon4.png')">
        <view class="mid">
          <view class="ch-Zn">预警查询</view>
          <view class="en">Early Warning</view>
        </view>
        <view class="arrow" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    getImgUrl(url) {
      return this.$resourceRoute(url)
    },
	router(index) {
		let url = './'
		switch (index) {
			case 0:
				url = '../bussinessInfo/bussinessInfo'
				break
			case 1:
				url = '../imageInfo/imageInfo'
				break
			case 2:
				url = '../enterpriseCustomerQuery/enterpriseCustomerQuery'
				break
			case 3:
				url = '../alertQuery/alertQuery'
				break
			default:
				break
		}
		uni.navigateTo({
		  url: url,
		  animationType: 'pop-in',
		  fail: (err) => {
		    console.log(err)
		  }
		})
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
	width: 694rpx;
	height: 146rpx;
	background: #ffffff;
	border-radius: 10rpx;
	margin: 28rpx auto 0;
	padding: 32.5rpx 28.5rpx;
	display: flex;
	align-items: center;
}
.img {
	width: 81rpx;
	height: 81rpx;
	margin-right: 38rpx;
}
.mid {
	height: 100%;
	width: 488rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.ch-Zn {
	font-size: 28rpx;
	font-weight: 400;
	color: #2d2f31;
}
.en {
	opacity: 0.75;
	font-size: 24rpx;
	font-weight: 400;
	color: #2d2f31;
}
.btn {
	width: 125rpx;
	height: 55rpx;
	border-radius: 28rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.arrow {
	width: 20rpx;
	height: 20rpx;
	border: 2rpx solid #888;
	border-left-width: 0;
	border-bottom-width: 0;
	transform: matrix(0.71,0.71,-0.71,0.71,0,0);
}
</style>
