<template>
	<view>
		<customerInformation :status="status" :choses="choses" :title="'集团客户'"></customerInformation>
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
	import customerInformation from '@/components/customerInformation/customerInformation.vue'
	export default {
		data() {
			return {
				status: 0,
				choses: ['证件查询', '客户名称查询'],
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
					}
				]
			}
		},
		components: {
			customerInformation
		}
	}
</script>

<style lang="less" scoped>
	.card {
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

		.card-title {
			font-size: 32rpx;
			height: 28%;
			width: 90%;
			margin-top: 5%;
			margin-left: 5%;
			display: flex;
			border-bottom: solid 1rpx #D4D7E1;
			justify-content: space-between;

			.block {
				margin-top: 1%;
				width: 1%;
				height: 40%;
				margin-left: -5%;
				background-color: #5B8FF9;
			}

			.customer-name {
				width: 60%;
				font-weight: bold;
				margin-left: -4%;
			}

			.detail {
				text-align: right;
				width: 30%;
				color: #2D2F31;
				opacity: 0.7;
			}
		}

		.card-row {
			margin: 0 5%;
			margin-top: 4%;
			display: flex;
			justify-content: space-between;

			.row-key {
				opacity: 0.8;
				width: 30%;
			}

			.row-value {
				font-weight: bold;
				text-align: right;
				width: 30%;
				color: #FD6362;
			}
		}
	}
</style>
