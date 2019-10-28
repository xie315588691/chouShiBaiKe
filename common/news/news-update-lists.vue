<template>
	<view class="news-update-lists df animated bounceInLeft" @tap="openDetail">
		<image src="../../static/demo/topicpic/14.jpeg" mode="widthFix" lazy-load></image>
		<view>
			<view class="news-update-title">
				#淘宝记录簿#
			</view>
			<view class="news-update-item">
				走出去，才发现你和别人差的不是一点半点
			</view>
			<view class="news-update-item">
				动态577今日588
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			openDetail(){
				uni.navigateTo({
					url:'../../pages/topic-detail/topic-detail'
				})
			}
		}
	}
</script>

<style scoped>
	.news-update-lists{
		padding: 34upx 0;
		border-bottom: 1upx solid #f4f4f4;
	}
	.news-update-lists image{
		width: 180upx;
		border-radius: 16upx;
		margin-right: 30upx;
	}
	.news-update-lists > view{
		width: 100%;
	}
	.news-update-title{
		font-size: 32upx;
		font-weight: 700;
		color: #444444;
	}
	.news-update-item{
		font-size: 28upx;
		color: #9D9D9D;
	}
</style>
