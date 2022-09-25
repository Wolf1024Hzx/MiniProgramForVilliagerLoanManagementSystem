<template>
  <view>
    <!--查询框-->
    <cu-custom :is-back="true" :background-height="300">
      <template slot="content">客户信息查询</template>
    </cu-custom>
    <!--蒙版-->
    <view class="masking" />
    <view style="position: relative;z-index: 1;">
      <!-- 这里放两个按钮 -->
      <view style="display: flex;margin-top: 60rpx;">
        <view class="btn" data-btn="left" @tap="tapBtn">
          证件查询
          <view v-if="chooseLeftBtn" class="line_under_btn" />
        </view>
        <view class="btn" data-btn="right" @tap="tapBtn">
          客户名称查询
          <view v-if="!chooseLeftBtn" class="line_under_btn" />
        </view>
      </view>
      <!--搜索证件号-->
      <view class="search">
        <view class="search-box">
          <text class="search-tip">证件号码</text>
          <input v-model="infoidcard" class="search-input" type="text" placeholder="请输入您的证件号码">
        </view>
        <view class="search-button">
          <button class="search-button-1" @click="judgeidcard">查询</button>
        </view>
      </view>
      <template>
        <!-- 这里放其他组件 -->
      </template>
    </view>
    <!--弹出框-->
    <view class="pop">
      <view class="info-pop">
        <image class="img-pop-1" :src="getImgUrl('alert/error.png')" />
        <text class="info-pop-1">该用户不在预警名单内</text>
      </view>
      <view class="btn-pop">
        <button class="btn-pop-1" @click="allright">知道了</button>
      </view>
    </view>
  </view>
</template>

<script> 
export default {
  data() {
    return {
      chooseLeftBtn: true,
      infoidcard: ''
    }
  },
  methods: {
    tapBtn: function(args) {
      this.chooseLeftBtn = args.currentTarget.dataset.btn === 'left'
    },
    judgeidcard: function() {
      console.log(this.infoidcard)
    },
    allright: function() {
      console.log('see you')
    },
    getImgUrl(url) {
      return this.$resourceRoute(url)
    }
  }
}
</script>

<style lang="less" scoped>
	.btn {
		position: relative;
		flex: 1;
		text-align: center;
		color: #FFFFFF;
		font-size: 30rpx;
		font-family: Source Han Sans CN, Source Han Sans CN-Bold;
		font-weight: 400;
		.line_under_btn {
			position: absolute;
			width: 345rpx;
			height: 6rpx;
			border-radius: 3rpx;
			background-color: #FFFFFF;
			bottom: -18rpx;
			left: 15rpx
		}
	}
	.input-id-box{
		width:100%;
		height:75rpx;
		margin-top: 50rpx;
		background: #FFFFFF;
	}
	.id-card{
		width: 80%;
		height: 25rpx;
		margin-left: 25rpx;
		margin-bottom: 0rpx;
	}
	.search {
		position: relative;
		width: 100%;
		height: 280rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 0 32rpx;
		background-color: white;
		margin-top: 36rpx;
		.search-box{
			display: flex;
			flex-direction: row;
			font-family: Source Han Sans CN;
			color: #2D2F31;
			margin-top:8%;
			height : 50%;
			width: 100%;
			.search-tip{
				width: 20%;
				margin-left: 5%;
			}
			.search-input{
				width: 70%;
				border: solid 1rpx #040404;
				border-radius: 10rpx;
			}
		}
		.search-button{
			height: 50%;
			width: 90%;
			.search-button-1{
				font-size: 28rpx;
				color: white;
				background-color: #4E8BFF;
				border-radius: 35rpx;
			}
		}
	}
	.masking{
		position: absolute;
		top: 0%;
		bottom: 0%;
		width: 100%;
		height: 100%;
		z-index: 2;
		background-color: #040404;
		opacity: 0.5;
	}
	.pop{
		position: absolute;
		display: flex;
		flex-direction: column;
		z-index: 4;
		width: 64%;
		top: 24%;
		left: 18%;
		height: 16%;
		font: #2D2F31;
		border-radius: 20rpx;
		background-image: linear-gradient(0deg,white 80%,#b6cafb);
		.info-pop{
			margin-top: 10%;
			margin-left: 16%;
			display: flex;
			width: 80%;
			height: 50%;
			font-weight: Bold;
			.img-pop-1{
				width: 40rpx;
				height: 40rpx;
			}
			.info-pop-1{
				margin-left: 2%;
				width: 80%;
				height: 100%;
			}
		}
		.btn-pop{
			margin-left: 10%;
			margin-bottom: 6%;
			width: 80%;
			.btn-pop-1{
				color: white;
				font-size: 30rpx;
				background-color: #5484FD;
			}
		}
	}
</style>
