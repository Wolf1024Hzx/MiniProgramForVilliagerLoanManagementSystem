<template>
	<view class="main">
		<choses :serviceStatus="serviceStatus" :serviceChoses="serviceChoses"></choses>
		<view v-if="!isMore && !isSub" class="card">
			<view class="card-head" style="position: relative;">
				<view @click="switchSub" class="arrow-position">
					<view class="arrow"></view>
					<text class="more-left">概括</text>
				</view>
				贷款发放信息
			</view>
			<view class="card-row">
				<view class="key">融资/票面金额</view>
				<view class="value-dight">{{item.account}}元</view>
			</view>
			<view class="card-row">
				<view class="key">已还金额</view>
				<view class="value-dight">{{item.returnAccount}}元</view>
			</view>
			<view class="card-row">
				<view class="key">还款计划</view>
				<view class="value">{{item.returnPlan}}</view>
			</view>
			<view class="card-row">
				<view class="key">融资/票面余额</view>
				<view class="value-dight">{{item.balance}}元</view>
			</view>
			<view class="card-row">
				<view class="key">长期/短期</view>
				<view class="value">{{item.term}}</view>
			</view>
			<view class="card-row">
				<view class="key">放款/开票日</view>
				<view class="value">{{item.loanBegin}}</view>
			</view>
			<view class="card-row">
				<view class="key">贷款/票据到期日</view>
				<view class="value">{{item.loanEnd}}</view>
			</view>
			<view class="card-row">
				<view class="key">贷款账号</view>
				<view class="value">{{item.loanId}}</view>
			</view>
			<view @click="switchInfo" class="card-row" style="border: 0">
				<view class="key">......</view>
			</view>
		</view>
		<view v-else-if="isMore && !isSub" class="card">
			<view class="card-head-more">
				<view @click="switchInfo" class="more-left">
					<view class="arrow"></view>
					<text>上一页</text>
				</view>
				<view class="more-right">贷款发放信息</view>
			</view>
			<view class="card-row">
				<view class="key">授信截止日期</view>
				<view class="value">{{item.deadline}}</view>
			</view>
			<view class="card-row">
				<view class="key">借款人授信内容</view>
				<view class="value">{{item.content}}</view>
			</view>
			<view class="card-row">
				<view class="key">合同编号</view>
				<view class="value">{{item.HloanId}}</view>
			</view>
			<view class="card-row">
				<view class="key">合同金额</view>
				<view class="value-dight">{{item.Haccount}}元</view>
			</view>
			<view class="card-row">
				<view class="key">贷款余额</view>
				<view class="value-dight">{{item.Hbalance}}元</view>
			</view>
			<view class="card-row">
				<view class="key">贷款起始日期</view>
				<view class="value">{{item.HloanBegin}}</view>
			</view>
			<view class="card-row">
				<view class="key">贷款到期日期</view>
				<view class="value">{{item.HloanEnd}}</view>
			</view>
			<view class="card-row">
				<view class="key">贷款期限</view>
				<view class="value">{{item.HdeadLine}}</view>
			</view>
		</view>
		<view v-else>
			<view class="card-sub" v-for="(item, index) in subInfos" :key="index">
				<view class="card-head-sub" @click="switchSub">
					<view class="block"></view>
					<view class="name-sub">{{item.type}}</view>
					<view class="more-sub">查看明细</view>
				</view>
				<view class="card-row" @click="switchSub">
					<view class="key">合同编号</view>
					<view class="value">{{item.id}}</view>
				</view>
				<view class="card-row" @click="switchSub">
					<view class="key">合同金额(元)</view>
					<view class="value">{{item.account}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import choses from '../choses/choses.vue'
	export default {
		data() {
			return {
				serviceStatus: 0,
				serviceChoses: ['已结清业务', '未结清业务'],
				item: {
					account: 1000000,
					returnAccount: 500000,
					returnPlan: '到期还款',
					balance: 300000,
					term: '短期',
					loanBegin: '2022年11月12日',
					loanEnd: '2023年11月12日',
					loanId: 'N3758645',
					
					deadline: '2022年11月12日',
					content: '/',
					HloanId: '092276',
					Haccount: 300000,
					Hbalance: 300000,
					HloanBegin: '2023年11月12日',
					HloanEnd: '2023年11月12日',
					HdeadLine: '1年'
				},
				isMore: false,
				isSub: true,
				subInfos: [{
					type: '社区贷',
					id: '30000',
					account: 3000000.00
				},
				{
					type: '个人贷',
					id: '30000',
					account: 3000000.00
				},
				{
					type: '企业贷',
					id: '30000',
					account: 3000000.00
				}]
			}
		},
		methods: {
			switchInfo() {
				this.isMore = !this.isMore
			},
			switchSub() {
				this.isSub = !this.isSub
			}
		},
		components: {
			choses
		}
	}
</script>

<style>
.main {
	font-family: Source Han Sans CN;
	padding-bottom: 72rpx;
}
.card {
	width: 690rpx;
	background: #ffffff;
	border: 1rpx solid #e9e9e9;
	border-radius: 10rpx;
	margin: 24rpx auto 0;
	position: relative;
	padding: 0 32rpx 32rpx;
}
.card-head {
	height: 112rpx;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1rpx solid #E5E7ED;
	font-size: 32rpx;
	font-weight: 400;
	color: #2d2f31;
}
.more {
	opacity: 0.7;
	font-size: 28rpx;
	font-weight: 400;
	color: #2d2f31;
}
.card-row {
	width: 100%;
	height: 90rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1rpx solid #E9E9E9;
}
.key {
	opacity: 0.8;
	font-size: 28rpx;
	font-weight: 400;
	color: #2D2F31;
}
.value {
	font-size: 28rpx;
	font-weight: 700;
	color: #2d2f31;
}
.value-dight {
	font-size: 28rpx;
	font-weight: 700;
	color: #fd6362;
}
.card-head-more {
	height: 112rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1rpx solid #E5E7ED;
	font-size: 32rpx;
	font-weight: 400;
	color: #2d2f31;
}
.more-left {
	font-size: 28rpx;
	font-weight: 400;
	color: #5484fd;
}
.arrow {
	display: inline-block;
	width: 16rpx;
	height: 16rpx;
	border: 2rpx solid #5484fd;
	border-top-width: 0;
	border-right-width: 0;
	transform: matrix(0.71,0.71,-0.71,0.71,0,0);
	margin-right: 4rpx;
}
.arrow-position {
	position: absolute; 
	left: 0; 
	top: 50%; 
	transform: translateY(-50%);
}
.more-right {
	width: 205rpx;
	height: 55rpx;
	border: 1rpx solid #5484fd;
	border-radius: 10rpx;
	color: #5484fd;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28rpx;
	font-weight: 400;
}
.card-sub {
	width: 690rpx;
	background: #ffffff;
	border: 1rpx solid #e9e9e9;
	border-radius: 10rpx;
	margin: 24rpx auto 0;
	position: relative;
	padding: 0 32rpx;
}
.card-head-sub {
	height: 108rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.block {
	position: absolute;
	left: 0;
	top: 40rpx;
	width: 9rpx;
	height: 30rpx;
	background: #5b8ff9;
}
.name-sub {
	font-size: 30rpx;
	font-weight: 700;
	color: #2d2f31;
}
.more-sub {
	font-size: 28rpx;
	font-weight: 400;
	text-align: left;
	color: #5484fd;
}
</style>
