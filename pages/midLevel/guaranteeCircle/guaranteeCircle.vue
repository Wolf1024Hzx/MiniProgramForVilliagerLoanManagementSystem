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
			</view>
			<view class="info">
				<view v-for="(item, index) in guarateeInfos" class="card">
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
	</view>
</template>

<script>
import CustomerInformation from '../CustomerInformation/CustomerInformation.vue'
export default {
	data() {
		return {
			classifyStatus: 3,
			classifyChoses: ['业务信息','额度依据','关联业务','对外担保','担保圈'],
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
		bindClassify(status) {
			this.classifyStatus = status
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
	height: 115rpx;
	display: flex;
	flex-direction: column;
	padding: 0 32rpx;
	background-color: #fff;
}
.classify {
	flex: 1;
	white-space: nowrap;
	display: flex;
	align-items: center;
	background-color: #fff;
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