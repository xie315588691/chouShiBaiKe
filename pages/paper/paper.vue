<template>
	<view class="paper">
		<block v-for="(item, idx) in list" :key="idx"><paper-list :item="item"></paper-list></block>
	</view>
</template>

<script>
import paperList from '../../common/paper/paper-list.vue';
export default {
	components: {
		paperList
	},
	data() {
		return {
			list: [
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				},
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				},
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				},
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				},
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				},
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				}
			]
		};
	},
	onPullDownRefresh() {
		this.pullDownFresh();
	},
	methods: {
		pullDownFresh() {
			setTimeout(() => {
				const obj = {
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼1',
					time: '13:40',
					info: '六道快000手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '20'
				};
				this.list.unshift(obj)
				uni.stopPullDownRefresh()
			}, 1000);
		}
	}
};
</script>

<style></style>
