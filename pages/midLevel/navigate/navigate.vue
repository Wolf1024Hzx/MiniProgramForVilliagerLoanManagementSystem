<template>
	<view>
		<customerInformation></customerInformation>
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
</template>

<script>
	import customerInformation from '../components/customerInformation/customerInformation.vue'
	import guarantee from '../components/guarantee/guarantee.vue'
	import guaranteeCircle from '../components/guaranteeCircle/guaranteeCircle.vue'
	import choses from '../components/choses/choses.vue'
	import scrolls from '../components/scrolls/scrolls.vue'
	import basicInfo from '../components/basicInfo/basicInfo.vue'
	import serviceInfo from '../components/serviceInfo/serviceInfo.vue'
	export default {
		data() {
			return {
				classifyStatus: 2,
				classifyChoses: ['基本信息1','基本信息2','业务信息','额度依据','关联业务','对外担保','担保圈'],
				serviceStatus: 0,
				serviceChoses: ['概况', '正在担保', '结束担保'],
			}
		},
		methods: {
			
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

</style>
