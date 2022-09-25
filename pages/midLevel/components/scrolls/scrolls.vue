<template>
	<view class="navigate">
		<scroll-view class="classify" scroll-x="true" >
			<view v-for="(item, index) in classifyChoses" @click="bindClassify(index)" :class="classifyStatus === index ? 'classify-chose-active' : 'classify-chose'">{{item}}</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: ['classifyStatus', 'classifyChoses'],
		data() {
			return {
				
			}
		},
		methods: {
			bindClassify(status) {
				this.$parent.classifyStatus = status
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
.classify {
	flex: 1;
	white-space: nowrap;
	display: flex;
	align-items: center;
	background-color: #fff;
}
.classify-chose {
	display: inline-block;
	height: 45rpx;
	color: #a0a0a0;
	border-bottom: 3rpx solid #ffffff;
	margin-right: 48rpx;
}
.classify-chose-active {
	display: inline-block;
	height: 45rpx;
	color: #5484FD;
	border-bottom: 3rpx solid #5484FD;
	margin-right: 48rpx;
}
</style>
