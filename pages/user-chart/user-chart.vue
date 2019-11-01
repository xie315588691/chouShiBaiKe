<template>
	<view class="user-chart">
		<!-- 聊天列表 -->
		<block v-for="(item, index) in list" :key="index"><user-chart-list :item="item"></user-chart-list></block>

		<!-- 下面的提交按钮 -->
		<user-chart-button @submit="submit"></user-chart-button>
	</view>
</template>

<script>
import userChartButton from '../../common/user/user-chart-button.vue';
import userChartList from '../../common/user/user-chart-list.vue';
import moment from '../../common/moment.min.js';
export default {
	components: {
		userChartButton,
		userChartList
	},
	data() {
		return {
			list: [
				{
					isme: false,
					userpic: '../../static/demo/topicpic/13.jpeg',
					type: 'text', //wenben :text img:tupian
					data: '你好聊天页面你好聊天页面你好天页面',
					time: '1572622004'
				},
				{
					isme: true,
					userpic: '../../static/demo/topicpic/13.jpeg',
					type: 'text', //wenben :text img:tupian
					data: '你好聊天页面你好聊天页面你好天页面',
					time: '1572450241'
				},
				{
					isme: true,
					userpic: '../../static/demo/topicpic/13.jpeg',
					type: 'img', //wenben :text img:tupian
					data: '../../static/demo/topicpic/4.jpeg',
					time: '1571067841'
				},
				{
					isme: false,
					userpic: '../../static/demo/topicpic/13.jpeg',
					type: 'text', //wenben :text img:tupian
					data: '你好聊天页面你好聊天页面你好天页面',
					time: '1572622004'
				}
			]
		};
	},
	onLoad() {
		const aa = moment(1572624144000).format('YYYY-MM-DD hh:mm:ss');
		console.log('time', aa);
	},
	methods: {
		submit(val) {
			console.log(val);
		}
	}
};
</script>

<style>
.user-chart {
	padding-bottom: 130upx;
}
</style>
