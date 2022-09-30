<template>
	<view>
		<customerInformation :status="status" :choses="choses" :title="'村民贷排行榜'" :isBack="false">
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
				<view class="btn" @click="getData">查询</view>
			</view>
			<view class="analysis">
				<view class="analysis-types">
					<view v-for="(item,index) in analysisTypes" :key="index" @click="switchAnalysis(index)"
					class="analysis-type" :class="{'active-type': index === analysisIndex}">
						{{item}}
					</view>
					<view class="show-more" @click="getMore">查看更多</view>
				</view>
				<view class="charts-box">
					<qiun-data-charts type="column" :opts="optsBar" :chartData="barDatas" />
				</view>
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
				cityIndex: 0,
				analysisIndex: 2,
				analysisTypes: ['贷款额', '利润贡献度', '贷款人数', '夫妻数'],
				optsBar: {
					color: ['#F89186'],
					enableMarkLine: true,
					legend: {
						position: 'top',
						float: 'left',
						margin: 15,
						itemGap: 20
					},
					xAxis: {
						disableGrid: true,
						fontColor: '#000000'
					},
					yAxis: {
						data: [{
							min: 0,
							axisLine: false,
							fontColor: '#bebebe'
						}]
					},
					extra: {
						tooltip: {
							bgColor: '#FFFFFF',
							fontColor: '#000000',
							bgOpacity: 1,
							gridType: 'dash',
							gridColor: '#5B8FF9',
							dashLength: 2,
							showArrow: false
						},
						column: {
							type: 'group',
							width: 10,
							activeBgColor: '#F89186',
							activeBgOpacity: 0.1,
							seriesGap: 5,
							barBorderRadius: [5, 5, 5, 5],
							linearType: 'opacity'
						}
					},
					dataLabel: false
				},
				barDatas: {
					categories: ['XXX村', 'XXX村', 'XXX村', 'XXX村', 'XXX村'],
					series: [{
						name: '贷款人数',
						legendShape: 'circle',
						data: [150, 200, 250, 200, 60]
					}]
				}
			}
		},
		methods: {
			changeCity(e) {
			  this.cityIndex = e.detail.value
			},
			getMore() {
				uni.navigateTo({
				  url: '/pages/highLevel/rankMore/rankMore',
				  animationType: 'pop-in',
				  fail: (err) => {
				    console.log(err)
				  }
				})
			},
			switchAnalysis(index) {
				this.analysisIndex = index
			},
			getData() {
				
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
	margin-right: 16rpx;
}
.analysis {
	margin: 48rpx auto 0;
	width: 690rpx;
}
.analysis-types {
	width: 100%;
	height: 75rpx;
	background: #fff;
	border-top: 4rpx solid #4e8bff;
	border-bottom: 4rpx solid #4e8bff;
	display: flex;
	position: relative;
}
.analysis-type {
	flex: 1;
	height: 100%;
	background: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 2rpx solid #4e8bff;
	border-right: 2rpx solid #4e8bff;
}
.active-type {
	background: #4e8bff;
	color: #ffffff;
}
.show-more {
	position: absolute;
	z-index: 100;
	right: 32rpx;
	top: 150rpx;
	font-size: 28rpx;
	font-weight: 400;
	color: #2d2f31;
	opacity: 0.7;
}
.charts-box {
	/* position: relative; */
	width: 100%;
	height: 556rpx;
	background: #ffffff;
	border: 1rpx solid #e9e9e9;
	border-radius: 10rpx;
	padding-bottom: 32rpx;
	margin-top: 48rpx;
}
</style>
