<template>
	<view>
		<view>
			<uni-collapse class="warp" @change="change">
				<block v-for="(sub, key) in list" :key="key">
					<uni-collapse-item :open="sub.open" :show-animation="sub.showAnimation" :title="sub.subName">
						<view class="content">{{ sub.content }}</view>
					</uni-collapse-item>
				</block>
			</uni-collapse>
		</view>
		<button class="layout">意见反馈</button>
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
					subName: '客服什么时候在线?',
					open: false,
					showAnimation: true,
					content: `亲爱的仿糗友，客服的工作时间为:周一-至周六10:00-
12:00, 14:00-19:00,非工作时间的咨询反馈会自动转为留言，客服上班后会第一时间回复哦~
PS.紧急问题可以加官方XXXXXXXXX进行反馈`
				},
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
			console.log(e)
		}
	}
};
</script>

<style>


view {
	font-size: 28upx;
	line-height: inherit;
}

.example-title__after {
	position: relative;
	color: #031e3c;
}

.content {
	padding: 30upx;
	background: #f9f9f9;
	color: #666;
}
</style>
