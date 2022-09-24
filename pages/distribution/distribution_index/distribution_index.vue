<template>
  <view>
    <view>{{ getStrFromStore() }}</view>
    <view>{{ rubbish }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      rubbish: 'rubbish'
    }
  },
  methods: {
    getStrFromStore() {
      return this.$store.state.text
    }
  },
  onLoad() {
    // this.axios.post('/finance-analysis/overview/time', {
    // 	"subbranch": "全行", //支行名称 “xx支行”或“全行”
    // 	"time": "本年", //选择"本年"，"本月"，"本周"，"本日"
    // 	"interval": "", //时间间隔 可传入：“按年”“按月”“按天”；不填默认是”按月“
    // 	"manager": "" //客户经理（可不填）
    // }).then(res => {
    // 	console.log("get");
    // 	this.rubbish = res.data.data['1'].rateIncome;
    // })
  }
}
</script>

<style>

</style>
