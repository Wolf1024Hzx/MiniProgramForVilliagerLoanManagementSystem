<template>
  <view>
    <cu-custom is-back="true">
      <template slot="content">业务概况明细</template>
    </cu-custom>
    <view class="label1" />
    <view class="label2" />
    <view class="label3" />
    <view class="my-account_page">
      <!--标题-->
      <view class="card">
        <view class="card-header row-middle">
          <view class="card-name">业务概括</view>
          <view class="get-detail" @click="goDetail('business')">查看明细</view>
        </view>
        <view class="card-body col">
          <view class="detail row-middle">
            <view class="label">村民户数(户)</view>
            <view class="value t-blue">30000</view>
          </view>
          <view class="detail row-middle">
            <view class="label">贷款余额(元)</view>
            <view class="value">300000</view>
          </view>
          <view class="detail row-middle">
            <view class="label">存款余额(元)</view>
            <view class="value">100000</view>
          </view>
        </view>
      </view>
      <view class="card">
        <view class="card-header row-middle">
          <view class="card-name">贷款业绩</view>
          <view class="get-detail" @click="goDetail('performance')">查看明细</view>
        </view>
        <view class="card-body col">
          <view class="detail row-middle">
            <view class="label">本月业绩(元)</view>
            <view class="value">30000</view>
          </view>
          <view class="detail row-middle">
            <view class="label">较上月(元)</view>
            <view class="value">300000</view>
          </view>
          <view class="detail row-middle">
            <view class="label">本年业绩(元)</view>
            <view class="value">100000</view>
          </view>
          <view class="detail row-middle">
            <view class="label">较年初(元)</view>
            <view v-updown class="value">100000</view>
          </view>
        </view>
      </view>
      <view class="card">
        <view class="card-header row-middle">
          <view class="card-name">欠息逾期情况</view>
          <view class="get-detail" @click="goDetail('overDate')">查看明细</view>
        </view>
        <view class="card-body col">
          <view class="detail row-middle">
            <view class="label">欠息户数(户)</view>
            <view class="value t-blue">30000</view>
          </view>
          <view class="detail row-middle">
            <view class="label">欠息金额(元)</view>
            <view class="value">300000</view>
          </view>
          <view class="detail row-middle">
            <view class="label">逾期户数(户)</view>
            <view class="value t-blue">100000</view>
          </view>
          <view class="detail row-middle">
            <view class="label">逾期金额(元)</view>
            <view class="value">100000</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
export default {
  methods: {
    goDetail: function(type) {
      if (type === 'business') {
        uni.navigateTo({
          url: '/pages/subbranch/ManagementDetails/ManagementDetails'
        })
      } else if (type === 'performance') {
        uni.navigateTo({
          url: './PerformanceDetail/index'
        })
      } else if (type === 'overDate') {
        uni.navigateTo({
          url: '/pages/subbranch/OverduePayment/OverduePayment'
        })
      }
    }
  }
}
</script>

<style>
	@import '@/style/index.css';
	.label1{
		position: absolute;
		width: 10rpx;
		height: 30rpx;
		background-color: #5B8FF9;
		top: 248rpx;
		left: 30rpx;
	}
	.label2{
		position: absolute;
		width: 10rpx;
		height: 30rpx;
		background-color: #FD6362;
		top: 620rpx;
		left: 30rpx;
	}
	.label3{
		position: absolute;
		width: 10rpx;
		height: 30rpx;
		background-color:#FDC862;
		top: 1053rpx;
		left: 30rpx;
	}
	.my-account_page {
		padding: 48rpx 30rpx 24rpx;
		background-color: #F3F5F9;
		min-height: 800rpx;
	}
	.card {
		background-color: #fff;
		padding: 21px 15px 0px;
		font-family: Source Han Sans CN, Source Han Sans CN-Regular;
		margin-bottom: 10px;
	}
	.card .card-header {
		justify-content: space-between;
		padding-bottom: 17px;
		border-bottom: 0.5px solid #E9E9E9;
	}
	.card .card-header .card-name {
		font-size: 16px;
		font-weight: 700;
		color: #2d2f31;
	}
	.card .card-header .get-detail {
		opacity: 0.7;
		font-size: 14px;
		font-weight: 400;
		color: #2d2f31;
	}
	.card .card-body {
		justify-content: space-between;
		font-size: 14px;
		margin-top: 17px;
	}
	.detail {
		justify-content: space-between;
		margin-bottom: 16px;
	}
	.label {
		opacity: 0.8;
		font-weight: 400;
		color: #2d2f31;
	}
	.value{
		font-weight: 700;
		color: #fd6362;
	}
	.t-blue {
		color: #4E8BFF;
	}
</style>
