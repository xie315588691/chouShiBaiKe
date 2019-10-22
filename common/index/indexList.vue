<template>
	<view class="index-items">
		<view class="index-item-one">
			<view>
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
				{{ item.username }}
			</view>
			<view class="index-item-one-add " :class="{ active: item.isguanZhu }">
				<template v-if="!item.isguanZhu">
					<view class="iconfont icon-tag27fuben"></view>
					关注
				</template>
				<template v-else>
					已关注
				</template>
			</view>
		</view>
		<view class="index-item-two">{{ item.title }}</view>
		<view class="index-item-three">
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<template v-if="item.type == 'video'">
				<view class="iconfont icon-bofang"></view>
				<view class="index-video-info">20W 次播放 {{ item.longTime }}</view>
			</template>
		</view>
		<view class="index-item-four">
			<view class="index-item-four-list">
				<view :class="{ active: item.infoNum.index == 1 }">
					<view class="iconfont icon-icon "></view>
					<view>{{ item.infoNum.dingNum }}</view>
				</view>
				<view :class="{ active: item.infoNum.index == 2 }">
					<view class="iconfont icon-kulian1"></view>
					<view>{{ item.infoNum.caiNum }}</view>
				</view>
			</view>
			<view class="index-item-four-list">
				<view class="">
					<view class="iconfont icon-xiaoxi"></view>
					<view>{{ item.commentNum }}</view>
				</view>
				<view>
					<view class="iconfont icon-zhuanfa1"></view>
					<view>{{ item.shareNum }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		item: Object,
		index:Number
	}
};
</script>

<style scoped>
.index-items {
	padding: 25upx 26upx 40upx;
	border-bottom: 1upx solid #c8c7cc;
}
.index-item-one {
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 90upx;
}
.index-item-one .active {
	background-color: #feeb62;
	color: #ffffff;
}
.index-item-one image {
	width: 90upx;
	border-radius: 50%;
	margin-right: 15upx;
}
.index-item-one > view {
	display: flex;
	align-items: center;
	font-size: 26upx;
	color: #999;
}
.index-item-one-add {
	display: inline-block;
	height: 46upx;
	background-color: #f4f4f4;
	padding: 0 15upx;
	font-size: 22upx;
	border-radius: 8upx;
}
.index-item-one-add .iconfont {
	font-size: 18upx;
	margin-right: 8upx;
}

.index-item-two {
	font-size: 36upx;
	color: #000000;
	padding: 20upx 0 36upx;
}
.index-item-three {
	position: relative;
	line-height: 1;
}
.index-item-three image {
	width: 100%;
	border-radius: 12upx;
}
.index-item-three .iconfont {
	font-size: 150upx;
	line-height: 1;
	color: #ffffff;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.index-item-three .index-video-info {
	position: absolute;
	width: 208upx;
	height: 48upx;
	background-color: rgba(0, 0, 0, 0.4);
	border-radius: 24upx;
	right: 10upx;
	bottom: 10upx;
	font-size: 22upx;
	text-align: center;
	line-height: 48upx;
	color: #ffffff;
}
.index-item-four {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.index-item-four-list {
	display: flex;
}
.index-item-four-list > view {
	display: flex;
	align-items: center;
	font-size: 32upx;
	color: #d4d4d4;
	line-height: 32upx;
}
.index-item-four-list .iconfont {
	color: #d4d4d4;
	font-size: 36upx;
	padding: 0 20upx;
}
.index-item-four .active,
.index-item-four .active .iconfont {
	color: #feeb62;
}
</style>
