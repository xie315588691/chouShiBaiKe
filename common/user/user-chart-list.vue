<template>
	<view>
		<view class="user-chart-time df df-j-c">{{ item.time }}</view>
		<view class="user-chart-left " :class="{ 'user-chart-me': item.isme }">
			<image :src="item.userpic" mode="widthFix" lazy-load v-if="!item.isme"></image>
			<view>
				<image :src="item.data" mode="widthFix" lazy-load v-if="item.type == 'img'"></image>
				<text v-if="item.type == 'text'">sss {{ item.data }}</text>
			</view>
			<image :src="item.userpic" mode="widthFix" lazy-load v-if="item.isme"></image>
		</view>
	</view>
</template>

<script>

export default {
	props: {
		item: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	onLoad() {
		// const aa = moment().format('YYYY-MM-DD hh:mm:ss');
		console.log('time');
	}
};
</script>

<style scoped>
.user-chart-time {
	display: flex;
	justify-content: center;
	padding: 30upx 0;
	color: #a2a2a2;
	font-size: 24upx;
}
.user-chart-left {
	padding: 0 100upx 0 30upx;
	display: flex;
	margin-top: 40upx;
}
.user-chart-left > image {
	width: 100upx;
	height: 100upx;
	border-radius: 50%;
	margin-right: 50upx;
	flex-shrink: 0;
}
.user-chart-left view {
	font-size: 32upx;
	padding: 30upx;
	background-color: #f4f4f4;
	border-radius: 20upx;
	position: relative;
}
.user-chart-left view::before {
	content: '';
	display: block;
	width: 30upx;
	height: 30upx;
	background-color: #f4f4f4;
	transform: rotate(45deg);
	position: absolute;
	top: 36upx;
	left: -16upx;
}
.user-chart-left view image {
	max-width: 180upx;
	max-height: 180upx;
}
.user-chart-left.user-chart-me {
	padding: 0 30upx 0 100upx;
	display: flex;
	justify-content: flex-end;
}
.user-chart-left.user-chart-me image {
	margin-right: 0;
	margin-left: 50upx;
}
.user-chart-left.user-chart-me view::before {
	content: '';
	display: none;
}
.user-chart-left.user-chart-me view::after {
	content: '';
	display: block;
	width: 30upx;
	height: 30upx;
	background-color: #f4f4f4;
	transform: rotate(-45deg);
	position: absolute;
	top: 36upx;
	right: -16upx;
}
</style>
