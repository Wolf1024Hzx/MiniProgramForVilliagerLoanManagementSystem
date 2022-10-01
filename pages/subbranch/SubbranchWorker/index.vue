<template>
  <view style="background-color: #FBFCFD;height: 1600rpx;">
    <!--标题-->
    <cu-custom>
      <template slot="content">村民贷系统</template>
    </cu-custom>
    <!--卡片信息-->
    <view style="margin-top: 10%;">
      <view v-for="(item,index) in cardInfos" class="cards" @click="router(item.cardNameCn)">
        <view class="card" :style="item.bgc">
          <image class="card-img" :src="getImgUrl(item.cardImg)" />
          <view class="card-info">
            <view class="card-info-cn">{{ item.cardNameCn }}</view>
            <view class="card-info-eg">{{ item.cardNameEg }}</view>
          </view>
          <view class="arrow" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cardInfos: [{
        cardImg: 'subbranchWorker/img1.png',
        cardNameCn: '我的管户',
        cardNameEg: 'My Account',
        bgc: 'background: linear-gradient(-60deg,#31B3DB,#308CDA);'
      },
	  {
	    cardImg: 'subbranchWorker/img2.png',
	    cardNameCn: '客户信息',
	    cardNameEg: 'Customer Information',
        bgc: 'background: linear-gradient(-60deg,#678EFC,#3576FD);'
	  },
	  {
	    cardImg: 'subbranchWorker/img3.png',
	    cardNameCn: '影像信息',
	    cardNameEg: 'Image Information',
        bgc: 'background: linear-gradient(-60deg,#F89186,#FD6362);'
	  },
	  {
	    cardImg: 'subbranchWorker/img4.png',
	    cardNameCn: '金融助手',
	    cardNameEg: 'Financial Assistant',
        bgc: 'background: linear-gradient(-60deg,#31B3DB,#308CDA);'
	  },
	  {
	    cardImg: 'subbranchWorker/img5.png',
	    cardNameCn: '潜力客户',
	    cardNameEg: 'Potential Customers',
        bgc: 'background: linear-gradient(-60deg,#678EFC,#3576FD);'
	  },
	  {
	    cardImg: 'subbranchWorker/img6.png',
	    cardNameCn: '华山论剑',
	    cardNameEg: 'Competition On Huashan Mountain',
        bgc: 'background: linear-gradient(-60deg,#F89186,#FD6362);'
	  }]
    }
  },
  methods: {
    getImgUrl(url) {
      return this.$resourceRoute(url)
    },
    router(index) {
      let url = './'
      switch (index) {
        case '我的管户':
          url = '/pages/subbranch/MyAccount/index'
          break
        case '客户信息':
          url = '/pages/midLevel/bussinessInfo/bussinessInfo'
          break
        case '影像信息':
          url = '/pages/midLevel/imageInfo/imageInfo'
          break
        case '金融助手':
          url = '/pages/subbranch/financialAssistant/financialAssistant'
          break
        case '潜力客户':
          url = '/pages/subbranch/PotentialCustomers/PotentialCustomers'
          break
        case '华山论剑':
          url = ''
          break
      }
	  uni.navigateTo({
	  	url: url,
        animationType: 'pop-in',
        fail: (err) => {
          console.log(err)
        }
	  })
    }
  }
}
</script>

<style lang="less" scoped>
.cards{
	width: 100%;
	height: 150rpx;
	margin-top: 20rpx;
	display: flex;
	background-color: #FBFCFD;
	color: white;
	font-family: Source Han Sans CN;
	justify-content: center;
	.card{
		display: flex;
		align-items: center;
		width: 90%;
		height: 100%;
		border-radius: 10rpx;
		.card-img{
			margin-left: 4%;
			width: 90rpx;
			height: 90rpx;
		}
		.card-info{
			margin-left: 3%;
			display: flex;
			flex-direction: column;
			.card-info-cn{
				font-size: 28rpx;
			}
			.card-info-eg{
				font-size: 24rpx;
			}
		}
		.arrow{
			position: absolute;
			width: 20rpx;
			height: 20rpx;
			border: 2rpx solid white;
			border-left-width: 0;
			border-bottom-width: 0;
			transform: matrix(0.71,0.71,-0.71,0.71,0,0);
			right: 100rpx;
		}
	}
}
</style>
