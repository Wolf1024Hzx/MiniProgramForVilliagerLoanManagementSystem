<template>
  <view>
    <cu-custom :is-back="true" :background-height="300">
      <template slot="content">{{title}}</template>
    </cu-custom>

    <view style="position: relative;z-index: 1;">
      <!-- 这里放两个按钮 -->
      <view style="display: flex;margin-top: 60rpx;margin-bottom: 20rpx;">
        <view v-for="(item, index) in choses" :key="index" class="btn" :data-status="index" @tap="tapBtn">
          {{item}}
          <view v-if="status === index" class="line_under_btn" />
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
  props: ['status', 'choses', 'title'],
  data() {
    return {
      
    }
  },
  methods: {
    tapBtn: function(args) {
      this.$parent.status = args.currentTarget.dataset.status
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
