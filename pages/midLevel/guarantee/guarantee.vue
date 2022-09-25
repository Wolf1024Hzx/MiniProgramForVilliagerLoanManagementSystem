<template>
	<view>
		<CustomerInformation>
			<text slot="BusinessInformation"></text>
		</CustomerInformation>
		<view class="main">
			<view class="navigate">
				<scroll-view class="classify" scroll-x="true" >
					<view v-for="(item, index) in classifyChoses" @click="bindClassify(index)" :class="classifyStatus === index ? 'classify-chose-active' : 'classify-chose'">{{item}}</view>
				</scroll-view>
				<view class="service">
					<view v-for="(item, index) in serviceChoses" @click="bindService(index)" :class="serviceStatus === index ? 'service-chose-active' : 'service-chose'">{{item}}</view>
				</view>
			</view>
			<view v-for="(item, index) in userInfos" class="card">
				<view class="card-head">
					<view class="block"></view>
					<view class="username">被担保人：{{item.username}}</view>
					<view class="more">查看明细</view>
				</view>
				<view class="card-row">
					<view class="key">业务种类</view>
					<view class="value">{{item.serviceType}}</view>
				</view>
				<view class="card-row">
					<view class="key">合同金额</view>
					<view class="value-dight">{{item.account}}元</view>
				</view>
				<view class="card-row">
					<view class="key">贷款余额</view>
					<view class="value-dight">{{item.balance}}元</view>
				</view>
				<view class="card-row">
					<view class="key">贷款起始日期</view>
					<view class="value">{{item.loanBegin}}</view>
				</view>
				<view class="card-row">
					<view class="key">贷款到期日期</view>
					<view class="value">{{item.loanEnd}}</view>
				</view>
				<view class="card-row">
					<view class="key">贷款</view>
					<view class="value-dight">{{item.loan}}元</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import CustomerInformation from '../CustomerInformation/CustomerInformation.vue'
export default {
	data() {
		return {
			classifyStatus: 3,
			serviceStatus: 0,
			classifyChoses: ['业务信息','额度依据','关联业务','对外担保','担保圈'],
			serviceChoses: ['概况', '正在担保', '结束担保'],
			userInfos: [{
				username: '张三',
				serviceType: '/',
				account: 300000,
				balance: 1000000,
				loanBegin: '2022年11月21日',
				loanEnd: '2023年11月21日',
				loan: 150000
			},
			{
				username: '张三',
				serviceType: '/',
				account: 300000,
				balance: 1000000,
				loanBegin: '2022年11月21日',
				loanEnd: '2023年11月21日',
				loan: 150000
			}]
		}
	},
	methods: {
		bindClassify(status) {
			this.classifyStatus = status
		},
		bindService(status) {
			this.serviceStatus = status
		}
	},
	components: {
		CustomerInformation
	}
}
</script>

<style scoped>

.main {
	font-family: Source Han Sans CN;
	padding-bottom: 72rpx;
}
.navigate {
	width: 100%;
	height: 230rpx;
	display: flex;
	flex-direction: column;
	padding: 0 32rpx;
	background-color: #fff;
}
.classify {
	flex: 1;
	width: 100%;
	white-space: nowrap;
	display: flex;
	align-items: center;
}
.service {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.classify {
	border-bottom: 1rpx solid #dddddd;
}
.classify-chose {
	display: inline-block;
	height: 45rpx;
	color: #a0a0a0;
	border-bottom: 3rpx solid #ffffff;
	margin-right: 48rpx;
}
.classify-chose-active {
	display: inline-block;
	height: 45rpx;
	color: #5484FD;
	border-bottom: 3rpx solid #5484FD;
	margin-right: 48rpx;
}
.service-chose {
	padding: 14rpx 26rpx;
	color: #a0a0a0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.service-chose-active {
	padding: 14rpx 26rpx;
	color: #FFFFFF;
	background: #5484fd;
	border-radius: 29rpx;
	display: flex;
	justify-content: center;
	align-items: center;
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
	height: 108rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1rpx solid #d4d7e1;
}
.block {
	position: absolute;
	left: 0;
	top: 40rpx;
	width: 9rpx;
	height: 30rpx;
	background: #5b8ff9;
}
.username {
	font-size: 32rpx;
	font-weight: 700;
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
	margin-top: 32rpx;
	display: flex;
	justify-content: space-between;
}
.key {
	opacity: 0.8;
	font-size: 28rpx;
	font-weight: 400;
	color: #2d2f31;
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
</style>