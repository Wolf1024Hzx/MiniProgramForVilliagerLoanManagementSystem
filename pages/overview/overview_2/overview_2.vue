<template>
	<view>
		<cu-custom :isBack="false">
			<block slot="content">村民贷系统</block>
		</cu-custom>
		<view class="bg"></view>

		<view style="position: relative;z-index: 1;">
			<view class="overview-box" style="background: #eaf6fe;margin-top: 80rpx;">
				<view class="overview-box-left">
					<view>
						<view class="text-1">我的管户</view>
						<view class="text-2">My Account</view>
					</view>
				</view>
				<view class="overview-box-right" :style="bgUrl[0]">
					<image class="image-inner" src="../../../static/overview/overview_2/personal.png"></image>
				</view>
			</view>

			<view class="overview-box" style="background: #faefea;">
				<view class="overview-box-left">
					<view>
						<view class="text-1">客户信息</view>
						<view class="text-2">Customer Information</view>
					</view>
				</view>
				<view class="overview-box-right" :style="bgUrl[1]">
					<image class="image-inner" src="../../../static/overview/overview_2/custom.png"></image>
				</view>
			</view>

			<view class="overview-box" style="background: #e0e5f7;">
				<view class="overview-box-left">
					<view>
						<view class="text-1">影像信息</view>
						<view class="text-2">Image Information</view>
					</view>
				</view>
				<view class="overview-box-right" :style="bgUrl[2]">
					<image class="image-inner" src="../../../static/overview/overview_2/detail.png"></image>
				</view>
			</view>

			<view class="overview-box" style="background: #f7e0e2;">
				<view class="overview-box-left">
					<view>
						<view class="text-1">金融助手</view>
						<view class="text-2">Financial Assistant</view>
					</view>
				</view>
				<view class="overview-box-right" :style="bgUrl[3]">
					<image class="image-inner" src="../../../static/overview/overview_2/cal.png"></image>
				</view>
			</view>
			<view style="height: 50rpx;"></view>
		</view>
	</view>
</template>

<script>
	import {
		pathToBase64
	} from '../../../js_sdk/mmmm-image-tools/index.js'
	export default {
		data() {
			return {
				bgUrl: ['/static/overview/overview_2/personal_bg.png',
					'/static/overview/overview_2/custom_bg.png',
					'/static/overview/overview_2/detail_bg.png',
					'/static/overview/overview_2/cal_bg.png'
				],
			}
		},
		methods: {
			async getBaseBgUrl(path) {
				let list = [],
					urls = this.bgUrl;
				for (let i = 0; i < urls.length; i += 1) {
					await pathToBase64(urls[i])
						.then(base64 => {
							let temp = 'background-image:url(' + base64 + ')';
							list.push(temp);
						})
						.catch(error => {
							console.error(error)
						})
				}
				this.bgUrl = list;
			}
		},
		onLoad() {
			this.getBaseBgUrl();
		}
	}
</script>

<style>
	.bg {
		width: 100%;
		height: 187rpx;
		background: linear-gradient(0deg, #4e8bff 5%, #52b0ff 94%);
		position: absolute;
		z-index: 0;
		top: 0;
	}

	.overview-box {
		width: 690rpx;
		height: 240rpx;
		box-shadow: -10px 0px 19.2px 0.4px rgba(0, 0, 0, 0.10);
		margin: 56rpx auto 0;
		border-radius: 20rpx;
		position: relative;
	}

	.text-1 {
		font-size: 32rpx;
		font-family: Source Han Sans CN, Source Han Sans CN-Bold;
		font-weight: 700;
		color: #2d2f31;
	}

	.text-2 {
		opacity: 0.75;
		font-size: 24rpx;
		font-family: Source Han Sans CN, Source Han Sans CN-Regular;
		font-weight: 400;
		color: #2d2f31;
		margin-top: 28rpx;
	}

	.overview-box-left {
		display: flex;
		height: 100%;
		width: 42%;
		align-items: center;
		margin-left: 75rpx;
	}

	.overview-box-right {
		display: flex;
		align-items: center;
		width: 334rpx;
		height: 240rpx;
		position: absolute;
		right: 0;
		top: 0;
		background-size: 100% 100%;
		background-position: center center;
	}

	.image-inner {
		width: 137rpx;
		height: 109rpx;
		position: relative;
		left: 121rpx;
	}
</style>
