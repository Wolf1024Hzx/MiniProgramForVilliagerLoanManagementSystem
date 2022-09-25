<template>
	<view class="navigate">
		<scroll-view scroll-x="true" class="classify">
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
	align-items: center;
	padding: 0 32rpx;
	background-color: #fff;
}
.classify {
	white-space: nowrap;
}
.classify-chose {
	display: inline-block;
	height: 45rpx;
	border-bottom: 3rpx solid #ffffff;
	margin-right: 45rpx;
}
.classify-chose-active {
	display: inline-block;
	height: 45rpx;
	border-bottom: 3rpx solid #5484FD;
	margin-right: 45rpx;
}
</style>
