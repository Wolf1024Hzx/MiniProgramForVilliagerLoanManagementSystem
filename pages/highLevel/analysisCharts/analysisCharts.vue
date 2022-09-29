<template>
	<view style="padding-bottom: 72rpx;">
		<selects :getData="getData" :isBack="true"></selects>
		<!-- <qiun-title-bar title="基本折线区域图" /> -->
		<view class="charts-box">
			<qiun-data-charts type="area" :opts="optsErea" :chartData="ereaDatas" />
		</view>
		<view class="charts-box">
			<qiun-data-charts type="column" :opts="optsBar" :chartData="barDatas" />
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
				optsErea: {
					color: ['#5B8FF9', '#FD6362'],
					legend: {
						position: 'top',
						float: 'left',
						margin: 15,
						itemGap: 20
					},
					xAxis: {
						disableGrid: true,
						fontColor: '#bebebe'
					},
					yAxis: {
						gridType: 'dash',
						dashLength: 2,
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
						area: {
							gradient: true,
							opacity: 0.6
						}
					},
					dataLabel: false
				},
				ereaDatas: {
					categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
					series: [{
						name: '平均利率',
						legendShape: 'line',
						data: [160, 45, 40, 180, 100, 160, 180]
					}, {
						name: '户均贷款余额',
						legendShape: 'line',
						data: [130, 132, 50, 55, 45, 50, 110]
					}]
				},

				optsBar: {
					color: ['#F89186', '#678EFC', '#809DCC'],
					enableMarkLine: true,
					legend: {
						position: 'top',
						float: 'left',
						margin: 15,
						itemGap: 20
					},
					xAxis: {
						disableGrid: true,
						fontColor: '#bebebe'
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
							activeBgColor: '#3c79fd',
							activeBgOpacity: 0.1,
							seriesGap: 5,
							barBorderRadius: [5, 5, 5, 5],
							linearType: 'opacity'
						}
					},
					dataLabel: false
				},
				barDatas: {
					categories: ['2019', '2020', '2021', '2022'],
					series: [{
						name: '户数',
						legendShape: 'circle',
						data: [50, 60, 100, 60]
					}, {
						name: '贷款余额',
						legendShape: 'circle',
						data: [90, 110, 140, 110]
					}, {
						name: '利息收入',
						legendShape: 'circle',
						data: [120, 130, 170, 160]
					}]
				}
			}
		},
		methods: {
			getData() {
				// uni.request({
				//   url: 'http://120.24.235.36:8089/finance-analysis/overview/startAndEndTime',
				//   method: 'POST',
				//   data: {
				//     'subbranch': '全行', // 支行名称 “xx支行”/“全行”
				//     'start': '2021-01-17', // 开始时间 yyyy-mm-dd
				//     'end': '2025-01-17', // 结束时间 yyyy-mm-dd
				//     'interval': '', // 时间间隔 可传入：“按年”“按月”“按天”；不填默认是“按月”
				//     'manager': '' // 客户经理（可不填）
				//   },
				//   success: (res) => {
				//     console.log(res)
				//   }
				// })
			}
		}
	}
</script>

<style scoped>
	.charts-box {
		width: 690rpx;
		height: 556rpx;
		background: #ffffff;
		border: 1rpx solid #e9e9e9;
		border-radius: 10rpx;
		margin: 32rpx auto 0;
		padding-bottom: 32rpx;
	}
</style>
