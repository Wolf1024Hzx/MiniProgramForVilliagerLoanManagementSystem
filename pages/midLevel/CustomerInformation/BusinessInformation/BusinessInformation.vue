<template>
  <view style="margin-top: 26rpx;" class="scroll_background">
    <scroll-view scroll-x="true" class="scroll-view_H">
      <view
        class="scroll_item"
        data-id="1"
        :class="choosedID === 1 ? 'scroll_item_selected' : ''"
        @tap="tapScroll"
      >
        基本信息1
      </view>
      <view
        class="scroll_item"
        data-id="2"
        :class="choosedID === 2 ? 'scroll_item_selected' : ''"
        @tap="tapScroll"
      >
        基本信息2
      </view>
      <view
        class="scroll_item"
        data-id="3"
        :class="choosedID === 3 ? 'scroll_item_selected' : ''"
        @tap="tapScroll"
      >
        业务信息
      </view>
      <view
        class="scroll_item"
        data-id="4"
        :class="choosedID === 4 ? 'scroll_item_selected' : ''"
        @tap="tapScroll"
      >
        额度依据
      </view>
      <view
        class="scroll_item"
        data-id="5"
        :class="choosedID === 5 ? 'scroll_item_selected' : ''"
        @tap="tapScroll"
      >
        关联业务
      </view>
    </scroll-view>
    <view class="line" />

    <view class="service">
      <view
        :class="serviceStatus === 0 ? 'service-chose-active' : 'service-chose'"
        data-status="0"
        @tap="changeService"
      >
        已结清业务
      </view>
      <view
        :class="serviceStatus === 1 ? 'service-chose-active' : 'service-chose'"
        data-status="1"
        @tap="changeService"
      >
        未结清业务
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      choosedID: 1,
      serviceStatus: 0
    }
  },
  methods: {
    tapScroll(arg) {
      this.choosedID = parseInt(arg.currentTarget.dataset.id)
    },
    changeService(arg) {
      this.serviceStatus = parseInt(arg.currentTarget.dataset.status)
    }
  }
}
</script>

<style lang="less" scoped>
	.scroll_background {
		background: #ffffff;
		padding-top: 16rpx;

		.scroll-view_H {
			white-space: nowrap;
			width: 100%;
			margin-bottom: 32rpx;

			.scroll_item {
				display: inline-block;
				font-size: 28rpx;
				font-family: Source Han Sans CN, Source Han Sans CN-Regular;
				font-weight: 400;
				text-align: center;
				color: #2d2f31;
				padding: 20rpx;
			}

			.scroll_item_selected {
				color: #5484FD;
				font-size: 30rpx;
				border-bottom: solid 4rpx #5484FD;
			}
		}

		.line {
			width: 692rpx;
			height: 1rpx;
			background: #e5e7ed;
			margin: 0 auto;
		}

		.service {
			width: 75%;
			display: flex;
			margin: 0 auto;
			align-items: center;
			padding: 32rpx 0;
			justify-content: space-around;

			.service-chose,
			.service-chose-active {
				width: 150rpx;
				height: 57rpx;
				line-height: 57rpx;
				font-size: 28rpx;
				font-family: Source Han Sans CN, Source Han Sans CN-Regular;
				text-align: center;
				color: #2d2f31;
			}

			.service-chose-active {
				font-size: 30rpx;
				color: #ffffff;
				background-color: #5484FD;
				border-radius: 24rpx;
				width: 200rpx;
			}
		}
	}
</style>
