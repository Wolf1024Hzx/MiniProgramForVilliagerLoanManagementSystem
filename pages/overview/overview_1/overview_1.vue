<template>
	<view>
		<cu-custom bgColor="rgba(0, 0, 0, 0)" :isBack="false">
			<!-- <block slot="backText">返回</block>返回箭头旁的字 -->
			<block slot="content">村民贷系统</block>
		</cu-custom>
		<!-- 带圆弧圆弧的背景 -->
		<view class="bg">
			<view class="bg-inner"></view>
		</view>

		<!-- 页面内容 -->
		<view style="position: relative; z-index: 1;">
			<view class="selector-outer">
				<view>
					<image src="../../../static/overview/overview_1/subbranch_ico.png"
						style="height: 40rpx; width: 40rpx; vertical-align: middle;"></image>
					<view
						style="display:inline-block; vertical-align:middle; margin-left:16rpx; position:relative; width: 506rpx;">
						<text class="selector-text">支行 :</text> 
						<picker :value="subbranchIndex" :range="subbranch" @change="changeSubbranch"
							style="width: 390rpx;">
							<text class="selector-text" style="color: #aaabaa;">{{subbranch[subbranchIndex]}}</text>
						</picker>
						<image src="../../../static/overview/overview_1/selector_arrow.png"
							style="width: 25rpx; height: 13rpx; float: right; margin-top: 16rpx"></image>
						<view class="gray-line"></view>
					</view>
				</view>

				<view style="margin-top: 54rpx;">
					<image src="../../../static/overview/overview_1/interval_ico.png"
						style="height: 40rpx; width: 40rpx; vertical-align: middle;"></image>
					<view
						style="display:inline-block; vertical-align:middle; margin-left:16rpx; position:relative; width: 506rpx;">
						<text class="selector-text">时间频率 :</text>
						<picker :value="intervalIndex" :range="interval" @change="changeInterval">
							<text class="selector-text" style="color: #aaabaa;">{{interval[intervalIndex]}}</text>
						</picker>
						<image src="../../../static/overview/overview_1/selector_arrow.png"
							style="width: 25rpx; height: 13rpx; float: right; margin-top: 16rpx"></image>
						<view class="gray-line"></view>
					</view>
				</view>

				<view style="display: flex; width: 500rpx; height: 70rpx; border-radius: 35rpx;
					background-color: #4E8BFF; margin: 52rpx auto 0; justify-content: center;align-items: center;" @tap="tapButton">
					<text style="font-size: 28rpx; color: #fefefc; letter-spacing: 4rpx;
						font-family: Source Han Sans CN, Source Han Sans CN-Regular;">确认</text>
				</view>
			</view>

			<!-- 未点确定时的总体内容 -->
			<view :style="{display: selected ? 'none' : ''}">
				<view style="font-size: 32rpx; font-weight: 700; color: #2d2f31;
					font-family: Source Han Sans CN, Source Han Sans CN-Bold; margin: 40rpx 0 0 40rpx">村民贷概况</view>

				<view class="overview-1">
					<view style="flex: 1;">
						<view class="text-1">300万</view>
						<view class="text-2">贷款余额(元)</view>
					</view>
					<view style="flex: 1;border-left:solid 1rpx #f5f6ff;border-right:solid 1rpx #f5f6ff;">
						<view class="text-1">3000</view>
						<view class="text-2">户数</view>
					</view>
					<view style="flex: 1;">
						<view class="text-1">20万</view>
						<view class="text-2">利息收入</view>
					</view>
				</view>
				<view class="overview-2">
					<view style="flex: 1;border-right: 1rpx solid #f5f6ff;">
						<view class="text-1">59万</view>
						<view class="text-2">户均贷款(元)</view>
					</view>
					<view style="flex: 1;">
						<view class="text-1">3.16</view>
						<view class="text-2">平均利率(%)</view>
					</view>
				</view>
				<view class="overview-3">
					<text style="vertical-align: middle;font-size: 28rpx;font-weight: 400;
						font-family: Source Han Sans CN, Source Han Sans CN-Regular;">APRU值：</text>
					<text style="vertical-align: middle;font-size: 38rpx;font-weight: 700;
						font-family: Source Han Sans CN, Source Han Sans CN-Bold;">10000</text>
				</view>
				<view class="overview-4">
					<view style="flex: 1;">
						<view class="text-1">10万</view>
						<view class="text-2">逾期贷款余额(元)</view>
					</view>
					<view style="flex: 1;border-left:solid 1rpx #f5f6ff;border-right:solid 1rpx #f5f6ff;">
						<view class="text-1">300万</view>
						<view class="text-2">欠息和总计</view>
					</view>
					<view style="flex: 1;display: flex;align-items: center;justify-content: center;" @tap="tapButton">
						<text style="font-size: 30rpx;font-weight: 700;
							font-family: Source Han Sans CN, Source Han Sans CN-Bold;">查看更多</text>
						<image src="../../../static/overview/overview_1/double_arrow.png"
							style="width: 22rpx;height: 28rpx; position: relative; top: 3rpx; margin-left: 8rpx">
						</image>
					</view>
				</view>F
			</view>

			<view :style="{display: selected ? '' : 'none'}" style="width: 670rpx;margin: 36rpx auto;">
				<uni-ec-canvas class="uni-ec-canvas" id="line-chart" :ec="ec" canvas-id="multi-charts-line">
				</uni-ec-canvas>
			</view>

			<view style="display: none;">{{getStrFromStore()}}</view>
		</view>
	</view>
</template>

<script>
	import uniEcCanvas from "@/components/uni-ec-canvas/uni-ec-canvas";
	export default {
		data() {
			return {
				subbranch: ['全行', '龙华支行', '石岩支行', '新安支行', '坪地支行', '宝龙支行', '龙城支行'],
				subbranchIndex: 0,
				interval: ['每年', '每季度', '每月', '每周'],
				intervalIndex: 0,
				selected: true,
				ec: {
					option: {
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							data: ['平均利率', '户均贷款余额']
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
						},
						yAxis: {
							type: 'value'
						},
						series: [{
								name: '平均利率',
								type: 'line',
								stack: 'Total',
								data: [120, 132, 101, 134, 90, 230, 210]
							},
							{
								name: '户均贷款余额',
								type: 'line',
								stack: 'Total',
								data: [220, 182, 191, 234, 290, 330, 310]
							},
						]
					}
				},
			}
		},
		methods: {
			getStrFromStore() {
				return this.$store.state.text;
			},
			changeSubbranch(e) {
				this.subbranchIndex = e.detail.value;
			},
			changeInterval(e) {
				this.intervalIndex = e.detail.value;
			},
			tapButton(e) {
				// uni.showToast({
				// 	title: '付费版功能,向开发人员支付必要的工资后解锁',
				// 	mask: true,
				// 	icon: 'none'
				// })
				uni.navigateTo({
					url: '/pages/overview/overview_2/overview_2',
					animationType: "slide-in-right"
				})
			},
		},
		onLoad() {
			uni.request({
				url: 'http://120.24.235.36:8089/finance-analysis/overview/startAndEndTime',
				method: 'POST',
				data: {
					"subbranch": "全行", //支行名称 “xx支行”/“全行”
					"start": "2021-01-17", //开始时间 yyyy-mm-dd
					"end": "2025-01-17", //结束时间 yyyy-mm-dd
					"interval": "", //时间间隔 可传入：“按年”“按月”“按天”；不填默认是“按月”
					"manager": "" //客户经理（可不填）
				},
				success: (res) => {
					console.log(res);
				}
			})
		},
		components: {
			uniEcCanvas
		}
	}
</script>

<style>
	picker {
		display: inline-block;
		width: 320rpx;
		margin-left: 18rpx;
	}

	.uni-ec-canvas {
		width: 640rpx;
		height: 600rpx;
		display: block;
		margin: 0 auto;
	}

	.bg {
		position: absolute;
		top: 0;
		z-index: 0;
		width: 100%;
		overflow: hidden;
	}

	.bg-inner {
		position: relative;
		width: 100%;
		height: 440rpx;
	}

	.bg-inner::after {
		/* 这个伪类的作用就是一个圆弧的背景色 */
		width: 140%;
		height: 440rpx;
		position: absolute;
		left: -20%;
		/* 之所以left:20%,是因为width:140%，可以是是别的值，例如width:160%，那么left:30%才能水平居中，可以发现规律的 */
		top: 0;
		z-index: -1;
		/*层叠顺序，最底层显示*/
		content: '';
		border-radius: 0 0 50% 50%;
		/*分别对应 左上 右上 右下 左下*/
		background-image: linear-gradient(#52b0ff, #4a87f3);
		/* 将这个伪类水平居中 */
	}

	.selector-outer {
		width: 670rpx;
		background-color: #fefefc;
		margin: 36rpx auto 0;
		border-radius: 20rpx;
		padding: 50rpx 54rpx;
		box-shadow: 4rpx 8rpx 20rpx rgba(0, 157, 151, 0.1), inset -12rpx -12rpx 40rpx #FFFFFF;
	}

	.gray-line {
		position: absolute;
		width: 520rpx;
		height: 1rpx;
		background: #d4d7e1;
		bottom: -8rpx;
	}

	.selector-text {
		font-size: 28rpx;
		color: #2d2f31;
		font-family: Source Han Sans CN, Source Han Sans CN-Regular;
		font-weight: 400;
	}

	.overview-1 {
		width: 650rpx;
		padding: 50rpx;
		background: linear-gradient(-60deg, #809dcc 5%, #697fa5 94%);
		border-radius: 20rpx;
		margin: 24rpx auto 0;
		display: flex;
		color: #fefefc;
	}

	.overview-2 {
		width: 650rpx;
		padding: 50rpx;
		background: linear-gradient(-60deg, #31b3db 5%, #308cda 94%);
		border-radius: 20rpx;
		margin: 20rpx auto 0;
		display: flex;
		color: #fefefc;
	}

	.text-1 {
		text-align: center;
		font-size: 38rpx;
		font-family: Source Han Sans CN, Source Han Sans CN-Bold;
		font-weight: 700;
	}

	.text-2 {
		text-align: center;
		font-size: 26rpx;
		font-family: Source Han Sans CN, Source Han Sans CN-Regular;
		font-weight: 400;
		margin-top: 10rpx;
	}

	.overview-3 {
		width: 650rpx;
		padding: 50rpx;
		background: linear-gradient(-60deg, #678efc 5%, #3576fd 94%);
		border-radius: 20rpx;
		margin: 20rpx auto 0;
		color: #fefefc;
		text-align: center;
	}

	.overview-4 {
		width: 650rpx;
		padding: 50rpx 0;
		background: linear-gradient(-60deg, #f89186 5%, #fd6362 94%);
		border-radius: 20rpx;
		margin: 20rpx auto 0;
		margin-bottom: 60rpx;
		color: #fefefc;
		display: flex;
	}
</style>
