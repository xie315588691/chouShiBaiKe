<template>
	<view class="search">
		<view class="search-keyword">
			<view class="search-keyword-title">
				<text>搜索记录</text>
				<text class="iconfont icon-shanchu" @tap="clearKeys"></text>
			</view>
			<view class="search-keys-list">
				<text v-for="(item, index) in keyWordList" :key="index">{{ item }}</text>
			</view>
		</view>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{ height: swiperHeigh + 'px' }">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y="true" class="scroll-v list" @scrolltolower="loadingMore">
						<template v-if="newsList.length">
							<block v-for="(item, index) in newsList" :key="index">
								<!-- items -->
								<IndexList :item="item"></IndexList>
							</block>
							<!-- loading-more -->
							<loadMore :loadText="loadingMoreText"></loadMore>
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
import IndexList from '../../common/index/indexList.vue';
import loadMore from '../../common/common/loadmore.vue';
import nothing from '../../common/common/nothing.vue';
export default {
	components: {
		IndexList,
		loadMore,
		nothing
	},
	data() {
		return {
			keyWord: '',
			swiperHeigh: 500,
			keyWordList: ['你好', '我的', '测试'],
			loadingMoreText: '上拉加载更多',
			newsList: []
		};
	},
	onNavigationBarButtonTap(e) {
		if (e.index == 0) {
			uni.navigateBack({
				delta: 1
			});
		}
	},
	onPullDownRefresh() {
		console.log('下拉刷新');
		setTimeout(() => {
			this.pullDownMore()
		}, 1000);
	},
	//监听原生标题栏搜索输入框输入内容变化事件
	onNavigationBarSearchInputChanged(e) {
		this.keyWord = e.text;
	},
	//监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
	onNavigationBarSearchInputConfirmed(e) {
		if (e.text) {
			this.keyWordList.unshift(e.text);
			this.getSwiperHeigh();
			console.log('搜索', this.keyWord, JSON.stringify(e));
		}
	},
	onLoad() {
		this.getSwiperHeigh();
	},
	methods: {
		getSwiperHeigh() {
			try {
				const resu = uni.getSystemInfoSync();
				const query = uni.createSelectorQuery();
				query.selectAll('.search-keyword').boundingClientRect();
				query.exec(data => {
					let hcount = 0;
					data[0].forEach(item => {
						hcount += item.height;
					});
					this.swiperHeigh = resu.windowHeight - uni.upx2px(hcount * 2);
				});

				this.swiperHeigh = resu.windowHeight - uni.upx2px(100);
			} catch (e) {
				//TODO handle the exception
				console.log('err', JSON.stringify(e));
			}
		},
		loadingMore() {
			let moreIndex = this.loadingMoreText;
			if (moreIndex != '上拉加载更多') {
				return;
			}
			this.loadingMoreText = '加载中......';
			setTimeout(() => {
				let obj = {
					userpic: '../../static/demo/userpic/12.jpg',
					username: '鲁大师1',
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
				};
				this.newsList.push(obj);
				this.loadingMoreText = '上拉加载更多';
			}, 1000);
		},
		clearKeys() {
			this.keyWordList = [];
			this.getSwiperHeigh();
		},
		// 下拉刷新
		pullDownMore() {
			const arr = [
				{
					userpic: '../../static/demo/userpic/12.jpg',
					username: '鲁大师1',
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
				},
				{
					userpic: '../../static/demo/userpic/12.jpg',
					username: '鲁大师1',
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
				},
				{
					userpic: '../../static/demo/userpic/12.jpg',
					username: '鲁大师1',
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
				},
				{
					userpic: '../../static/demo/userpic/12.jpg',
					username: '鲁大师1',
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
				},
				{
					userpic: '../../static/demo/userpic/12.jpg',
					username: '鲁大师1',
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
			];
			this.newsList = arr;
			uni.stopPullDownRefresh();
		}
	}
};
</script>

<style>
.search-keyword {
	padding: 0 20upx;
}
.search-keyword-title {
	font-size: 32upx;
	display: flex;
	justify-content: space-between;
}
.search-keys-list {
	padding-bottom: 20upx;
}
.search-keys-list > text {
	display: inline-block;
	height: 40upx;
	padding: 0 12upx;
	line-height: 40upx;
	border-radius: 20upx;
	font-size: 24upx;
	color: #000000;
	background-color: #c0c0c0;
	margin-right: 20upx;
}
</style>
