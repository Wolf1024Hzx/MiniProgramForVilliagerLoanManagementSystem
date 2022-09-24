<template>
  <view class="Financial-Assistant_page">
    <HeaderBg page-title="金融助手" is-second-page="true" />
    <view class="nav row-middle">
      <view
        v-for="(item, index) in navList"
        :key="item"
        :class="['nav-item', navIndex === index ? 'nav-item--active' : '']"
      >
        {{ item }}
      </view>
    </view>
    <view class="content">
      <view class="per-line">
        <view class="label">身份额度</view>
        <uni-section type="line">
          <uni-data-select v-model="userCliInfo.cli_amount" label="请选择" :localdata="cli_amount_select" />
        </uni-section>
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
      navList: ['贷款额度计算', '贷款利息及还款计划'],
      cli_amount_select: [
        {
          value: 0,
          text: '普通村民、科员、职员'
        }, 
        {
          value: 20,
          text: '村干部、（副）科长'
        }, 
        {
          value: 30,
          text: '（副）村长/处长'
        }
      ],
      userCliInfo: {
        cli_amount: 0
      }
    }
  }
}
</script>

<style>
	@import '@/style/index.css';

	.Financial-Assistant_page {
		padding: 114.5px 15px 12px;
	}
</style>
