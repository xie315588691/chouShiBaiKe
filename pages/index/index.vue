<template>
	<view class="index">
		<view class="index-items">
			<view class="index-item-one">
				<view>
					<image src="../../static/demo/userpic/12.jpg" mode="widthFix" lazy-load></image>
					鲁大师
				</view>
				<view class="index-item-one-add">
					<view class="iconfont icon-tag27fuben"></view>
					关注
				</view>
			</view>
			<view class="index-item-two">我是标题</view>
			<view class="index-item-three">
				<image src="../../static/demo/datapic/11.jpg" mode="widthFix" lazy-load></image>
			</view>
			<view class="index-item-four">
				<view class="index-item-four-list">
					<view class="">
						<view class="iconfont icon-icon"></view>
						<view>10</view>
					</view>
					<view class="">
						<view class="iconfont icon-kulian1"></view>
						<view>10</view>
					</view>
				</view>
				<view class="index-item-four-list">
					<view class="">
						<view class="iconfont icon-xiaoxi"></view>
						<view>34</view>
					</view>
					<view>
						<view class="iconfont icon-zhuanfa1"></view>
						<view>7</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.index-items {
	padding: 25upx 26upx 40upx;
	border-bottom: 1upx solid #C8C7CC;
}
.index-item-one {
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 90upx;
}
.index-item-one image {
	width: 90upx;
	border-radius: 50%;
	margin-right: 15upx;
}
.index-item-one>view{
	display: flex;
	align-items: center;
	font-size: 26upx;
	color: #999;
}
.index-item-one-add{
	display: inline-block;
	height: 46upx;
	background-color: #f4f4f4;
	padding: 0 15upx;
	font-size: 22upx;
	border-radius: 8upx;
}
.index-item-one-add .iconfont{
	font-size: 18upx;
	margin-right: 8upx;
}

.index-item-two {
	font-size: 36upx;
	color: #000000;
	padding: 20upx 0 36upx;
}
.index-item-three image {
	width: 100%;
	border-radius: 12upx;
}
.index-item-four {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.index-item-four-list {
	display: flex;
	
}
.index-item-four-list>view{
	display: flex;
	align-items: center;
	font-size: 32upx;
	color: #D4D4D4;
	line-height: 32upx;
}
.index-item-four-list .iconfont{
	color: #d4d4d4;
	font-size: 36upx;
	padding: 0 20upx;
}
</style>
