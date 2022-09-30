<template>
	<view style="padding-bottom: 72rpx;">
		<overview v-if="selectedIndex === 0"></overview>
		<distribution v-else-if="selectedIndex === 1"></distribution>
		<rank v-else-if="selectedIndex === 2"></rank>
		<tabbar></tabbar>
	</view>
</template>

<script>
	import tabbar from './components/tabbar/tabbar'
	import overview from './overview/overview'
	import distribution from './distribution/distribution'
	import rank from './rank/rank'
	
	export default {
		components: {
			tabbar,
			overview,
			distribution,
			rank
		},
		data() {
			return {
				selectedIndex: 0
			}
		}
	}
</script>

<style scoped>
	
</style>