<template>
	<view class="main">
		<view class="info">
			<view v-for="(item, index) in guarateeInfos" :key="index" class="card">
				<view class="card-head">{{item.type}}</view>
				<view class="card-body">
					<view class="card-body-row">
						<view class="key">组数</view>
						<view class="value">{{item.groupNum}}</view>
					</view>
					<view class="card-body-row">
						<view class="key">人数</view>
						<view class="value">{{item.memberNum}}</view>
					</view>
					<view class="card-body-row">
						<view class="key">金额</view>
						<view class="value">{{item.price}}元</view>
					</view>
				</view>
				<view class="card-hail">
					<view class="btn">去查看</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			guarateeInfos: [{
				type: 'AB互保',
				groupNum: 3,
				memberNum: 15,
				price: 150000
			},
			{
				type: 'ABC担保圈',
				groupNum: 3,
				memberNum: 15,
				price: 150000
			},
			{
				type: 'ABCD担保圈',
				groupNum: 3,
				memberNum: 15,
				price: 150000
			},
			{
				type: '5P及以上担保圈',
				groupNum: 3,
				memberNum: 15,
				price: 150000
			}]
		}
	},
	methods: {
		
	},
	components: {
	}
}
</script>

<style scoped>
.main {
	font-family: Source Han Sans CN;
	padding-bottom: 72rpx;
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
	color: #2D2F31;
}
.info {
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0 30rpx;
	flex-wrap: wrap;
}
.card {
	margin-top: 32rpx;
	width: 330rpx;
	height: 382rpx;
	background: #ffffff;
	border-radius: 10rpx;
}
.card-head {
	height: 75rpx;
	width: 100%;
	background: #5484fd;
	border-radius: 10rpx 10rpx 0rpx 0rpx;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.card-body {
	height: 180rpx;
	margin: 24rpx 20rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.card-body-row {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.card-hail {
	display: flex;
	justify-content: center;
}
.btn {
	width: 200rpx;
	height: 55rpx;
	border: 1rpx solid #5484fd;
	border-radius: 29rpx;
	background: #ffffff;
	color: #4e8bff;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>