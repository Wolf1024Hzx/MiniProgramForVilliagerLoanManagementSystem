<template>
	<view class="main">
		<view class="card">
			<view class="card-row">
				<view class="key">客户号</view>
				<view class="value">{{item.id}}</view>
			</view>
			<view class="card-row">
				<view class="key">客户名称</view>
				<view class="value">{{item.name}}</view>
			</view>
			<view class="card-row">
				<view class="key">身份证号码</view>
				<view class="value">{{item.idCard}}</view>
			</view>
			<view class="card-row">
				<view class="key">性别</view>
				<view class="value">{{item.gender}}</view>
			</view>
			<view class="card-row">
				<view class="key">手机</view>
				<view class="value">{{item.phoneNumber}}</view>
			</view>
			<view class="card-row">
				<view class="key">工作单位</view>
				<view class="value">{{item.workPlace}}</view>
			</view>
			<view class="card-row">
				<view class="key">联系地址</view>
				<view class="value">{{item.contactPlace}}</view>
			</view>
			<view class="card-row">
				<view class="key">行政区</view>
				<view class="value">{{item.p1}}</view>
			</view>
			<view class="card-row">
				<view class="key">街道办</view>
				<view class="value">{{item.p2}}</view>
			</view>
			<view class="card-row">
				<view class="key">行政村</view>
				<view class="value">{{item.p3}}</view>
			</view>
			<view class="card-row">
				<view class="key">自然村</view>
				<view class="value">{{item.p4}}</view>
			</view>
			<view class="card-row">
				<view class="key">婚姻状况</view>
				<view class="value">{{item.marry}}</view>
			</view>
			<view class="card-row">
				<view class="key">所属网点</view>
				<view class="value">{{item.subbranch}}</view>
			</view>
		</view>
		<view class="btn">下载</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: {
					id: '011',
					name: '张三',
					idCard: '40009099092276',
					gender: '男',
					phoneNumber: '139****2332',
					workPlace: 'XXXXXXXD座大厦',
					contactPlace: 'XXXXXXXD座大厦',
					p1: '上海市',
					p2: '宝山区大场镇街道办',
					p3: '宝山区大场镇街道办',
					p4: '宝山区大场镇街道办',
					marry: '无',
					subbranch: '/'
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.main {
	font-family: Source Han Sans CN;
	padding-bottom: 72rpx;
}
.card {
	width: 690rpx;
	background: #ffffff;
	border: 1rpx solid #e9e9e9;
	border-radius: 10rpx;
	margin: 24rpx auto 0;
	position: relative;
	padding: 0 32rpx;
}
.card-row {
	width: 100%;
	height: 88rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1rpx solid #E5E7ED;
}
.key {
	opacity: 0.8;
	font-size: 28rpx;
	font-weight: 400;
	color: #2d2f31;
}
.value {
	font-size: 28rpx;
	font-weight: 700;
	color: #2d2f31;
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
	margin: 48rpx auto 0;
}
</style>
