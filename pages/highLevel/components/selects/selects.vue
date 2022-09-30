<template>
	<view>
		<cu-custom bg-color="rgba(0, 0, 0, 0)" :is-back="isBack">
			<!-- <block slot="backText">返回</block>返回箭头旁的字 -->
			<block slot="content">村民贷系统</block>
		</cu-custom>
		<!-- 带圆弧的背景 -->
		<view class="bg">
			<view class="bg-inner" />
		</view>
		<!-- 页面内容 -->
		<view style="position: relative; z-index: 1;">
			<view class="selector-outer">
				<view>
					<image :src="$resourceRoute('overview/overview_1/subbranch_ico.png')"
						style="height: 40rpx; width: 40rpx; vertical-align: middle;" />
					<view
						style="display:inline-block; vertical-align:middle; margin-left:16rpx; position:relative; width: 506rpx;">
						<text class="selector-text">支行 :</text>
						<picker :value="subbranchIndex" :range="subbranch" style="width: 390rpx;"
							@change="changeSubbranch">
							<text class="selector-text" style="color: #aaabaa;">{{ subbranch[subbranchIndex] }}</text>
						</picker>
						<image :src="$resourceRoute('overview/overview_1/selector_arrow.png')"
							style="width: 25rpx; height: 13rpx; float: right; margin-top: 16rpx" />
		 			<view class="gray-line" />
					</view>
				</view>

				<view style="margin-top: 54rpx;">
					<image :src="$resourceRoute('overview/overview_1/interval_ico.png')"
						style="height: 40rpx; width: 40rpx; vertical-align: middle;" />
					<view
						style="display:inline-block; vertical-align:middle; margin-left:16rpx; position:relative; width: 506rpx;">
						<text class="selector-text">时间频率 :</text>
						<picker :value="intervalIndex" :range="interval" @change="changeInterval">
							<text class="selector-text" style="color: #aaabaa;">{{ interval[intervalIndex] }}</text>
						</picker>
						<image :src="$resourceRoute('overview/overview_1/selector_arrow.png')"
							style="width: 25rpx; height: 13rpx; float: right; margin-top: 16rpx" />
						<view class="gray-line" />
					</view>
				</view>

				<view @tap="tapButton" style="display: flex; width: 500rpx; height: 70rpx; border-radius: 35rpx;
						background-color: #4E8BFF; margin: 52rpx auto 0; justify-content: center;align-items: center;">
					<text style="font-size: 28rpx; color: #fefefc; letter-spacing: 4rpx;
							font-family: Source Han Sans CN, Source Han Sans CN-Regular;">
						确认
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['getData','isBack'],
		data() {
			return {
				subbranch: ['全行', '龙华支行', '石岩支行', '新安支行', '坪地支行', '宝龙支行', '龙城支行'],
				subbranchIndex: 0,
				interval: ['每年', '每季度', '每月', '每周'],
				intervalIndex: 0
			}
		},
		methods: {
			changeSubbranch(e) {
				this.subbranchIndex = e.detail.value
			},
			changeInterval(e) {
				this.intervalIndex = e.detail.value
			},
			tapButton() {
				this.getData.apply(this.$parent)				
			}
		}
	}
</script>

<style scoped>
	picker {
		display: inline-block;
		width: 320rpx;
		margin-left: 18rpx;
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
</style>
