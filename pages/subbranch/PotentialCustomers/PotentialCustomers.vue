<template>
  <view>
    <!--标题-->
    <cu-custom is-back="true">
      <template slot="content">潜力客户</template>
    </cu-custom>
    <!--标签栏-->
    <view class="navigate">
      <scroll-view scroll-x="true" class="classify">
        <view
          v-for="(item, index) in classifyChoses"
          :key="index"
          :class="classifyStatus === index ? 'classify-chose-active' : 'classify-chose'" 
          @click="bindClassify(index)"
        >
          {{ item }}
        </view>
      </scroll-view>
    </view>
    <!--潜力客户信息-->
    <view class="cards">
      <view v-for="(item,index) in cardInfos" :key="index" class="card">
        <view class="card-head">
          <view class="sign" />
          <view class="card-info">{{ item.name }}:{{ changePhone(item.phone) }}</view>
          <view class="card-more">查看明细</view>
        </view>
        <view class="azhe">推荐理由：</view>
        <view class="card-reason">{{ item.reason }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      classifyChoses: ['结清客户', '客户配偶', '客户家属', '担保人', '智能推荐'],
	  classifyStatus: 0,
	  cardInfos: [{
		  name: '张三',
		  phone: 19012341323,
		  reason: '在我行办理过100万贷款且已结清，能力和信誉度高'
	  },
	  {
	  		  name: '李四',
	  		  phone: 19012341323,
	  		  reason: '在我行办理过100万贷款且已结清，能力和信誉度高'
	  },
	  {
	  		  name: '王五',
	  		  phone: 19012341323,
	  		  reason: '在我行办理过100万贷款且已结清，能力和信誉度高'
	  }]
    }
  },
  methods: {
    bindClassify(status) {
      this.classifyStatus = status
    },
    changePhone(num) {
      return num.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    }
  }
}
</script>

<style lang="less" scoped>
.navigate {
	margin-top: 5%;
	width: 100%;
	height: 115rpx;
	display: flex;
	align-items: center;
	padding: 0 32rpx;
	background-color: #fff;
}
.classify {
	white-space: nowrap;
}
.classify-chose {
	display: inline-block;
	height: 45rpx;
	border-bottom: 5rpx solid #ffffff;
	margin-right: 45rpx;
}
.classify-chose-active {
	display: inline-block;
	height: 45rpx;
	border-bottom: 3rpx solid #5484FD;
	font-weight: bold;
	color: #5484FD;
	margin-right: 45rpx;
}
.cards{
	font-family: Source Han Sans CN;
	width: 100;
	height: 1400rpx;
	margin-top: 5%;
	.card{
		margin-top: 3%;
		width: 92%;
		height: 20%;
		margin-left: 4%;
		border-radius: 10rpx;
		background-color: white;
		display: flex;
		flex-direction: column;
		.card-head{
			display: flex;
			flex-direction: row;
			width: 90%;
			height: 40%;
			margin-left: 5%;
			border-bottom: solid 3rpx #D4D7E1;
			align-items: center;
			.sign{
				margin-left: -5%;
				background-color: #5B8FF9;
				height: 35%;
				width: 10rpx;
			}
			.card-info{
				font-weight: bold;
				margin-left: 3%;
			}
			.card-more{
				margin-left: 43%;
			}
		}
		.azhe{
			font-size: 28rpx;
			width: 90%;
			margin-left: 5%;
			margin-top: 5%;
		}
		.card-reason{
			font-size: 28rpx;
			width: 90%;
			margin-left: 5%;
			margin-top: 1%;
		}
	}
}
</style>
