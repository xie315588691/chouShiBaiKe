<template>
	<view>
		<topic-info ref="topicInfo"></topic-info>
		<new-head @changeTabbarIdx="changeTabbarIdx" :tabBarIndex="tabBarIndex" :tabBars="tabBars"></new-head>

		<view class="uni-tab-bar">
			<swiper :current="tabBarIndex" class="swiper-box" :style="{ height: swiperHeigh + 'px' }" @change="ontabchange">
				<!-- huati -->
				<swiper-item class="swiper-item" v-for="(item, idx) in newsList" :key="idx">
					<scroll-view scroll-y="true" class="scroll-v list" @scrolltolower="loadMore(idx)">
						<block v-for="(val, index) in item.list" :key="index"><news-list :item="val"></news-list></block>
						<load-more :loadText="item.loadingMore"></load-more>
					</scroll-view>
				</swiper-item>
				<!-- guanzhu -->
			</swiper>
		</view>
	</view>
</template>

<script>
import topicInfo from '../../common/news/topic-info.vue';
import newHead from '../../common/common/new-head.vue';
import newsList from '../../common/common/newsList.vue';
import loadMore from '../../common/common/loadmore.vue';
export default {
	components: {
		topicInfo,
		newHead,
		newsList,
		loadMore
	},
	data() {
		return {
			tabBars: [
				{ name: '话题', id: 'hauti' },
				{
					name: '关注',
					id: 'guanzhu'
				}
			],
			tabBarIndex: 0,
			swiperHeigh: 420,
			newsList: [
				{
					loadingMore: '上拉加载更多',
					list: [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }]
				},
				{
					loadingMore: '上拉加载更多',
					list: [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }]
				}
			]
		};
	},
	onLoad() {},
	//下拉刷新
	onPullDownRefresh() {
		console.log('refresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		changeTabbarIdx(index) {
			this.tabBarIndex = index;
		},
		ontabchange(e) {
			let index = e.target.current || e.detail.current;
			this.tabBarIndex = index;
		},
		//加载更多
		loadMore(idx) {
			let moreIndex = this.newsList[idx].loadingMore;
			if (moreIndex != '上拉加载更多') {
				return;
			}
			this.newsList.loadingMore = '加载中......';
			setTimeout(() => {
				let obj = {
					shareNum: 20
				};
				this.newsList[idx].list.push(obj);
				this.newsList[idx].loadingMore = '上拉加载更多';
			}, 1000);
		}
	}
};
</script>

<style></style>
