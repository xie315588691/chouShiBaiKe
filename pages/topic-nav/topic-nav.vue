<template>
	<view class="topic-nav">
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @changeIndex="changeIndex"></swiperTabHead>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{ height: swiperHeigh + 'px' }" :current="tabIndex" @change="ontabchange">
				<swiper-item class="swiper-item" v-for="(items, idx) in newsList" :key="idx">
					<scroll-view scroll-y="true" class="scroll-v list" @scrolltolower="loadingMore(idx)">
						<template v-if="items.list.length">
							<block v-for="(item, index) in items.list" :key="index">
								<!-- items -->
								<news-update-list></news-update-list>
							</block>
							<!-- loading-more -->
							<loadMore :loadText="items.loadingMore"></loadMore>
						</template>
						<template v-else>
							<!-- nothing -->
							<nothing></nothing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import swiperTabHead from '../../common/index/swiperTabHead.vue';
import loadMore from '../../common/common/loadmore.vue';
import nothing from '../../common/common/nothing.vue';
import newsUpdateList from '../../common/news/news-update-lists.vue';
export default {
	components: {
		swiperTabHead,
		newsUpdateList,
		loadMore,
		nothing
	},
	data() {
		return {
			tabBars: [
				{
					name: '关注',
					id: 'guanzhu'
				},
				{
					name: '推荐',
					id: 'tuijian'
				},
				{
					name: '体育',
					id: 'tiyu'
				},
				{
					name: '热点',
					id: 'redian'
				},
				{
					name: '财经',
					id: 'caijing'
				},
				{
					name: '娱乐',
					id: 'yule'
				},
				{
					name: '本地',
					id: 'bendi'
				}
			],
			tabIndex: 1,
			swiperHeigh: 500,
			newsList: [
				{
					loadingMore: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '鲁大师',
							isguanZhu: false,
							title: '我是标题',
							type: 'video', //img:图文，video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							playNum: 200000,
							longTime: '2:47',
							infoNum: {
								dingNum: 11,
								caiNum: 11,
								index: 0 //0:代表没有操作1：顶2：踩
							},
							commentNum: 20,
							shareNum: 20
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '鲁大师',
							isguanZhu: true,
							title: '我是标题',
							type: 'img', //img:图文，video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							playNum: 200000,
							longTime: '2:47',
							infoNum: {
								dingNum: 11,
								caiNum: 11,
								index: 2 //0:代表没有操作1：顶2：踩
							},
							commentNum: 20,
							shareNum: 20
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '鲁大师',
							isguanZhu: false,
							title: '我是标题',
							type: 'img', //img:图文，video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							playNum: 200000,
							longTime: '2:47',
							infoNum: {
								dingNum: 11,
								caiNum: 11,
								index: 1 //0:代表没有操作1：顶2：踩
							},
							commentNum: 20,
							shareNum: 20
						}
					]
				},
				{
					loadingMore: '上拉加载更多',
					list: [
						{
							id: 1
						},
						{
							id: 2
						},
						{
							id: 3
						},
						{
							id: 4
						},
						{
							id: 5
						},
						{
							id: 6
						},
						{
							id: 7
						}
					]
				},
				{
					loadingMore: '上拉加载更多',
					list: [
						{
							id: 1
						},
						{
							id: 2
						},
						{
							id: 3
						},
						{
							id: 4
						},
						{
							id: 5
						},
						{
							id: 6
						},
						{
							id: 7
						}
					]
				},
				{
					loadingMore: '上拉加载更多',
					list: [
						{
							id: 1
						},
						{
							id: 2
						},
						{
							id: 3
						},
						{
							id: 4
						},
						{
							id: 5
						},
						{
							id: 6
						},
						{
							id: 7
						}
					]
				},
				{
					loadingMore: '上拉加载更多',
					list: []
				},
				{
					loadingMore: '上拉加载更多',
					list: []
				},
				{
					loadingMore: '上拉加载更多',
					list: []
				}
			]
		};
	},
	onLoad() {
		this.getWinHeight()
	},
	methods: {
		getWinHeight() {
			uni.getSystemInfo({
				success: res => {
					console.log(res.windowHeight);
					this.swiperHeigh = res.windowHeight - uni.upx2px(80);
				}
			});
		},
		changeIndex(val) {
			this.tabIndex = val;
		},
		ontabchange(e) {
			let index = e.target.current || e.detail.current;
			this.tabIndex = index;
		},
		loadingMore(idx) {
			let moreIndex = this.newsList[idx].loadingMore;
			if (moreIndex != '上拉加载更多') {
				return;
			}
			this.newsList[idx].loadingMore = '加载中......';
			setTimeout(() => {
				let obj = {
					id: 6
				};
				this.newsList[idx].list.push(obj);
				this.newsList[idx].loadingMore = '上拉加载更多';
			}, 1000);
		}
	}
};
</script>

<style scoped>
	.topic-nav{
		margin: 0 20upx;
	}
</style>
