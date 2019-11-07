<template>
	<view class="home">
		<template v-if="!islogin">
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
		</template>
		<template v-else>
			<view class="home-islogin">
				<view class="home-islogin-l">
					<image src="../../static/demo/topicpic/9.jpeg" mode="widthFix" lazy-load></image>
					<view class="home-islogin-info">
						<view class="home-islogin-info-name">初棉</view>
						<view class="home-islogin-info-num">总访客：0 今日：0</view>
					</view>
				</view>
				<view class="iconfont icon-you"></view>
			</view>
		</template>
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
		<view class="home-img"><image src="../../static/demo/demo20.jpg" lazy-load mode="widthFix"></image></view>
		<view class="home-setting">
			<view class="home-setting-item">
				<view>
					<text class="iconfont icon-yanjing1"></text>
					浏览历史
				</view>
				<text class="iconfont icon-you"></text>
			</view>
			<view class="home-setting-item">
				<view>
					<text class="iconfont icon-renzheng1"></text>
					糗百认证
				</view>
				<text class="iconfont icon-you"></text>
			</view>
			<view class="home-setting-item">
				<view>
					<text class="iconfont icon-jianpan"></text>
					审核糗事
				</view>
				<text class="iconfont icon-you"></text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			islogin: true,
			homeList:[
				{
					text:'',
					menu:'浏览历史'
				}
			]
		};
	},
	onNavigationBarButtonTap(e) {
		if (e.index == 0) {
			uni.navigateTo({
				url:'../setting/setting'
			})
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
.home-act > view {
	flex: 1;
	text-align: center;
}
.home-act-num {
	font-size: 36upx;
	color: #000000;
}
.home-act-text {
	font-size: 26upx;
	color: #a5a5a5;
}
.home-img {
	padding: 24upx;
}
.home-img image {
	width: 100%;
	border-radius: 12upx;
}
.home-setting {
	margin: 0 25upx;
	border-top: 1upx solid #f2f2f2;
}
.home-setting-item {
	height: 110upx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	padding: 0 30upx;
	border-bottom: 1upx solid #f2f2f2;
	justify-content: space-between;
}
.home-setting-item view .iconfont {
	margin-right: 15upx;
}
.home-setting-item .icon-yanjing1 {
	color: #3aaeff;
}
.home-setting-item .icon-jianpan {
	color: #3aaeff;
}
.home-setting-item .icon-renzheng1 {
	color: #ff7434;
}
.home-setting-item .icon-you {
	color: #c1c1c1;
}
.home-islogin {
	display: flex;
	height: 120upx;
	padding: 20upx 30upx;
	justify-content: space-between;
	align-items: center;
}
.home-islogin image{
	width: 110upx;
	height: 110upx;
	border-radius: 50%;
	margin-right: 20upx;
}
.home-islogin-l{
	display: flex;
}
.home-islogin-info-name{
	font-size: 32upx;
	font-weight: 700;
}
.home-islogin-info-num{
	font-size: 24upx;
	color: #8D8D8D;
}
</style>

