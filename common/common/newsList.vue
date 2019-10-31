<template>
	<view class="news-list df animated bounceInLeft">
		<view class="news-list-l"><image src="../../static/demo/demo5.jpg" mode="widthFix" lazy-load></image></view>
		<view class="news-list-r">
			<view class="newslist-one df df-j-s-b df-a-c">
				<view class="newslist-one-l df df-a-c active">
					<view class="newslist-one-name">三雨先生</view>
					<view class="newslist-one-sex">
						<text class="iconfont icon-nan"></text>
						36
					</view>
				</view>
				<template v-if="!isguanZhu">
					<view class="newslist-one-r" @tap="changeGuanZhu">
						<text class="iconfont icon-tag27fuben"></text>
						关注
					</view>
				</template>
				<template v-else>
					<view class="newslist-one-r active"  @tap="changeGuanZhu">
						已关注
					</view>
				</template>
				
			</view>
			<view class="newslist-two">六道快手家常菜，好吃又下饭，家人都喜欢</view>
			<template v-if="info">
				<view class="newslist-three">
					<image src="../../static/demo/datapic/9.jpg" mode="widthFix" lazy-load></image>
					<text class="iconfont icon-bofang"></text>
					<view class="pay-time">20W次播放 2:47</view>
				</view>
			</template>
			<template v-else>
				<view class="newslist-three-share df df-a-c">
					<image src="../../static/demo/datapic/35.jpg" mode="widthFix" lazy-load></image>
					<view>从男人的角度告诉你，为什么他对有好感却不追呢</view>
				</view>
			</template>
			<!-- share -->

			<view class="newslist-four df df-j-s-b df-a-c">
				<view>深圳龙岗</view>
				<view>
					<text class="iconfont icon-zhuanfa1"></text>
					37
					<text class="iconfont icon-xiaoxi"></text>
					51
					<text class="iconfont icon-zan1"></text>
					985
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		item:{
			type:Array
		}
	},
	data() {
		return {
			info: true,
			isguanZhu:false
		};
	},
	methods:{
		changeGuanZhu(){
			this.isguanZhu = !this.isguanZhu
			if(!this.isguanZhu){
				uni.showToast({
					title:"关注成功"
				})
			}else{
				uni.showToast({
					title:"取消关注"
				})
			}
		}
	}
};
</script>

<style scoped>
.news-tabbar-center text {
	display: inline-block;
	color: #afafaf;
}
.newslist-three-share {
	width: 100%;
	height: 110upx;
	background-color: #f7f7f7;
	border-radius: 12upx;
	font-size: 28upx;
}
.newslist-three-share image {
	width: 120upx;
	border-radius: 8upx;
	margin-right: 30upx;
}
.news-tabbar-center .uni-tab-line {
	height: 10upx;
	width: 60upx;
	border-radius: 5upx;
}
.news-tabbar-center .active text {
	color: #000000;
}
.news-tabbar-center .active .uni-tab-line {
	background-color: #fede33;
}

.news-list {
	margin-top: 20upx;
	margin-left: 40upx;
}
.news-list-l image {
	width: 90upx;
	border-radius: 50%;
}
.news-list-r {
	width: 584upx;
	margin-left: 10upx;
	border-bottom: 1upx solid #f3f3f3;
	padding-bottom: 30upx;
}

.newslist-one-sex {
	background-color: #44b3ff;
	height: 30upx;
	padding: 0 10upx;
	font-size: 24upx;
	color: #ffffff;
	line-height: 30upx;
	border-radius: 15upx;
	margin-left: 16upx;
}
.newslist-one-sex .iconfont {
	font-size: 20upx;
}
.newslist-one-r {
	background-color: #f5f5f5;
	height: 40upx;
	font-size: 22upx;
	padding: 0 15upx;
	border-radius: 6upx;
}
.newslist-one-l {
	font-size: 22upx;
	color: #bbbbbb;
}
.newslist-one-r .iconfont {
	font-size: 22upx;
}
.newslist-one-r.active{
	background-color: #FEDE32;
	color: #FFFFFF;
}
.newslist-two {
	font-size: 32upx;
}
.newslist-three {
	position: relative;
	line-height: 1;
}
.newslist-three image {
	width: 100%;
	border-radius: 12upx;
}
.newslist-three .iconfont {
	font-size: 140upx;
	line-height: 1;
	color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -70upx;
	margin-top: -70upx;
}
.newslist-four {
	color: #bbbbbb;
}
.newslist-four .iconfont {
	margin-left: 25upx;
	margin-right: 12upx;
}
</style>
