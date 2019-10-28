<template>
	<view>
		<view class="topic-bg"><image src="../../static/demo/topicpic/13.jpeg" mode="aspectFill" lazy-load></image></view>
		<view class="topic-info">
			<view class="topic-info-one">
				<image src="../../static/demo/topicpic/13.jpeg" mode="aspectFill" lazy-load></image>
				<view>#忆往事，敬余生#</view>
			</view>
			<view class="topic-info-two">
				动态：793 今日641
			</view>
			<view class="topic-info-three">
				面试官：在电梯里巧遇马云你会做什么？90后女孩的回答当场被录用
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.topic-bg {
	width: 100%;
	height: 300upx;
	position: relative;
	overflow: hidden;
}
.topic-bg > image {
	width: 100%;
	filter: blur(10upx);
}
.topic-info{
	padding: 0 75upx 0 20upx;
}
.topic-info-one {
	display: flex;
	font-size: 42upx;
	height: 100upx;
	font-weight: 700;
}
.topic-info-one image {
	width: 150upx;
	height: 150upx;
	border-radius: 16upx;
	margin-right: 20upx;
	transform: translateY(-75upx);
}
.topic-info-two{
	font-size: 28upx;
	color: #D3D3D3;
}
.topic-info-three{
	font-size: 30upx;
	color: #A7A7A7;
}

</style>
