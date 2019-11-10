<template>
	<view>
		<view class="about-logo"><image src="../../static/demo/logo.png" mode="widthFix" lazy-load></image></view>
		<view class="about-version">version 1.0.0</view>
		<uni-collapse class="warp" @change="change">
			<block v-for="(sub, key) in list" :key="key">
				<uni-collapse-item :open="sub.open" :show-animation="sub.showAnimation" :title="sub.subName">
					<view class="content">{{ sub.content }}</view>
				</uni-collapse-item>
			</block>
		</uni-collapse>
	</view>
</template>

<script>
import uniCollapse from '@/common/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/common/uni-collapse-item/uni-collapse-item.vue';
export default {
	components: {
		uniCollapse,
		uniCollapseItem
	},
	data() {
		return {
			list: [
				
				{
					subName: '忘记账号/昵称/密码怎么办?',
					open: false,
					showAnimation: true,
					content: '折叠内容主体，可自定义内容及样式'
				},
				{
					subName: '怎么搜索/查找、关注/取关用户?',
					open: false,
					showAnimation: true,
					content: '折叠内容主体，可自定义内容及样式'
				}
			]
		};
	},
	methods: {
		change(e) {
			// console.log(e);
		}
	}
};
</script>

<style>
.about-logo {
	width: 570upx;
	margin: 100upx auto 40upx;
}
.about-logo image {
	width: 570upx;
}
.about-version {
	text-align: center;
	color: #cdcdcd;
	margin-bottom: 60upx;
}
</style>
