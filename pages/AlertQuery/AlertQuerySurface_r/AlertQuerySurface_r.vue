<template>
  <view>
    <cu-custom :is-back="true" :background-height="300">
      <template slot="content">客户信息查询</template>
    </cu-custom>

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
        <input style="width: 100%;" type="text" placeholder="请输入您的证件号码">
        <img class="search-icon" src="@/static/midLevel/search.png">
      </view>
      <!--信息结果-->
      <view class="info" style="position: absolute;">
        <view class="info-idcard" style="position: absolute;">
          <text class="info-title">身份证号</text>
          <text class="info-message" v-text="idcard">{{ idcard }}</text>
        </view>
        <view class="info-time" style="position: absolute;">
          <text class="info-title">录入时间</text>
          <text class="info-message" v-text="time">{{ time }}</text>
        </view>
        <view class="info-reason" style="position: absolute;">
          <text class="info-title">拒接原因</text>
          <text class="info-message" v-text="reason">{{ reason }}</text>
        </view>
      </view>
			
      <template>
        <!-- 这里放其他组件 -->
      </template>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      chooseLeftBtn: true,
      idcard: 400000200001011111,
      time: '2022年11月21日',
      reason: '??????????????????????\n????????????????????'
    }
  },
  methods: {
    tapBtn: function(args) {
      this.chooseLeftBtn = args.currentTarget.dataset.btn === 'left'
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
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 32rpx;
		background-color: #fff;
		margin-top: 30rpx;
	}
	.search-icon {
		height: 30rpx;
		width: 36rpx;
	}
	.info{
		position: relative;
		width: 94%;
		height: 320rpx;
		background: #FFFFFF;
		margin-top: 24rpx;
		margin-left: 3%;
		border-radius: 10rpx;
	}
	.info-idcard{
		position: absolute;
		width: 94%;
		height: 21%;
		top: 10%;
		margin-left: 3%;
		border-bottom: #E5E7ED solid 1rpx;
	}
	.info-time{
		position: absolute;
		width: 94%;
		height: 21%;
		top:40%;
		margin-left: 3%;
		border-bottom: #E5E7ED solid 1rpx;
	}
	.info-reason{
		position: absolute;
		width: 94%;
		height: 36%;
		top:72%;
		margin-left: 3%;
	}
	.info-title{
		position: absolute;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		opacity: 0.8;
		color: #2D2F31;
		text-align: left;
		left: 10rpx;
		width: 18%;
		height: 100%;
	}
	.info-message{
		position: absolute;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		color: #2D2F31;
		text-align: right;
		right: 10rpx;
		width: 78%;
		height: 100%;
	}
</style>
