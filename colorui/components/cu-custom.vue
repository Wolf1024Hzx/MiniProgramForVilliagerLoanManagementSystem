<template>
  <view>
    <view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
      <view class="cu-bar" :style="style">
        <view v-if="isBack" class="action" @tap="BackPage">
          <text class="cuIcon-back" />
          <slot name="backText" />
        </view>
        <view class="content" :style="[{top:StatusBar + 'px', color:textColor}]" style="font-size: 20px;">
          <slot name="content" />
        </view>
        <slot name="right" />
      </view>
      <view class="bg" :style="bgStyle" />
    </view>
  </view>
</template>

<script>
export default {
  name: 'CuCustom',
  props: {
    bgColor: {
      type: String,
      default: ''
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    textColor: {
      type: String,
      default: '#F6F6F6'
    },
    backgroundColor: {
      type: String,
      default: 'linear-gradient(0deg, #4e8bff 5%, #52b0ff 94%)'
    },
    backgroundHeight: {
      type: Number,
      default: 187
    }
  },
  data() {
    return {
      StatusBar: 56,
      CustomBar: 80
    }
  },
  computed: {
    style() {
      var StatusBar = this.StatusBar
      var CustomBar = this.CustomBar
      var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`
      return style
    },
		
    bgStyle() {
      let style = 'height:' + this.backgroundHeight + 'rpx;background:' +
				this.backgroundColor + ';'
      return style
    }
  },
  methods: {
    BackPage() {
      if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
        let url = '/' + __wxConfig.pages[0]
        return uni.redirectTo({ url })
      }
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style scoped lang="less">
	.bg {
		width: 100%;
		position: absolute;
		z-index: 0;
		top: 0;
	}
</style>
