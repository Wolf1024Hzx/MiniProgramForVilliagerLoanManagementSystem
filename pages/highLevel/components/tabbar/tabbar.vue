<template>
		<view class="tabbar">
			<view class="navigator">
				<view class="navigator-item" v-for="(item,index) in tabBar.list" :key="item.pagePath"
					@click="switchTab(index,item)">
						<img :src="$resourceRoute(item.iconPath)" class="icon" v-if="selectedIndex !== index">
						<img :src="$resourceRoute(item.selectedIconPath)" class="icon" v-else>
						<text :class="['item-text',{'text-active':selectedIndex === index}]">{{item.text}}</text>
				</view>
			</view>
		</view>
	</view>
 
</template>

<script>
	export default {
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					if (to.meta.isTabBar) {
						// this.__path__ = this.$route.path
						this.showselected = true
						const index = this.tabBar.list.findIndex(item => to.meta.pagePath === item.pagePath)
						if (index > -1) {
							this.selectedIndex = index
						}
					}
				}
			}
		},
		data() {
			return {
				selectedIndex: 0,
				showselected: false,
				tabBar: {
					list: [{
							"pagePath": "pages/highLevel/index",
							"iconPath": "tabbar_icon/overview.png",
							"selectedIconPath": "tabbar_icon/overview_select.png",
							"text": "业务概括"
						}, {
							"pagePath": "pages/highLevel/distribution/distribution",
							"iconPath": "tabbar_icon/distribution.png",
							"selectedIconPath": "tabbar_icon/distribution_select.png",
							"text": "分布情况"
						}, {
							"pagePath": "pages/highLevel/rank/rank",
							"iconPath": "tabbar_icon/rank.png",
							"selectedIconPath": "tabbar_icon/rank_select.png",
							"text": "排行榜"
						}
					]
				}
			}
		},
		// beforeCreate() {
		// 	this.__path__ = this.$route.path
		// },
		methods: {
			switchTab(index, item) {
				// const url = '/' + item.pagePath
				// const detail = {
				//   index,
				//   url
				// }
				// const curPath = getCurrentPages()[0].$page.fullPath
				// if (curPath !== url) {
				//   // this.__path__ = this.$route.path
				//   uni.navigateTo({
				//     from: 'tabbar',
				//     url,
				//     detail
				//   })
				// } else {
				//   // UniServiceJSBridge.emit('onTabItemTap', detail)
				// }
				this.selectedIndex = index
				this.$parent.selectedIndex = index
				// this.$emit('switchTab', detail)
			}
		}
	}
</script>
 
<style scoped>
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		background: #F5F5F5;
		border-top: 2rpx solid #eee;
	}
 
	.navigator {
		display: flex;
		justify-content: space-between;
		width: 85%;
		margin: 0 auto;
		padding: 20rpx;
	}
 
	.navigator-item {
		display: flex;
		align-items: center;
		flex-direction: column;
		height: 100%;
	}
 
	.item-text {
		margin-top: 6rpx;
		color: #777E86;
		font-size: 24rpx;
	}
 
	.text-active {
		color: #3186E2 !important;
	}
 
	.icon {
		width: 20px;
		height: 20px;
	}
</style>
