<template>
	<view class="navigate">
		<view class="service">
			<view v-for="(item, index) in serviceChoses" :key="index" @click="bindService(index)" 
			:class="serviceStatus === index ? 'service-chose-active' : 'service-chose'">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['serviceStatus', 'serviceChoses'],
		data() {
			return {
				
			}
		},
		methods: {
			bindService(status) {
				this.$parent.serviceStatus = status
			}
		}
	}
</script>

<style scoped>
.navigate {
	width: 100%;
	height: 115rpx;
	display: flex;
	flex-direction: column;
	padding: 0 32rpx;
	background-color: #fff;
}
.service {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-top: 1rpx solid #d4d7e1;
}
.service-chose {
	padding: 14rpx 26rpx;
	color: #a0a0a0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.service-chose-active {
	padding: 14rpx 26rpx;
	color: #FFFFFF;
	background: #5484fd;
	border-radius: 29rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
