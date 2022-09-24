<template>
  <view class="alert-query-surface">
    <view class="top-message">
      <cu-custom :is-back="true">
        <block slot="content">客户信息查询</block>
      </cu-custom>
    </view>
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
	.top-message{
		width: 100%;
		height: 306rpx;
		background: linear-gradient(0deg,#4E8BFF 100%,#52B0FF 100%);
		position: absolute;
		top: 0;
	}
	.block{
		font-size: 34rpx;
		font-family: Source Han Sans CN, Source Han Sans CN-Regular;
		color: red;
	}
</style>
