<template>
  <view>
    <!--搜索栏-->
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
        <input style="width: 100%;" type="idcard" placeholder="请输入您的证件号码">
        <img class="search-icon" :src="getImgUrl('midLevel/search.png')">
      </view>
    </view>
    <!--客户信息-->
    <view v-for="(item,index) in userInfos" class="card">
      <view class="card-title">
        <view class="block" />
        <view class="customer-name">客户名称：{{ item.customerName }}</view>
        <view class="detail">查看明细</view>
      </view>
      <view class="card-row">
        <view class="row-key">合同金额</view>
        <view class="row-value">{{ item.account }}元</view>
      </view>
      <view class="card-row">
        <view class="row-key">贷款余额</view>
        <view class="row-value">{{ item.balance }}元</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      chooseLeftBtn: true,
      userInfos: [{
		  customerName: '张三',
	      account: 300000,
	      balance: 1000000
      },
      {
        customerName: '李四',
        account: 400000,
        balance: 5000000
      },
      {
        customerName: '王五',
        account: 500000,
        balance: 5000000
      }]
    }
  },
  methods: {
    tapBtn: function(args) {
      this.chooseLeftBtn = args.currentTarget.dataset.btn === 'left'
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
	.card{
		font-family: Source Han Sans CN;
		font-size: 28rpx;
		background-color: white;
		border-radius: 10rpx;
		margin-top: 5%;
		margin-left: 5%;
		width: 90%;
		height: 280rpx;
		display: flex;
		flex-direction: column;
		.card-title{
			font-size: 32rpx;
			height: 40%;
			width: 90%;
			margin-top: 5%;
			margin-left: 5%;
			display: flex;
			border-bottom: solid 1rpx #D4D7E1;
			justify-content: space-between;
			.block{
				margin-top: 1%;
				width: 1%;
				height: 40%;
				margin-left: -5%;
				background-color: #5B8FF9;
			}
			.customer-name{
				width: 60%;
				font-weight: bold;
				margin-left: -4%;
			}
			.detail{
				text-align: right;
				width: 30%;
				color: #2D2F31;
				opacity: 0.7;
			}
		}
		.card-row{
			height: 30%;
			width: 90%;
			margin-left: 5%;
			margin-top: 1%;
			display: flex;
			justify-content: space-between;
			.row-key{
				opacity: 0.8;
				width: 30%;
			}
			.row-value{
				font-weight: bold;
				text-align: right;
				width: 30%;
				color: #FD6362;
			}
		}
	}
</style>
