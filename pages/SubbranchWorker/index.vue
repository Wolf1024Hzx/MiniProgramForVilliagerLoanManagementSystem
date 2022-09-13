<template>
	<view class="subbranch-worker_page">
		<HeaderBg></HeaderBg>
		<view class="func">
			<view class="func-item row" v-for="item in funcList" :key="item" :style="{'background-color':item.color}" @click="goFuncDeatilPage(item)">
				<view class="func-name col-middle">
					<view class="cn">{{item.cn}}</view>
					<view class="en">{{item.en}}</view>
				</view>

				<view class="func-image flex-1">
					<image :src="item.bgImg" mode=""></image>
					<image class="z-index1" :src="item.logo" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import HeaderBg from '../../components/HeaderBg.vue'
	export default {
		components: {
			HeaderBg
		},
		data() {
			return {
				funcList: [{
						id: 1,
						cn: '我的管户',
						en: 'My Account',
						color: '#EAF6FE',
						bgImg: '../../static/subbranchWorker/Account-bg@3x.png',
						logo: '../../static/subbranchWorker/Account@3x.png'
					},
					{
						id: 2,
						cn: '客户信息',
						en: 'Customer Information',
						color: '#FAEFEA',
						bgImg: '../../static/subbranchWorker/info-bg@3x.png',
						logo: '../../static/subbranchWorker/info@3x.png'
					},
					{
						id: 3,
						cn: '影像信息',
						en: 'Image Information',
						color: '#E0E5F7',
						bgImg: '../../static/subbranchWorker/image-bg@3x.png',
						logo: '../../static/subbranchWorker/image@3x.png'
					},
					{
						id: 4,
						cn: '金融助手',
						en: 'Financial Assistant',
						color: '#F7E0E2',
						bgImg: '../../static/subbranchWorker/cal-bg@3x.png',
						logo: '../../static/subbranchWorker/cal@3x.png'
					}
				]
			}
		},
		methods: {
			goFuncDeatilPage: function (item) {
				if(item.id === 1) {
					uni.navigateTo({
						url: '../MyAccount/index'
					})
				}else if(item.id === 4){
					uni.navigateTo({
						url: '../FinancialAssistant/index'
					})
				}
			}
		}
	}
</script>

<style>
	@import '@/style/index.css';

	.func {
		padding: 114.5px 15px 12px;
	}

	.func-item {
		height: 120.5px;
		background: #eaf6fe;
		border-radius: 2px;
		margin-bottom: 28px;
		box-shadow: -5px 0px 9.6px 0.2px rgba(0, 0, 0, 0.10);
	}

	.func-name {
		width: 50%;
		height: 100%;
		justify-content: center;
	}

	.func-name .cn {
		font-size: 16px;
		font-family: Source Han Sans CN, Source Han Sans CN-Bold;
		font-weight: 700;
		color: #2d2f31;
	}

	.func-name .en {
		opacity: 0.75;
		font-size: 12px;
		font-family: Source Han Sans CN, Source Han Sans CN-Regular;
		font-weight: 400;
		color: #2d2f31;
	}

	.func-image {
		width: 50%;
		height: 100%;
		position: relative;

	}

	.func-image image {
		width: 100%;
		height: 100%;
	}

	.func-image .z-index1 {
		position: absolute;
		left: 30%;
		top: 28%;
		z-index: 1;
		width: 68.5px;
		height: 54.5px;
	}
</style>
