<template>
  <view style="font-family: Source Han Sans CN;">
    <!--蒙版-->
    <view class="basic" />
    <!--标题-->
    <cu-custom is-back="true">
      <template slot="content">业务概况明细</template>
    </cu-custom>
    <!--筛选框-->
    <view class="search" style="z-index: 5;">
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
    <!--筛选内容-->
    <view class="filter">
      <view class="options">
        <view :class="classify1Status==='false'?'option1':'option1Active'" @click="bindClassify(1)">按贷款起始日期排序</view>
        <view :class="classify2Status==='false'?'option2':'option2Active'" @click="bindClassify(2)">按贷款到期日期排序</view>
        <view :class="classify3Status==='false'?'option3':'option3Active'" @click="bindClassify(3)">按合同余额排序</view>
        <view :class="classify4Status==='false'?'option4':'option4Active'" @click="bindClassify(4)">按贷款余额排序</view>
      </view>
      <view class="buttons">
        <view class="reset">重置</view>
        <view class="define">确定</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
	  classify1Status: 'false',
	  classify2Status: 'false',
	  classify3Status: 'false',
	  classify4Status: 'false',
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
    bindClassify(num) {
      if (num === 1) {
        if (this.classify1Status === 'true') {
          this.classify1Status = 'false'
        } else {
          this.classify1Status = 'true'
        }
      }
      if (num === 2) {
        if (this.classify2Status === 'true') {
          this.classify2Status = 'false'
        } else {
          this.classify2Status = 'true'
        }
      }
      if (num === 3) {
        if (this.classify3Status === 'true') {
          this.classify3Status = 'false'
        } else {
          this.classify3Status = 'true'
        }
      }
      if (num === 4) {
        if (this.classify4Status === 'true') {
          this.classify4Status = 'false'
        } else {
          this.classify4Status = 'true'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.basic{
	position: absolute;
	width: 100%;
	height: 4000rpx;
	background-color: black;
	z-index: 2;
	opacity: 0.4;
	margin-top: 25%;
}
.search{
	position: absolute;
	margin-top: 25%;
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
.filter{
	background-color: white;
	position: absolute;
	z-index: 8;
	width: 100%;
	height: 400rpx;
	top: 16%;
	border: solid 2rpx #2D2F31;
	display: flex;
	flex-direction: column;
	.options{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		height: 70%;
		.option1{
			text-align: center;
			line-height: 100rpx;
			margin-top: 5%;
			margin-left: 3%;
			color: black;
			width: 45%;
			height: 36%;
			background-color: #eeeded;
			border-radius: 5rpx;
		}
		.option2{
			text-align: center;
			line-height: 100rpx;
			margin-top: 5%;
			margin-left: 3%;
			color: black;
			width: 45%;
			height: 36%;
			background-color: #eeeded;
			border-radius: 5rpx;
		}
		.option3{
			text-align: center;
			line-height: 100rpx;
			margin-top: 2%;
			margin-left: 3%;
			color: black;
			width: 45%;
			height: 36%;
			background-color: #eeeded;
			border-radius: 5rpx;
		}
		.option4{
			text-align: center;
			line-height: 100rpx;
			margin-top: 2%;
			margin-left: 3%;
			color: black;
			width: 45%;
			height: 36%;
			background-color: #eeeded;
			border-radius: 5rpx;
		}
		.option1Active{
			text-align: center;
			line-height: 100rpx;
			margin-top: 5%;
			margin-left: 3%;
			color: white;
			width: 45%;
			height: 36%;
			background-color: #5484FD;
			border-radius: 5rpx;
		}
		.option2Active{
			text-align: center;
			line-height: 100rpx;
			margin-top: 5%;
			margin-left: 3%;
			color: white;
			width: 45%;
			height: 36%;
			background-color: #5484FD;
			border-radius: 5rpx;
		}
		.option3Active{
			text-align: center;
			line-height: 100rpx;
			margin-top: 2%;
			margin-left: 3%;
			color: white;
			width: 45%;
			height: 36%;
			background-color: #5484FD;
			border-radius: 5rpx;
		}
		.option4Active{
			text-align: center;
			line-height: 100rpx;
			margin-top: 2%;
			margin-left: 3%;
			color: white;
			width: 45%;
			height: 36%;
			background-color: #5484FD;
			border-radius: 5rpx;
		}
	}
	.buttons{
		margin-top: 5%;
		border-top: solid #eeeded 2rpx;
		width: 100%;
		height: 30%;
		display: flex;
		flex-direction: row;
		
		.reset{
			margin-top: 2%;
			margin-left: 6%;
			text-align: center;
			line-height: 80rpx;
			width: 40%;
			height: 70%;	
			border: 1rpx solid #5484fd;
			border-radius: 39rpx;
		}
		.define{
			color: white;
			margin-top: 2%;
			margin-left: 6%;
			text-align: center;
			line-height: 80rpx;
			width: 40%;
			height: 70%;
			border: 1rpx solid #5484fd;
			border-radius: 39rpx;
			background: #5484fd;
		}
	}
}
</style>
