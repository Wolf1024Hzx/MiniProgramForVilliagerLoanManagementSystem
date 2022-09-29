<template>
	<view>
		<selects :getData="getData" :isBack="true"></selects>
		<view class="overdue" v-show="selected && overdueSelected">
			<view class="overdue-header">
				<view class="loan-balance">
					<view class="overdue-key">贷款余额合计(总计)</view>
					<view class="overdue-value">3000万元</view>
				</view>
				<view class="debit-interest">
					<view class="overdue-key">欠息合计(总计)</view>
					<view class="overdue-value">500万元</view>
				</view>
			</view>
			<view class="card" :style="overdueMore ? '' : 'height: 544rpx; overflow: hidden;'">
				<view class="card-row">
					<view class="key">序号</view>
					<view class="value">{{item.id}}</view>
				</view>
				<view class="card-row">
					<view class="key">客户名称</view>
					<view class="value">{{item.name}}</view>
				</view>
				<view class="card-row">
					<view class="key">贷款余额(元)</view>
					<view class="value-dight">{{item.balance}}</view>
				</view>
				<view class="card-row">
					<view class="key">欠息合计(元)</view>
					<view class="value-dight">{{item.debitSum}}</view>
				</view>
				<view class="card-row">
					<view class="key">所属机构</view>
					<view class="value">{{item.organization}}</view>
				</view>
				<view class="card-row">
					<view class="key">所属机构</view>
					<view class="value">{{item.organization}}</view>
				</view>
				<view class="card-row">
					<view class="key">所属机构</view>
					<view class="value">{{item.organization}}</view>
				</view>
				<view class="card-row">
					<view class="key">所属机构</view>
					<view class="value">{{item.organization}}</view>
				</view>
				<view class="card-row" style="border: 0;">
					<view class="key">所属机构</view>
					<view class="value">{{item.organization}}</view>
				</view>
				<view class="more-tip" v-show="!overdueMore" @click="getMoreOverdue">
					<view class="mask"></view>
					<view class="tip">点击加载更多</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import selects from '../components/selects/selects'
	export default {
		components: {
			selects
		},
		data() {
			return {
				item: {
					id: '01',
					name: '张三',
					balance: 100000000,
					debitSum: 5900000.00,
					organization: 'XXXXXXX金融贷'
				},
				overdueMore: false
			}
		},
		methods: {
			getData() {
				console.log('data')
			}
		}
	}
</script>

<style scoped>
	.more-tip {
		position: absolute;
		width: 100%;
		height: 180rpx;
		bottom: 0;
		left: 0;
	}

	.mask {
		height: 100rpx;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
	}

	.tip {
		height: 80rpx;
		display: flex;
		justify-content: center;
		background-color: #fff;
	}

	.overdue {
		width: 690rpx;
		margin: 32rpx auto 0;
		padding-bottom: 72rpx;
	}

	.overdue-header {
		width: 690rpx;
		height: 150rpx;
		background: #fefefc;
		border-radius: 10rpx;
		display: flex;
		padding: 32rpx;
		margin-bottom: 32rpx;
	}

	.loan-balance,
	.debit-interest {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.loan-balance {
		border-right: 1rpx solid #e8e8e7;
	}

	.debit-interest {
		border-left: 1rpx solid #e8e8e7;
	}

	.overdue-key {
		font-size: 28rpx;
		font-weight: 400;
		color: #2d2f31;
	}

	.overdue-value {
		font-size: 34rpx;
		font-weight: 700;
		color: #fd6362;
	}

	.card {
		width: 100%;
		background: #ffffff;
		border-radius: 10rpx;
		position: relative;
		padding: 0 32rpx;
	}

	.card-row {
		width: 100%;
		height: 92rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1rpx solid #d4d7e1;
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
