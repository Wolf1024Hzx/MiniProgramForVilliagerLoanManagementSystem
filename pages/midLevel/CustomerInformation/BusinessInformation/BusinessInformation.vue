<template>
  <view style="margin-top: 26rpx;" class="scroll_background">
    <scroll-view scroll-x="true" class="scroll-view_H">
      <view class="scroll_item">基本信息1</view>
      <view class="scroll_item">基本信息2</view>
      <view class="scroll_item">业务信息</view>
      <view class="scroll_item">额度依据</view>
      <view class="scroll_item">关联业务</view>
    </scroll-view>
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

<style lang="less" scoped>
	.scroll_background {
		background: #ffffff;
		
		.scroll-view_H {
				white-space: nowrap;
				width: 100%;
				
				.scroll_item {
					display: inline-block;
					font-size: 28rpx;
					font-family: Source Han Sans CN, Source Han Sans CN-Regular;
					font-weight: 400;
					text-align: center;
					color: #2d2f31;
					padding: 20rpx;
				}
		}
	}
</style>
