<template>
	<view>
		<customerInformation :status="status" :choses="choses" :title="'客户信息查询'">
			<template v-slot:customerInformationSearch />
		</customerInformation>
		<view class="card">
			<view class="card-head">
				<view class="block"></view>
				<view class="username">各行政区占比</view>
				<view class="more">查看更多</view>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="ring" :opts="optsRing" :chartData="ringDatas" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 0,
				choses: ['金额', '户数'],
				optsRing: {
					color: ['#1E6AFD', '#1E6AFD', '#68ACFF', '#2987FA', '#2987FA'],
					legend: {
						show: false
					},
					extra: {
						ring: {
							ringWidth: 20
						}
					}
				},
				ringDatas: {
					series: [{
						data: [{
							name: '罗湖区',
							value: 15
						}, {
							name: '福田区',
							value: 5
						}, {
							name: '龙华区',
							value: 20
						}, {
							name: '龙岗区',
							value: 35
						}, {
							name: '南山区',
							value: 25
						}]
					}]
				}
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.card {
		width: 690rpx;
		background: #ffffff;
		border: 1rpx solid #e9e9e9;
		border-radius: 10rpx;
		margin: 72rpx auto 0;
		position: relative;
		padding: 0 32rpx 32rpx;
	}

	.card-head {
		height: 108rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #d4d7e1;
	}

	.block {
		position: absolute;
		left: 0;
		top: 40rpx;
		width: 9rpx;
		height: 30rpx;
		background: #5b8ff9;
	}

	.username {
		font-size: 32rpx;
		font-weight: 700;
		color: #2d2f31;
	}

	.more {
		opacity: 0.7;
		font-size: 28rpx;
		font-weight: 400;
		color: #2d2f31;
	}

	.charts-box {
		width: 100%;
		height: 432rpx;
		background: #ffffff;
		border-radius: 10rpx;
	}
</style>
