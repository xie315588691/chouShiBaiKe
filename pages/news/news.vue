<template>
	<view>
		<!-- zidingyi nav bar -->
		<uni-nav-bar :statusBar="true">
			<!-- left-->
			<block slot="left">
				<view class="news-left"><view class="iconfont icon-qiandao"></view></view>
			</block>
			<!-- center -->
			<view class="news-tabbar-center">
				<view :class="{ active: tabBarIndex == index }" v-for="(item, index) in tabBars" :key="index" @tap="changeTabIndex(index)">
					<text>{{ item.name }}</text>
					<view class="uni-tab-line"></view>
				</view>
			</view>
			<!-- right -->
			<block slot="right">
				<view class="news-right" @tap="gotoAdd"><view class="iconfont icon-xie"></view></view>
			</block>
		</uni-nav-bar>
		<!-- news-items -->
		<view class="uni-tab-bar">
			<swiper :current="tabBarIndex" class="swiper-box" :style="{ height: swiperHeigh + 'px' }" @change="ontabchange">
				<!-- guanzhu -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y="true" class="scroll-v list" @scrolltolower="loadMore">
						<block v-for="(item, index) in newsList.list" :key="index"><news-list :item="item"></news-list></block>
						<load-more :loadText="newsList.loadingMore"></load-more>
					</scroll-view>
				</swiper-item>
				<!-- huati -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y="true" class="scroll-v list ">
						<view class="news-topic-search"><input placeholder-class="iconfont icon-sousuo news-topic-search-input" placeholder="搜索内容" /></view>
						<!-- banners -->
						<view class="news-banner">
							<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
								<swiper-item v-for="(item, index) in banners" :key="index"><image :src="item.src" mode="widthFix"></image></swiper-item>
							</swiper>
						</view>
						<!-- hot category -->
						<view class="news-hot-cate">
							<view class="news-hot-cate-t df df-j-s-b df-a-c">
								<view>热门分类</view>
								<view @tap="gotoTopic">
									更多
									<text class="iconfont icon-you"></text>
								</view>
							</view>
							<view class="news-hot-cate-b">
								<view v-for="(item, index) in hotPic" :key="index">{{ item }}</view>
							</view>
						</view>

						<view class="news-update">
							<view class="news-update-title">最近更新</view>
							<block v-for="(item, index) in hotPic" :key="index"><news-update-list></news-update-list></block>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import uniNavBar from '../../common/uni-nav-bar/uni-nav-bar.vue';
import newsList from '../../common/common/newsList.vue';
import loadMore from '../../common/common/loadmore.vue';
import newsUpdateList from '../../common/news/news-update-lists.vue';
export default {
	components: {
		uniNavBar,
		newsList,
		loadMore,
		newsUpdateList
	},
	data() {
		return {
			tabBarIndex: 0,
			swiperHeigh: 500,
			tabBars: [
				{ name: '话题', id: 'hauti' },
				{
					name: '关注',
					id: 'guanzhu'
				}
			],
			banners: [{ src: '../../static/demo/banner1.jpg' }, { src: '../../static/demo/banner2.jpg' }, { src: '../../static/demo/banner1.jpg' }],
			hotPic: ['最新', '游戏', '情感', '最新', '游戏', '情感'],
			newsList: {
				loadingMore: '上拉加载更多',
				list: [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }]
			}
		};
	},

	onLoad() {
		this.getScrollHight();
	},
	methods: {
		getScrollHight() {
			uni.getSystemInfo({
				success: res => {
					this.swiperHeigh = res.windowHeight - uni.upx2px(140);
				}
			});
		},
		//tabbar click
		changeTabIndex(index) {
			this.tabBarIndex = index;
		},
		gotoAdd() {
			uni.navigateTo({
				url: '../addIndex/addIndex'
			});
		},
		ontabchange(e) {
			let index = e.target.current || e.detail.current;
			this.tabBarIndex = index;
		},
		//加载更多
		loadMore() {
			let moreIndex = this.newsList.loadingMore;
			if (moreIndex != '上拉加载更多') {
				return;
			}
			this.newsList.loadingMore = '加载中......';
			setTimeout(() => {
				let obj = {
					shareNum: 20
				};
				this.newsList.list.push(obj);
				this.newsList.loadingMore = '上拉加载更多';
			}, 1000);
		},
		gotoTopic(){
			uni.navigateTo({
				url:'../topic-nav/topic-nav'
			})
		}
	}
};
</script>

<style>
.news-left,
.news-right {
	width: 100%;
}
.news-left > view,
.news-right > view {
	font-size: 50upx;
}
.news-left > view {
	color: #ffb256;
}
.news-tabbar-center {
	width: 100%;
	display: flex;
	font-size: 36upx;
	font-weight: 700;
	justify-content: center;
}
.news-tabbar-center > view {
	margin-left: 40upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.news-tabbar-center text {
	display: inline-block;
	color: #afafaf;
}

.news-tabbar-center .uni-tab-line {
	height: 10upx;
	width: 60upx;
	border-radius: 5upx;
}
.news-tabbar-center .active text {
	color: #000000;
}
.news-tabbar-center .active .uni-tab-line {
	background-color: #fede33;
}
.news-topic-search {
	padding: 20upx;
}
.news-topic-search-input {
	display: flex;
	height: 82upx;
	font-size: 28upx;
	justify-content: center;
	background-color: #f4f4f4;
	border-radius: 12upx;
}
.news-banner {
	padding: 0 20upx 10upx;
}
.news-banner image {
	width: 100%;
	border-radius: 12upx;
}
.news-hot-cate {
	padding: 20upx;
	border-bottom: 1upx solid #f4f4f4;
	border-top: 1upx solid #f4f4f4;
}
.news-hot-cate-b {
	display: flex;
	margin: 10upx 0;
}
.news-hot-cate-b > view {
	display: inline-block;
	height: 56upx;
	font-size: 24upx;
	line-height: 56upx;
	padding: 0 25upx;
	background-color: #f7f7f7;
	color: #a2a2a2;
	border-radius: 8upx;
	margin-right: 20upx;
}
.news-hot-cate-b > view:last-of-type {
	margin-right: 0;
}
.news-update {
	margin: 20upx 20upx 0;
}
</style>
