<template>
	<view v-if="macroInfo">
		<selects :getData="analysis" :isBack="false"></selects>
		<view v-if="!isShowCharts">
			<!-- 未点确定时的总体内容 -->
			<view style="font-size: 32rpx; font-weight: 700; color: #2d2f31;
									font-family: Source Han Sans CN, Source Han Sans CN-Bold; margin: 40rpx 0 0 40rpx">
				村民贷概况
			</view>
			<view class="overview-1">
				<view style="flex: 1;">
					<view class="text-1">{{macroInfo.loanBalance / 10000}}万</view>
					<view class="text-2">贷款余额(元)</view>
				</view>
				<view style="flex: 1;border-left:solid 1rpx #f5f6ff;border-right:solid 1rpx #f5f6ff;">
					<view class="text-1">{{macroInfo.clientCount}}</view>
					<view class="text-2">户数</view>
				</view>
				<view style="flex: 1;">
					<view class="text-1">{{macroInfo.rateIncome / 10000}}万</view>
					<view class="text-2">利息收入</view>
				</view>
			</view>
			<view class="overview-2">
				<view style="flex: 1;border-right: 1rpx solid #f5f6ff;">
					<view class="text-1">{{macroInfo.averLoanAmount / 10000}}万</view>
					<view class="text-2">户均贷款(元)</view>
				</view>
				<view style="flex: 1;">
					<view class="text-1">{{macroInfo.averRate}}</view>
					<view class="text-2">平均利率(%)</view>
				</view>
			</view>
			<view class="overview-3">
				<text style="vertical-align: middle;font-size: 28rpx;font-weight: 400;
										font-family: Source Han Sans CN, Source Han Sans CN-Regular;">
					APRU值：
				</text>
				<text style="vertical-align: middle;font-size: 38rpx;font-weight: 700;
										font-family: Source Han Sans CN, Source Han Sans CN-Bold;">
					{{macroInfo.arpu}}
				</text>
			</view>
			<view class="overview-4">
				<view style="flex: 1;">
					<view class="text-1">{{macroInfo.overdueLoanAmount / 10000}}万</view>
					<view class="text-2">逾期贷款余额(元)</view>
				</view>
				<view style="flex: 1;border-left:solid 1rpx #f5f6ff;border-right:solid 1rpx #f5f6ff;">
					<view class="text-1">{{macroInfo.totalInterestOwed / 10000}}万</view>
					<view class="text-2">欠息和总计</view>
				</view>
				<view style="flex: 1;display: flex;align-items: center;justify-content: center;" @click="router(1)">
					<text style="font-size: 30rpx;font-weight: 700;
											font-family: Source Han Sans CN, Source Han Sans CN-Bold;">
						查看更多
					</text>
					<image :src="$resourceRoute('overview/overview_1/double_arrow.png')"
						style="width: 22rpx;height: 28rpx; position: relative; top: 3rpx; margin-left: 8rpx" />
				</view>
			</view>
		</view>
		<view v-else>
			<analysisCharts></analysisCharts>
		</view>
	</view>
</template>

<script>
	import selects from '../components/selects/selects'
	import analysisCharts from '../components/analysisCharts/analysisCharts'
	export default {
		components: {
			selects,
			analysisCharts
		},
		data() {
			return {
				isShowCharts: false,
				macroInfo: null
			}
		},
		mounted() {
			this.$request('finance-analysis/overview/startAndEndTime', 'POST', {
				"subbranch": "全行",  //支行名称 “xx支行”/“全行”
				"start": "2022-01-01", //开始时间 yyyy-mm-dd
				"end":"2022-12-31", //结束时间 yyyy-mm-dd
				"interval": "按年", //时间间隔 可传入：“按年”“按月”“按天”；不填默认是“按月”
				"manager": "全部" //客户经理
			}).then((res) => {
				console.log(res)
				this.macroInfo = res.macroInfo[0]
			})
		},
		methods: {
			router(index) {
				let url = './'
				switch (index) {
					case 1:
						url = '/pages/highLevel/overdue/overdue'
						break
					default:
						break
				} 
				uni.navigateTo({
				  url: url,
				  animationType: 'pop-in',
				  fail: (err) => {
				    console.log(err)
				  }
				})
			},
			getStrFromStore() {
				return this.$store.state.text
			},
			analysis() {
				this.isShowCharts = !this.isShowCharts
			}
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
