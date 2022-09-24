<template>
  <view>
    <!-- <uni-search-bar placeholder="请输入您的证件号码" bg-color="#FFFFFF" cancel-button="none" clear-button="auto" /> -->
    <view class="search">
      <input style="width: 100%;" type="idcard" placeholder="请输入您的证件号码">
      <img class="search-icon" src="@/static/midLevel/search.png">
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
	.search {
		width: 100%;
		height: 96rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 32rpx;
		background-color: #fff;
		margin-bottom: 30rpx;
		margin-top: 42rpx;

		.search-icon {
			height: 37rpx;
			width: 36rpx;
		}
	}
</style>
