<template>
  <view style="font-family: Source Han Sans CN;">
    <!--标题-->
    <cu-custom is-back="true">
      <template slot="content">业务概况明细</template>
    </cu-custom>
    <!--筛选框-->
    <view class="search" @click="router(1)">
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
          <view class="key">业务种类</view>
          <view class="value">{{ item.BusinessType }}</view>
        </view>
        <view class="row">
          <view class="key">合同编号</view>
          <view class="value">{{ item.ContractNo }}</view>
        </view>
        <view class="row">
          <view class="key">客户名称</view>
          <view class="value">{{ item.CustomerName }}</view>
        </view>
        <view class="row">
          <view class="key">合同金额(元)</view>
          <view class="value" style="color: red;">{{ toThousands(item.ContractAmount) }}</view>
        </view>
        <view class="row">
          <view class="key">贷款余额(元)</view>
          <view class="value" style="color: red;">{{ toThousands(item.LoanBalance) }}</view>
        </view>
        <view class="row">
          <view class="key">贷款起始日期</view>
          <view class="value">{{ item.LoanStartDate }}</view>
        </view>
        <view class="row">
          <view class="key">贷款到期日期</view>
          <view class="value">{{ item.LoanMaturityDate }}</view>
        </view>
        <view class="row">
          <view class="key">贷款期限</view>
          <view class="value">{{ item.LoanTerm }}</view>
        </view>
        <view class="row">
          <view class="key">贷款利率</view>
          <view class="value" style="color: red;">{{ item.LendingRate }}%</view>
        </view>
        <view class="row">
          <view class="key">主保证人名称</view>
          <view class="value">{{ item.MainGuarantorName }}</view>
        </view>
        <view class="row">
          <view class="key">辅助保证人1姓名</view>
          <view class="value">{{ item.AuxiliaryAuarantorName1 }}</view>
        </view>
        <view class="row">
          <view class="key">辅助保证人2姓名</view>
          <view class="value">{{ item.AuxiliaryAuarantorName2 }}</view>
        </view>
        <view class="row">
          <view class="key">辅助保证人3姓名</view>
          <view class="value">{{ item.AuxiliaryAuarantorName3 }}</view>
        </view>
        <view class="row">
          <view class="key">辅助保证人4姓名</view>
          <view class="value">{{ item.AuxiliaryAuarantorName4 }}</view>
        </view>
        <view class="row">
          <view class="key">借款人账号</view>
          <view class="value" style="color: red;">{{ item.BorrowerAccount }}</view>
        </view>
        <view class="row">
          <view class="key">账户存款余额(元)</view>
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
        BusinessType: '/',
        ContractNo: 'N3232222',
        CustomerName: '张三',
        ContractAmount: 300000,
        LoanBalance: 300000,
        LoanStartDate: '2022-11-09',
        LoanMaturityDate: '2023-11-09',
        LoanTerm: '2年',
        LendingRate: 3.36,
        MainGuarantorName: '王五',
        AuxiliaryAuarantorName1: '赵四',
        AuxiliaryAuarantorName2: '孙六',
        AuxiliaryAuarantorName3: '钱进',
        AuxiliaryAuarantorName4: '林重',
        BorrowerAccount: '099877',
        AccountBalance: 120000
      },
      {
        no: '02',
        BusinessType: '/',
        ContractNo: 'N3232222',
        CustomerName: '啊这',
        ContractAmount: 300000,
        LoanBalance: 300000,
        LoanStartDate: '2022-11-09',
        LoanMaturityDate: '2023-11-09',
        LoanTerm: '2年',
        LendingRate: 3.36,
        MainGuarantorName: '王五',
        AuxiliaryAuarantorName1: '赵四',
        AuxiliaryAuarantorName2: '孙六',
        AuxiliaryAuarantorName3: '钱进',
        AuxiliaryAuarantorName4: '林重',
        BorrowerAccount: '099877',
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
    },
    router(index) {
      let url = './'
      switch (index) {
        case 1:
          url = '/pages/subbranch/ManagementDetailsPop/ManagementDetailsPop'
          break
        case 2:
          url = './'
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
			height: 90rpx;
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
