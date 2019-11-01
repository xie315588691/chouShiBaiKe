<template>
	<view class="paper-item animated bounceInLeft" @tap="gotoChart">
		<image :src="item.userpic" mode="aspectFill" lazy-load></image>
		<view class="paper-item-info">
			<view class="paper-item-one df df-j-s-b df-a-c">
				<text class="paper-name">{{ item.name }}</text>
				<text class="paper-time">{{ item.time }}</text>
			</view>
			<view class="paper-item-two df df-j-s-b df-a-c">
				<text class="paper-title">{{ item.info }}</text>
				<text class="paper-tip">{{ item.infoNum }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		item: Object
	},
	methods:{
		gotoChart(){
			uni.navigateTo({
				url:'../../pages/user-chart/user-chart'
			})
		}
	}
};
</script>

<style scoped>
.paper-item {
	margin: 0 24upx;
	padding: 20upx 0 30upx;
	display: flex;
	border-bottom: 1upx solid #efefef;
}
.paper-item > image {
	width: 100upx;
	height: 100upx;
	border-radius: 50%;
	margin-right: 20upx;
}
.paper-item-info {
	width: 100%;
}
.paper-name {
	font-size: 32upx;
	color: #000000;
	font-weight: 700;
}
.paper-time {
	font-size: 24upx;
	color: 3cfcfcf;
}

.paper-title {
	display: inline-block;
	font-size: 28upx;
	line-height: 40upx;
	color: #999999;
	width: 440upx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.paper-tip {
	display: inline-block;
	line-height: 40upx;
	color: #ffffff;
	background-color: #ff6434;
	border-radius: 20upx;
	font-size: 24upx;
	padding: 0 14upx;
}
</style>
