<template>
	<view>
		<cu-custom :isBack="true">
			<block slot="content">各行政区占比</block>
		</cu-custom>
		<view class="bg"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
</style>
