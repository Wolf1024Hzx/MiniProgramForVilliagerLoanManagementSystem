<template>
	<view>
		<view v-if="isEntry">
			<customerInformation :status="status" :choses="choses" :title="'预警查询'">
				<template v-slot:customerInformationSearch />
			</customerInformation>
			<view class="entry">
				<view class="input-idcard">
					<text>证件号码</text>
					<view class="input">
						<input v-model="cin" type="idcard" style="width: 100%;" placeholder="请输入您的证件号码"/>
					</view>
				</view>
				<view class="btn" @click="throughEntry">查询</view>
			</view>
		</view>
		<view v-else>
			<customerInformation :status="status" :choses="choses" :title="'预警查询'"></customerInformation>
			<view class="info" style="position: absolute;">
				<view class="info-idcard" style="position: absolute;">
					<text class="info-title">身份证号</text>
					<text class="info-message" v-text="idcard">{{ idcard }}</text>
				</view>
				<view class="info-time" style="position: absolute;">
					<text class="info-title">录入时间</text>
					<text class="info-message" v-text="time">{{ time }}</text>
				</view>
				<view class="info-reason" style="position: absolute;">
					<text class="info-title">拒接原因</text>
					<text class="info-message" v-text="reason">{{ reason }}</text>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="popup-card">
				<view class="popup-text">
					<image class="error-icon" :src="getImgUrl('midLevel/error.png')" />
					<text>该用户不在预警名单内</text>
				</view>
				<view class="btn" style="width: 483rpx;" @click="close">知道了</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import customerInformation from '@/components/customerInformation/customerInformation.vue'
	export default {
		data() {
			return {
				isEntry: true,
				status: 0,
				choses: ['证件查询', '客户名称查询'],
				cin: '',
				idcard: 400000200001011111,
				time: '2022年11月21日',
				reason: '?????????????????????????\n????????????????????'
			}
		},
		methods: {
			getImgUrl(url) {
				return this.$resourceRoute(url)
			},
			throughEntry() {
				if(this.cin.length > 0) {
					this.isEntry = false
				}
				else this.$refs.popup.open()
			},
			close() {
				this.$refs.popup.close()
			}
		},
		components: {
			customerInformation
		}
	}
</script>

<style scoped>
	.info {
		position: relative;
		width: 94%;
		height: 320rpx;
		background: #FFFFFF;
		margin-left: 3%;
		border-radius: 10rpx;
	}

	.info-idcard {
		position: absolute;
		width: 94%;
		height: 21%;
		top: 10%;
		margin-left: 3%;
		border-bottom: #E5E7ED solid 1rpx;
	}

	.info-time {
		position: absolute;
		width: 94%;
		height: 21%;
		top: 40%;
		margin-left: 3%;
		border-bottom: #E5E7ED solid 1rpx;
	}

	.info-reason {
		position: absolute;
		width: 94%;
		height: 36%;
		top: 72%;
		margin-left: 3%;
	}

	.info-title {
		position: absolute;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		opacity: 0.8;
		color: #2D2F31;
		text-align: left;
		left: 10rpx;
		width: 18%;
		height: 100%;
	}

	.info-message {
		position: absolute;
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		color: #2D2F31;
		text-align: right;
		right: 10rpx;
		width: 78%;
		height: 100%;
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
	.input-idcard {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.input {
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
		background-image: linear-gradient(0deg,white 80%,#b6cafb);
	}
	
	.error-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}
	
	.popup-text {
		font-size: 34rpx;
		color: #2d2f31;
		font-weight: 700;
		display: flex;
		align-items: center;
	}
</style>
