<template>
	<view>
		<customerInformation :status="status" :choses="choses" :title="'金融助手'">
			<template v-slot:customerInformationSearch />
		</customerInformation>
		<view v-if="status === 0" class="main">
			<view class="card">
				<view class="card-row">
					<view class="key">身份额度</view>
					<view class="value">
						<text>请选择</text>
						<view class="arrow" />
					</view>
				</view>
				<view class="income">
					<view class="income-header">经济收入额度(可多选)</view>
					<view class="income-body">
						<view v-for="(item, index) in incomeChoses" :key="index" class="income-choses"
							:class="item.selected ? 'income-active' : ''" @click="switchIncomeSelected(index)">
							{{ item.content }}
						</view>
					</view>
				</view>
				<view class="card-row">
					<view class="key">工作单位</view>
					<view class="value">
						<text>请选择</text>
						<view class="arrow" />
					</view>
				</view>
				<view class="card-row">
					<view class="key">借款人及配偶房产</view>
					<view class="value">
						<text>请选择数量</text>
						<view class="arrow" />
						<view class="num">套20万</view>
					</view>
				</view>
				<view class="card-row">
					<view class="key">借款人及配偶房产</view>
					<view class="value">
						<text>请选择数量</text>
						<view class="arrow" />
						<view class="num">套20万</view>
					</view>
				</view>
				<view class="card-row">
					<view class="key">家庭成员及房产</view>
					<view class="value">
						<text>请选择数量</text>
						<view class="arrow" />
						<view class="num">套</view>
					</view>
				</view>
				<view class="card-row">
					<view class="key">附加额度</view>
					<view class="value">
						<text>请选择</text>
						<view class="arrow" />
					</view>
				</view>
			</view>
			<view class="btn" @click="enter">确定</view>
			<uni-popup ref="popup" type="center">
				<view class="popup-card">
					<view class="popup-text">
						<text>核定村民额度为</text>
						<text style="color: #FD6362;">300万元</text>
					</view>
					<view class="btn" style="width: 483rpx;" @click="close">知道了</view>
				</view>
			</uni-popup>
		</view>
		<view v-else class="main">
			<view class="card">
				<view class="card-row">
					<view class="key">贷款金额</view>
					<view class="value">
						<text>请选择</text>
						<view class="arrow" />
						<view class="num">万元</view>
					</view>
				</view>
				<view class="card-row">
					<view class="key">贷款利率</view>
					<view class="value">
						<text>请选择</text>
						<view class="arrow" />
						<view class="num">%</view>
					</view>
				</view>
				<view class="card-row">
					<view class="key">贷款期限</view>
					<view class="value">
						<text>请选择日期</text>
						<view class="arrow" />
					</view>
				</view>
				<view class="card-row">
					<view class="key">贷款日期</view>
					<view class="value">
						<text>请选择日期</text>
						<view class="arrow" />
					</view>
				</view>
				<view class="income">
					<view class="income-header">还款方式(可多选)</view>
					<view class="income-body">
						<view v-for="(item, index) in returnChoses" :key="index" class="income-choses"
							:class="{'income-active': item.selected}" @click="switchReturnSelected(index)">
							{{ item.content }}
						</view>
					</view>
				</view>
				<view class="time-interval">
					<view class="key">从第</view>
					<view class="value">
						<text>请选择</text>
						<view class="arrow" />
					</view>
					<view class="key">月起还本金的</view>
					<view class="value">
						<text>请选择</text>
						<view class="arrow" />
					</view>
					<view class="key">%</view>
				</view>
			</view>
			<view class="multi-btns">
				<view class="tiny-btn">计算利息</view>
				<view class="tiny-btn">生成还款计划</view>
				<view class="tiny-btn special">导出WORD</view>
			</view>
		</view>
	</view>
</template>

<script>
	import customerInformation from '@/components/customerInformation/customerInformation.vue'
	export default {
		components: {
			customerInformation
		},
		data() {
			return {
				status: 0,
				choses: ['贷款额度计算', '贷款利息及还款计划'],
				incomeChoses: [{
						selected: false,
						content: '分红权'
					},
					{
						selected: false,
						content: '工作单位'
					},
					{
						selected: false,
						content: '借款人及配偶房产'
					},
					{
						selected: false,
						content: '家庭成员及房产'
					}
				],
				returnChoses: [{
						selected: false,
						content: '任意本金，按频率付息'
					},
					{
						selected: false,
						content: '一次性到期，还本付息'
					},
					{
						selected: false,
						content: '借款人及配偶房产'
					},
					{
						selected: false,
						content: '家庭成员及房产'
					}
				]
			}
		},
		methods: {
			switchIncomeSelected(index) {
				this.incomeChoses[index].selected = !this.incomeChoses[index].selected
			},
			switchReturnSelected(index) {
				this.returnChoses[index].selected = !this.returnChoses[index].selected
			},
			enter() {
				this.$refs.popup.open()
			},
			close() {
				this.$refs.popup.close()
			}
		}
	}
</script>

<style scoped>
	.main {
		font-family: Source Han Sans CN;
		padding: 64rpx 0 72rpx;
	}

	.card {
		width: 690rpx;
		background: #ffffff;
		border: 1rpx solid #e9e9e9;
		border-radius: 10rpx;
		margin: 0 auto;
		padding: 0 32rpx 32rpx;
	}

	.card-row {
		width: 100%;
		height: 88rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #E5E7ED;
	}

	.key {
		font-size: 28rpx;
		font-weight: 400;
		color: #2D2F31;
	}

	.value {
		font-size: 26rpx;
		font-weight: 400;
		color: #ABACAC;
		display: flex;
		align-items: center;
	}

	.arrow {
		width: 12rpx;
		height: 12rpx;
		border: 2rpx solid #888;
		border-left-width: 0;
		border-bottom-width: 0;
		transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		margin-left: 8rpx;
	}

	.num {
		width: 168rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #2d2f31;
		text-align: right;
	}

	.income-header {
		width: 100%;
		height: 88rpx;
		display: flex;
		align-items: center;
		color: #2D2F31;
	}

	.income-body {
		width: 100%;
		height: 168rpx;
		display: flex;
		justify-content: space-between;
		align-content: space-between;
		flex-wrap: wrap;
	}

	.income-choses {
		width: 300rpx;
		height: 70rpx;
		background: #F2F3F6;
		border-radius: 5rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
		font-weight: 400;
		color: #2d2f31;
	}

	.income-active {
		background: #4e8bff;
		color: #ffffff;
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
		margin: 48rpx auto 0;
	}

	.popup-card {
		width: 629rpx;
		height: 286rpx;
		background: #ffffff;
		border-radius: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 55rpx 0;
	}

	.popup-text {
		font-size: 36rpx;
		font-weight: 400;
		color: #2d2f31;
	}

	.time-interval {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 88rpx;
		border-bottom: 1rpx solid #E5E7ED;
	}

	.multi-btns {
		width: 690rpx;
		margin: 56rpx auto 0;
		display: flex;
		justify-content: space-between;
	}

	.tiny-btn {
		width: 219rpx;
		height: 70rpx;
		background: #DAE5FA;
		border: 1rpx solid #5E95FE;
		color: #5E95FE;
		font-size: 28rpx;
		font-weight: 400;
		border-radius: 36rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.special {
		background: #4e8bff;
		border: 0;
		color: #ffffff;
	}
</style>
