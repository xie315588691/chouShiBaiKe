<template>
	<view class="home">
		<view class="home-title">欢迎登录糗事百科,体验更多功能</view>
		<view class="home-login">
			<image src="../../static/weixin.png" lazy-load />
			<image class="home-login-img" src="../../static/qqhy.png" lazy-load />
			<image src="../../static/weibo.png" lazy-load />
		</view>
		<view class="home-login-text">
			账号密码登录
			<text class="iconfont icon-you"></text>
		</view>
		<view class="home-act">
			<view>
				<view class="home-act-num">0</view>
				<view class="home-act-text">糗事</view>
			</view>
			<view>
				<view class="home-act-num">0</view>
				<view class="home-act-text">动态</view>
			</view>
			<view>
				<view class="home-act-num">0</view>
				<view class="home-act-text">评论</view>
			</view>
			<view>
				<view class="home-act-num">0</view>
				<view class="home-act-text">收藏</view>
			</view>
		</view>
		<view class="home-img">
			<image src="../../static/demo/demo20.jpg" lazy-load mode="widthFix"></image>
		</view>
		<view class="home-setting">
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onNavigationBarButtonTap(e) {
		if (e.index == 0) {
			console.log('更多');
		}
	},
	methods: {}
};
</script>

<style>
.home-title {
	font-size: 32upx;
	text-align: center;
}
.home-login {
	padding-top: 30upx;
	text-align: center;
}

.home-login image {
	width: 110upx;
	height: 110upx;
}
.home-login-img {
	padding: 0 40upx;
}
.home-login-text {
	height: 120upx;
	line-height: 120upx;
	text-align: center;
	font-size: 32upx;
}
.home-login-text text {
	color: #c0c0c0;
}
.home-act {
	display: flex;
}
.home-act >view{
	flex: 1;
	text-align: center;
}
.home-act-num{
	font-size: 36upx;
	color: #000000;
}
.home-act-text{
	font-size: 26upx;
	color: #A5A5A5;
}
.home-img{
	padding: 24upx;
}
.home-img image{
	width: 100%;
	border-radius: 12upx;
}
</style>
