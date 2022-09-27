<template>
	<view>
		<view v-if="isEntry">
			<customerInformation :status="status" :choses="choses" :title="'客户信息查询'">
				<template v-slot:customerInformationSearch />
			</customerInformation>
			<view class="entry">
				<view class="input-idcard">
					<text>证件号码</text>
					<view class="input">
						<input type="idcard" style="width: 100%;" placeholder="请输入您的证件号码"/>
					</view>
				</view>
				<view class="btn" @click="throughEntry">查询</view>
			</view>
		</view>
		<view v-else>
			<customerInformation :status="status" :choses="choses" :title="'客户信息查询'"></customerInformation>
			<scrolls :classifyStatus="classifyStatus" :classifyChoses="classifyChoses"></scrolls>
			<view v-if="classifyStatus === 0">
				<basicInfo></basicInfo>
			</view>
			<view v-else-if="classifyStatus === 2">
				<serviceInfo></serviceInfo>
			</view>
			<view v-else-if="classifyStatus === 4">
				<guarantee></guarantee>
			</view>
			<view v-else-if="classifyStatus === 5">
				<choses :serviceStatus="serviceStatus" :serviceChoses="serviceChoses"></choses>
				<guarantee></guarantee>
			</view>
			<view v-else-if="classifyStatus === 6">
				<guaranteeCircle></guaranteeCircle>
			</view>
		</view>
	</view>
</template>

<script>
	import customerInformation from '@/components/customerInformation/customerInformation.vue'
	import guarantee from '../components/guarantee/guarantee.vue'
	import guaranteeCircle from '../components/guaranteeCircle/guaranteeCircle.vue'
	import choses from '../components/choses/choses.vue'
	import scrolls from '../components/scrolls/scrolls.vue'
	import basicInfo from '../components/basicInfo/basicInfo.vue'
	import serviceInfo from '../components/serviceInfo/serviceInfo.vue'
	export default {
		data() {
			return {
				status: 0,
				choses: ['证件查询', '客户名称查询'],
				classifyStatus: 0,
				classifyChoses: ['基本信息1','基本信息2','业务信息','额度依据','关联业务','对外担保','担保圈','附加信息'],
				serviceStatus: 0,
				serviceChoses: ['概况', '正在担保', '结束担保'],
				isEntry: true
			}
		},
		methods: {
			throughEntry() {
				this.isEntry = false
			}
		},
		components: {
			customerInformation,
			guarantee,
			guaranteeCircle,
			choses,
			scrolls,
			basicInfo,
			serviceInfo
		}
	}
</script>

<style scoped>
.entry {
	width: 750rpx;
	height: 311rpx;
	background: #ffffff;
	margin-top: 32rpx;
	padding: 56rpx 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.input-idcard {
	display: flex;
	justify-content: center;
	align-items: center;
}
.input {
	width: 467rpx;
	height: 75rpx;
	background: #ffffff;
	border: 1rpx solid #d4d7e1;
	border-radius: 10rpx;
	padding-left: 16rpx;
	margin-left: 16rpx;
	display: flex;
	align-items: center;
}
.btn {
	width: 690rpx;
	height: 70rpx;
	background: #4e8bff;
	border-radius: 35rpx;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
}
</style>
