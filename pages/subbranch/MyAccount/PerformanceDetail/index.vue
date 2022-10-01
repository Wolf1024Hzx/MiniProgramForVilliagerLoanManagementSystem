<template>
  <view>
    <!--标题-->
    <cu-custom is-back="true">
      <template slot="content">贷款业绩明细</template>
    </cu-custom>
    <view class="business-detail_page">
      <view v-for="item in 3" :key="item" class="list-item">
        <view class="per-line row">
          <view class="label">序号</view>
          <view class="value">{{ item.id || '01' }}</view>
        </view>
        <view class="per-line row">
          <view class="label">客户名称</view>
          <view class="value">{{ item.userName || '张三' }}</view>
        </view>
        <view class="per-line row">
          <view class="label">贷款金额(元)</view>
          <view class="value t-red">{{ item.cli_amount || 100000000 }}</view>
        </view>
        <view class="per-line row">
          <view class="label">贷款余额(元)</view>
          <view class="value t-red">{{ item.cli_balance || '2000000000' }}</view>
        </view>
        <view class="per-line row">
          <view class="label">贷款利率(%)</view>
          <view class="value t-red">{{ item.cli_rate || '1.02%' }}</view>
        </view>
        <view class="per-line row">
          <view class="label">贷款日期</view>
          <view class="value">{{ item.cli_date || '2012-03-02' }}</view>
        </view>
        <view class="per-line row">
          <view class="label">到期日</view>
          <view class="value">{{ item.cli_end_date || '2022-12-02' }}</view>
        </view>
        <view class="per-line row">
          <view class="label">账户</view>
          <view class="value">{{ item.cli_account || 'XXX中国银行' }}</view>
        </view>
        <view class="per-line row">
          <view class="label">账户存款(元)</view>
          <view class="value t-red">{{ item.cli_deposit || 10000000 }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import HeaderBg from '@/components/HeaderBg.vue'
export default {
  components: {
    HeaderBg
  },
  data() {
    return {
      businessList: [
        {
        }
      ]
    }
  }
}
</script>

<style>
	@import '@/style/index.css';
	.business-detail_page {
		padding: 48rpx 30rpx 24rpx;
		background-color: #F3F5F9;
		min-height: 800px;
		font-size: 14px;
		font-family: Source Han Sans CN, Source Han Sans CN-Regular;
	}
	.list-item {
		padding: 16px;
		background-color: #fff;
		margin-bottom: 11px;
	}
	
	.per-line  {
		justify-content: space-between;
		border-bottom: 0.5px solid #E5E7ED;
		height: 40px;
		line-height: 40px;
	}
	
	.per-line:last-child {
		border: none
	}
	
	.per-line .label {
		opacity: 0.8;
		font-weight: 400;
		color: #2d2f31;
	}
	.per-line .value {
		font-weight: 700;
		color: #2d2f31;
	}
	.per-line .t-red {
		color: #FD6362;
	}
</style>
