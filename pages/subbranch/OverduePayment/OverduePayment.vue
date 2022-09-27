<template>
  <view style="font-family: Source Han Sans CN;">
    <!--标题-->
    <cu-custom is-back="true">
      <template slot="content">欠款逾期情况明细</template>
    </cu-custom>
    <!--筛选框-->
    <view class="search">
      <view class="search-info">筛选</view>
      <image class="search-img" :src="getImgUrl('subbranchWorker/filter.png')" />
    </view>
    <!--明细信息-->
    <view class="box">
      <view v-for="(item,index) in cardInfos" class="rows">
        <view class="row">
          <view class="key">序号</view>
          <view class="value">{{ item.no }}</view>
        </view>
        <view class="row">
          <view class="key">客户名称</view>
          <view class="value">{{ item.name }}</view>
        </view>
        <view class="row">
          <view class="key">合同金额(元)</view>
          <view class="value" style="color: red;">{{ toThousands(item.ContractAmount1) }}</view>
        </view>
        <view class="row">
          <view class="key">合同金额(元)</view>
          <view class="value" style="color: red;">{{ toThousands(item.ContractAmount2) }}</view>
        </view>
        <view class="row">
          <view class="key">融资/票面金额(元)</view>
          <view class="value" style="color: red;">{{ toThousands(item.FinancingAmount) }}</view>
        </view>
        <view class="row">
          <view class="key">融资/票面余额(元)</view>
          <view class="value" style="color: red;">{{ toThousands(item.FinancingBalance) }}</view>
        </view>
        <view class="row">
          <view class="key">贷款账号</view>
          <view class="value">{{ item.LoanNo }}</view>
        </view>
        <view class="row">
          <view class="key">发放号</view>
          <view class="value">{{ item.IssueNo }}</view>
        </view>
        <view class="row">
          <view class="key">欠款合计(元)</view>
          <view class="value" style="color: red;">{{ toThousands(item.TotalArrears) }}</view>
        </view>
        <view class="row">
          <view class="key">逾期天数</view>
          <view class="value">{{ item.OverdueDays }}</view>
        </view>
        <view class="row">
          <view class="key">逾期本金</view>
          <view class="value" style="color: red;">{{ toThousands(item.OverduePrincipal) }}</view>
        </view>
        <view class="row">
          <view class="key">本金逾期天数</view>
          <view class="value">{{ item.OverdueDaysOfPrincipal }}</view>
        </view>
        <view class="row">
          <view class="key">借款人账号</view>
          <view class="value">{{ item.BorrowerAccountNo }}</view>
        </view>
        <view class="row">
          <view class="key">账户存款余额</view>
          <view class="value" style="color: red;">{{ toThousands(item.AccountBalance) }}</view>
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
		  no: '01',
		  name: '张三',
		  ContractAmount1: 1200000,
		  ContractAmount2: 300000,
		  FinancingAmount: 300000,
		  FinancingBalance: 300000,
		  LoanNo: '09932222',
		  IssueNo: 'No.34535',
		  TotalArrears: 120000,
		  OverdueDays: 5,
		  OverduePrincipal: 120000,
		  OverdueDaysOfPrincipal: 3,
		  BorrowerAccountNo: '01788888',
		  AccountBalance: 120000
	  },
	  {
	  		  no: '02',
	  		  name: '李四',
	  		  ContractAmount1: 1200000,
	  		  ContractAmount2: 300000,
	  		  FinancingAmount: 300000,
	  		  FinancingBalance: 300000,
	  		  LoanNo: '09932222',
	  		  IssueNo: 'No.34535',
	  		  TotalArrears: 120000,
	  		  OverdueDays: 5,
	  		  OverduePrincipal: 120000,
	  		  OverdueDaysOfPrincipal: 3,
	  		  BorrowerAccountNo: '01788888',
	  		  AccountBalance: 120000
	  }]
    }
  },
  methods: {
    getImgUrl(url) {
      return this.$resourceRoute(url)
    },
    toThousands(num) {
	   return num.toString().replace(/\d+/, function(n) {
	      return n.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
	   })
    }
  }
}
</script>

<style lang="less" scoped>
.search{
	position: absolute;
	display: flex;
	margin-top: 5%;
	width: 100%;
	height: 70rpx;
	background: #ffffff;
	color: #2D2F31;
	align-items: center;
	.search-info{
		margin-left: 80%;
		color: #2D2F31;
	}
	.search-img{
		width: 35rpx;
		height: 35rpx;
	}
}
.box{
	margin-top: 16%;
	width: 92%;
	height: 3400rpx;
	margin-left: 4%;
	.rows{
		margin-top: 5%;
		background-color: white;
		height: 1200rpx;
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
		.row{
			display: flex;
			height: 85rpx;
			width: 90%;
			margin-left: 5%;
			align-items: center;
			border-bottom: solid 1rpx #E5E7ED;
			justify-content: space-between;
			.key{
				
			}
			.value{
				font-weight: bold;
			}
		}
	}
}
</style>
