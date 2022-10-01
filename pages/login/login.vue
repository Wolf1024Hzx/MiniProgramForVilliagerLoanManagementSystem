<template>
  <view style="position: relative;">
    <image :src="getImgUrl('login/background.png')" class="bg" />
    <view class="title">村民贷系统</view>
    <view class="content">
      <view class="sub_title">登录</view>
      <view style="display: flex;justify-content: center;">
        <view class="login_input_outer">
          <input v-model="account" class="login_input" placeholder="请输入您的账号">
          <image :src="getImgUrl('login/cancel.png')" class="cancel_icon" data-cancel="1" @tap="clearInput" />
        </view>
      </view>
      <view style="display: flex;justify-content: center;">
        <view class="login_input_outer" style="margin-top: 40rpx;">
          <input v-model="psw" class="login_input" placeholder="请输入密码" type="safe-password">
          <image :src="getImgUrl('login/cancel.png')" class="cancel_icon" data-cancel="2" @tap="clearInput" />
        </view>
      </view>

      <view style="display: flex;justify-content: center;margin-top: 75rpx;">
        <view class="login_btn" @tap="login">登录</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data: () => {
    return {
      account: '',
      psw: ''
    }
  },
  methods: {
    getImgUrl(path) {
      return this.$resourceRoute(path)
    },
    clearInput(arg) {
      let type = arg.currentTarget.dataset.cancel
      if (type === '1')
        this.account = ''
      else
        this.psw = ''
    },
    login() {
      switch (this.account) {
        case '1':
          uni.navigateTo({
            url: '/pages/highLevel/index',
            animationType: 'pop-in',
            fail: (err) => {
              console.log(err)
            }
          })
          break
        case '2':
          uni.navigateTo({
            url: '/pages/midLevel/index',
            animationType: 'pop-in',
            fail: (err) => {
              console.log(err)
            }
          })
          break
        case '3':
          uni.navigateTo({
            url: '/pages/subbranch/SubbranchWorker/index',
            animationType: 'pop-in',
            fail: (err) => {
              console.log(err)
            }
          })
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
	@family: Source Han Sans CN, Source Han Sans CN-Bold;

	.bg {
		position: absolute;
		width: 750rpx;
		height: 786rpx;
		top: 0;
		left: 0;
		z-index: 0;
	}

	.title {
		position: absolute;
		z-index: 1;
		width: 750rpx;
		font-size: 42rpx;
		font-family: @family;
		font-weight: 700;
		text-align: center;
		color: #fcfcfd;
		letter-spacing: 4rpx;
		top: 195rpx;
	}

	.content {
		position: absolute;
		z-index: 1;
		width: 750rpx;
		top: 700rpx;

		.sub_title {
			margin-top: 64rpx;
			text-align: center;
			font-size: 36rpx;
			font-family: @family;
			font-weight: 700;
			color: #232323;
			letter-spacing: 4rpx;
		}

		.login_input_outer {
			margin-top: 48rpx;
			display: flex;
			width: 630rpx;
			height: 80rpx;
			background: #f3f4f4;
			border-radius: 40rpx;
			align-items: center;
			font-size: 30rpx;
			padding: 0 24rpx;
			justify-content: space-between;

			.login_input {
				width: 90%;
			}

			.cancel_icon {
				width: 30rpx;
				height: 30rpx;
			}
		}

		.login_btn {
			width: 630rpx;
			height: 80rpx;
			background: #4e8bff;
			border-radius: 40rpx;
			font-size: 30rpx;
			font-family: Source Han Sans CN, Source Han Sans CN-Regular;
			font-weight: 400;
			text-align: center;
			color: #ffffff;
			letter-spacing: 2rpx;
			line-height: 80rpx;
		}
	}
</style>

<style>
	page {
		background-color: #FFFFFF;
	}
</style>
