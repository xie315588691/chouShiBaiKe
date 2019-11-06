<template>
	<view class="uni-comment-list">
		<view class="uni-comment-face"><image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image></view>
		<view class="uni-comment-body">
			<view class="uni-comment-top"><text>网友</text></view>
			<view class="uni-comment-date"><text>08/10 08:12</text></view>
			<view class="uni-comment-content">很酷的HBuilderX和uni-app，开发一次既能生成小程序，又能生成App</view>
			<view class="uni-comment-date">
				<view>2天前</view>
				<view class="uni-comment-replay-btn">5回复</view>
			</view>
			<!-- 个人评论 -->
			<view class="detail-common-other" v-if="item.list && item.list.length > 0">
				<block v-for="(itm, idx) in item.list" :key="idx">
					<view class="uni-comment-list ">
						<view class="uni-comment-face"><image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image></view>
						<view class="uni-comment-body">
							<view class="uni-comment-top"><text>马克一天</text></view>
							<view class="uni-comment-content">很酷的HBuilderX和uni-app，开发一次既能生成小程序，又能生成App很强大，厉害了我的uni-app!</view>
						</view>
					</view>
				</block>
			</view>
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
	}
};
</script>

<style>
.detail-common-other {
	border-radius: 8upx;
	background-color: #f4f4f4;
	padding: 20upx;
}
</style>
