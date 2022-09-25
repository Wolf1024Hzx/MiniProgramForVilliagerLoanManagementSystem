<template>
	<view>
		<CustomerInformation>
			<text slot="BusinessInformation"></text>
		</CustomerInformation>
		<view class="main">
			<view class="navigate">
				<scroll-view class="classify" scroll-x="true" >
					<view v-for="(item, index) in classifyChoses" @click="bindClassify(index)" :class="classifyStatus === index ? 'classify-chose-active' : 'classify-chose'">{{item}}</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import CustomerInformation from '../CustomerInformation/CustomerInformation.vue'
export default {
	data() {
		return {
			classifyStatus: 3,
			classifyChoses: ['业务信息','额度依据','关联业务','对外担保','担保圈'],
			userInfos: [{
				username: '张三',
				serviceType: '/',
				account: 300000,
				balance: 1000000,
				loanBegin: '2022年11月21日',
				loanEnd: '2023年11月21日',
				loan: 150000
			},
			{
				username: '张三',
				serviceType: '/',
				account: 300000,
				balance: 1000000,
				loanBegin: '2022年11月21日',
				loanEnd: '2023年11月21日',
				loan: 150000
			}]
		}
	},
	methods: {
		bindClassify(status) {
			this.classifyStatus = status
		}
	},
	components: {
		CustomerInformation
	}
}
</script>

<style scoped>
.main {
	font-family: Source Han Sans CN;
	padding-bottom: 72rpx;
}
.navigate {
	width: 100%;
	height: 115rpx;
	display: flex;
	flex-direction: column;
	padding: 0 32rpx;
	background-color: #fff;
}
.classify {
	flex: 1;
	white-space: nowrap;
	display: flex;
	align-items: center;
	background-color: #fff;
}
.classify-chose {
	display: inline-block;
	height: 45rpx;
	color: #a0a0a0;
	border-bottom: 3rpx solid #ffffff;
	margin-right: 48rpx;
}
.classify-chose-active {
	display: inline-block;
	height: 45rpx;
	color: #5484FD;
	border-bottom: 3rpx solid #5484FD;
	margin-right: 48rpx;
}
</style>