<template>
  <view>
    <customerInformation :status="status" :choses="choses" :title="'影像信息'">
	</customerInformation>
    <view class="main">
		<view class="classify">
			<view v-for="(item,index) in classifyChoses" :key="index" @click="bindClassify(index)"
			:class="classifyStatus === index ? 'classify-chose-active' : 'classify-chose'">
				{{item}}
			</view>
		</view>
	  <choses :serviceStatus="serviceStatus" :serviceChoses="serviceChoses"></choses>
      <view class="image-info">
        <view class="tip">选择下方所需图片</view>
        <view v-for="(item, index) in images" :key="index" class="card" @click="bindImage(index)">
          <view class="card-name">{{ item.name }}</view>
          <view class="card-body" :class="imageStatus === index ? 'active-border' : ''">
            <img class="card-img" :src="item.url">
            <view v-if="imageStatus === index">
              <view class="left-top">{{ item.name }}</view>
              <view class="right-bottom" />
              <img class="ok-icon" :src="getImgUrl('midLevel/imageInfo/hk_right.png')">
            </view>
          </view>
        </view>
      </view>
      <view class="hail">
        <view class="btn-left">下载所有图片</view>
        <view class="btn-right">下载已勾选</view>
      </view>
    </view>
  </view>
</template>

<script>
import customerInformation from '@/components/customerInformation/customerInformation.vue'
import choses from '../components/choses/choses.vue'
export default {
  components: {
    customerInformation,
	choses
  },
  data() {
    return {
	  status: 0,
	  choses: ['证件查询', '客户名称查询'],
	  classifyStatus: 0,
	  classifyChoses: ['管理类','要件类'],
	  serviceStatus: 0,
	  serviceChoses: ['未结清业务', '已结清业务'],
      imageStatus: -1,
      images: [{
        name: '身份证',
        url: ''
      },
      {
        name: '户口本',
        url: ''
      },
      {
        name: '结婚证',
        url: ''
      }
      ]
    }
  },
  methods: {
    bindClassify(status) {
      this.classifyStatus = status
    },
    bindImage(status) {
      this.imageStatus = status
    },
    getImgUrl(url) {
      return this.$resourceRoute(url)
    }
  }
}
</script>

<style scoped>
.hail {
	margin: 60rpx 32rpx;
	padding-bottom: 96rpx;
	display: flex;
	justify-content: space-between;
}
.btn-left {
	width: 335rpx;
	height: 70rpx;
	background: #D4E0F9;
	border-radius: 35rpx;
	color: #4e8bff;
	border: 2rpx solid #4e8bff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.btn-right {
	width: 335rpx;
	height: 70rpx;
	background: #4e8bff;
	border-radius: 35rpx;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.main {
	font-family: Source Han Sans CN;
}
.classify {
	width: 100%;
	height: 110rpx;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0 32rpx;
	background-color: #fff;
}
.classify {
	border-bottom: 1rpx solid #dddddd;
}
.classify-chose {
	height: 45rpx;
	color: #a0a0a0;
	border-bottom: 3rpx solid #ffffff;
}
.classify-chose-active {
	height: 45rpx;
	color: #5484FD;
	border-bottom: 3rpx solid #5484FD;
}
.image-info {
	width: 690rpx;
	height: 1363rpx;
	background: #fff;
	border-radius: 10rpx;
	margin: 31rpx auto 0;
	padding: 40rpx 27rpx 50rpx;
}
.card {
	margin-top: 50rpx;
}
.tip {
	font-size: 32rpx;
	font-weight: 700;
	color: #2d2f31;
}
.card-name {
	font-size: 28rpx;
	font-weight: 400; 
	color: #2d2f31;
	margin-bottom: 28rpx;
}
.card-img {
	width: 100%;
	height: 100%;
	border-radius: 10rpx;
}
.card-body {
	width: 595rpx;
	height: 299rpx;
	background: #eaeaea;
	border: 4rpx solid #ffffff;
	border-radius: 15rpx;
	position: relative;
}
.active-border {
	border: 4rpx solid #4E8BFF;
}
.left-top {
	position: absolute;
	width: 180rpx;
	height: 70rpx;
	left: -4rpx;
	top: -4rpx;
	background: linear-gradient(0deg,#4e8bff 5%, #52b0ff 94%);
	border-radius: 5rpx;
	border-top-left-radius: 15rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
}
.right-bottom {
	position: absolute;
	width: 0;
	height: 0;
	right: -4rpx;
	bottom: -4rpx;
	border-bottom: 32rpx solid #4E8BFF;
	border-left: 32rpx solid transparent;
	border-right: 32rpx solid #4E8BFF;
	border-top: 32rpx solid transparent;
	border-bottom-right-radius: 15rpx;
}
.ok-icon {
	position: absolute;
	height: 23rpx;
	width: 29rpx;
	right: 2rpx;
	bottom: 2rpx;
}
</style>
