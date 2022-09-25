<template>
  <view>
    <cu-custom :is-back="true" :background-height="300">
      <template slot="content">客户信息查询</template>
    </cu-custom>

    <view style="position: relative;z-index: 1;">
      <!-- 这里放两个按钮 -->
      <view style="display: flex;margin-top: 60rpx;margin-bottom: 20rpx;">
        <view class="btn" data-btn="left" @tap="tapBtn">
          证件查询
          <view v-if="chooseLeftBtn" class="line_under_btn" />
        </view>
        <view class="btn" data-btn="right" @tap="tapBtn">
          客户名称查询
          <view v-if="!chooseLeftBtn" class="line_under_btn" />
        </view>
      </view>
			
      <slot name="customerInformationSearch">
        <customerInformationSearch />
      </slot>
    </view>
  </view>
</template>

<script>
import customerInformationSearch from './customerInformationSearch/customerInformationSearch.vue'
export default {
  components: {
    customerInformationSearch
  },
  data() {
    return {
      chooseLeftBtn: true
    }
  },
  methods: {
    tapBtn: function(args) {
      this.chooseLeftBtn = args.currentTarget.dataset.btn === 'left'
    }
  }
}
</script>

<style lang="less" scoped>
	.btn {
		position: relative;
		flex: 1;
		text-align: center;
		color: #FFFFFF;
		font-size: 30rpx;
		font-family: Source Han Sans CN, Source Han Sans CN-Bold;
		font-weight: 400;

		.line_under_btn {
			position: absolute;
			width: 345rpx;
			height: 6rpx;
			border-radius: 3rpx;
			background-color: #FFFFFF;
			bottom: -18rpx;
			left: 15rpx
		}
	}
</style>
