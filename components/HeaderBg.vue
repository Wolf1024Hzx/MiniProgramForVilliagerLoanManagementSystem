<template>
	<view class="header-bg">
		<view class="title">{{pageTitle}}</view>
		<view class="back-arrow" v-show="isSecondPage" @click="goBack()">
			<image src="@/static/components/back-arrow.png" alt="">
		</view>
	</view>
</template>

<script>
	export default {
		name:"HeaderBg",
		props: {
			pageTitle: {
				default: '村民贷系统',
				type: String
			},
			isSecondPage: {
				default: false,
				type: Boolean
			}
		},
		methods: {
			goBack: function (){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.header-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 90px;
		box-sizing: border-box;
		background-image: linear-gradient(#4E8BFF, #52B0FF);
		z-index: 100;
	}
	
		
	.title {
		width: 100%;
		color: #fff;
		text-align: center;
		font-size: 16px;
		letter-spacing: 2px;
		margin-top: 56px;
	}
	.back-arrow {
		position: absolute;
		top: 55px;
		left: 16px;
		width: 26px;
		height: 26px;
	}
	.back-arrow image {
		width: 100%;
		height: 100%;
	}
</style>