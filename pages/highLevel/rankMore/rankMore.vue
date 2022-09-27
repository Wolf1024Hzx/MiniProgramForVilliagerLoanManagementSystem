<template>
	<view>
		<cu-custom :is-back="true">
			<template slot="content">村民贷排行榜</template>
		</cu-custom>
		<view class="main" style="margin-top: 56rpx;">
			<view class="card" v-for="(item,index) in cardInfos" :key="index">
				<view class="card-row">
					<view class="key">排名</view>
					<view class="value">{{item.rank}}</view>
				</view>
				<view class="card-row">
					<view class="key">支行</view>
					<view class="value">{{item.subbranch}}</view>
				</view>
				<view class="card-row">
					<view class="key">贷款额(元)</view>
					<view class="value-dight">{{item.loanAccount}}元</view>
				</view>
				<view class="card-row">
					<view class="key">贷款人数</view>
					<view class="value">{{item.loanMemberNum}}</view>
				</view>
				<view class="card-row" style="border: 0;">
					<view class="key">夫妻数</view>
					<view class="value">{{item.coupleNum}}</view>
				</view>
			</view>
			<view class="more-detail">下拉加载更多</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardInfos: [
					{
						rank: '01',
						subbranch: '中国XXXX银行',
						loanAccount: 1000000,
						loanMemberNum: 5,
						coupleNum: 2
					},
					{
						rank: '02',
						subbranch: '中国XXXX银行',
						loanAccount: 1000000,
						loanMemberNum: 5,
						coupleNum: 2
					},
					{
						rank: '02',
						subbranch: '中国XXXX银行',
						loanAccount: 1000000,
						loanMemberNum: 5,
						coupleNum: 2
					},
					{
						rank: '02',
						subbranch: '中国XXXX银行',
						loanAccount: 1000000,
						loanMemberNum: 5,
						coupleNum: 2
					}
				]
			}
		},
		methods: {
			
		},
		onReachBottom() {
			this.cardInfos.push({
				rank: '01',
				subbranch: '中国XXXX银行',
				loanAccount: 1000000,
				loanMemberNum: 5,
				coupleNum: 2
			})
		}
	}
</script>

<style scoped>
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
.more-detail {
	margin-top: 50rpx;
	text-align: center;
}
</style>
