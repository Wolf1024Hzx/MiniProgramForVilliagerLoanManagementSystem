<template>
	<view>
		<customerInformation :status="status" :choses="choses" :title="'村民贷排行榜'">
			<template v-slot:customerInformationSearch />
		</customerInformation>
		<view class="main">
			<view class="entry">
				<view class="picker-city">
					<text>地区</text>
					<view class="picker">
						<picker :range="citys" @change="changeCity" :value="cityIndex" style="width: 92%;">
							<view>{{citys[cityIndex]}}</view>
						</picker>
						<view class="arrow"></view>
					</view>
				</view>
				<view class="btn" @click="throughEntry">查询</view>
			</view>
			<view class="analysis">
				<view class="analysis-types">
					<view class="analysis-type">贷款额</view>
					<view class="analysis-type">利润贡献度</view>
					<view class="analysis-type">贷款人数</view>
					<view class="analysis-type">夫妻数</view>
				</view>
				<view class="show-more" @click="getMore">查看更多</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 0,
				choses: ['地区', '支行'],
				citys: ['全市', '深圳市'],
				cityIndex: 0
			}
		},
		methods: {
			changeCity(e) {
			  this.cityIndex = e.detail.value
			},
			getMore() {
				uni.navigateTo({
				  url: '../rankMore/rankMore',
				  animationType: 'pop-in',
				  fail: (err) => {
				    console.log(err)
				  }
				})
			}
		}
	}
</script>

<style scoped>
.main {
	font-family: Source Han Sans CN;
	padding-bottom: 72rpx;
}
.entry {
	width: 750rpx;
	height: 311rpx;
	background: #ffffff;
	margin-top: 32rpx;
	padding: 56rpx 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.picker-city {
	display: flex;
	justify-content: center;
	align-items: center;
}
.picker {
	width: 467rpx;
	height: 75rpx;
	background: #ffffff;
	border: 1rpx solid #d4d7e1;
	border-radius: 10rpx;
	padding-left: 16rpx;
	margin-left: 16rpx;
	display: flex;
	align-items: center;
}
.btn {
	width: 690rpx;
	height: 70rpx;
	background: #4e8bff;
	border-radius: 35rpx;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
}
.arrow {
	display: inline-block;
	width: 16rpx;
	height: 16rpx;
	border: 2rpx solid #000;
	border-top-width: 0;
	border-right-width: 0;
	transform: matrix(0.71,-0.71,0.71,0.71,0,0);
	margin-right: 4rpx;
}
.analysis {
	margin: 48rpx auto 0;
	width: 690rpx;
}
.analysis-types {
	width: 100%;
	height: 75rpx;
	background: #fff;
	border: 4rpx solid #4e8bff;
	border-left: 3rpx solid #4e8bff;
	border-right: 3rpx solid #4e8bff;
	display: flex;
}
.analysis-type {
	flex: 1;
	height: 100%;
	background: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 3rpx solid #4e8bff;
	border-right: 3rpx solid #4e8bff;
}
.show-more {
	opacity: 0.7;
	font-size: 28rpx;
	font-weight: 400;
	color: #2d2f31;
	text-align: center;
}
</style>
