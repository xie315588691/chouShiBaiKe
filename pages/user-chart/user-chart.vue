<template>
	<view class="user-chart">
		<!-- 聊天列表 -->
		<scroll-view id="scrollOne" :scroll-top="scrollTop" scroll-with-animation="true" scroll-y="true" :style="{ height: scrollHeight + 'px' }">
			<block v-for="(item, index) in list" :key="index">
				<user-chart-list :item="item" class="user-chart-list"></user-chart-list>
			</block>
		</scroll-view>

		<!-- 下面的提交按钮 -->
		<user-chart-button @submit="submit"></user-chart-button>
	</view>
</template>

<script>
import userChartButton from '../../common/user/user-chart-button.vue';
import userChartList from '../../common/user/user-chart-list.vue';
// import moment from '../../common/moment.min.js';
import time from '../../common/time.js';
export default {
	components: {
		userChartButton,
		userChartList
	},
	data() {
		return {
			scrollTop: 100,
			scrollHeight:500,
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
		this.getHight();
		// const aa = moment(1572624144000).format('YYYY-MM-DD hh:mm:ss');
		// console.log('time', time.gettime.gettime('1572622004'));
	},
	mounted() {
		this.getComponentInfo()
	},
	methods: {
		getTime(tim) {
			return time.gettime.gettime(tim);
		},
		getHight() {
			try {
				const res = uni.getSystemInfoSync();

				this.scrollHeight = res.windowHeight - uni.upx2px(100);
			} catch (e) {
				uni.showToast({
					icon: 'none',
					title: '获取失败'
				});
			}
		},
		//动态到底部
		getComponentInfo(){
			const query = uni.createSelectorQuery();
			query.select('#scrollOne').boundingClientRect();
			query.selectAll('.user-chart-list').boundingClientRect();
			query.exec((data)=>{
				let count =0;
				data[1].forEach(item=>{
					count += item.height
				})
				if(count>this.scrollHeight){
					this.scrollTop = count
				}else{
					this.scrollTop = this.scrollHeight
				}
				
			})
		},
		submit(val) {
			if (!val) {
				uni.showToast({
					title: '回复信息不能为空！'
				});
				return false;
			}
			let obj = {
				isme: true,
				userpic: '../../static/demo/topicpic/13.jpeg',
				type: 'text', //wenben :text img:tupian
				data: val,
				time: new Date().getTime()
			};
			this.list.push(obj);
			this.getComponentInfo()
			val = '';
		}
	}
};
</script>

<style>
.user-chart {
	padding-bottom: 130upx;
}
</style>
