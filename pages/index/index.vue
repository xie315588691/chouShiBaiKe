<template>
	<view class="index">
		<view class="tabs">
			<scroll-view class="scroll-h" :scroll-x="true" :show-scrollbar="false">
				<view class="uni-tab-item" v-for="(item, index) in tabBars" :key="index">
					<view class="uni-tab-item-title" :class="{ 'uni-tab-item-title-active': tabIndex == index }" @tap="changeTabIndex(index)">
						<text>{{ item.name }}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{ height: swiperHeigh + 'px' }" :current="tabIndex" @change="ontabchange">
				<swiper-item class="swiper-item" v-for="(items, idx) in newsList" :key="idx">
					<scroll-view scroll-y="true" class="scroll-v list">
						<block v-for="(item, index) in items.list" :key="index"><IndexList :item="item" :index="index"></IndexList></block>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>

		<!-- <block v-for="(item, index) in list" :key="index"><IndexList :item="item" :index="index"></IndexList></block> -->
	</view>
</template>

<script>
import IndexList from '../../common/index/indexList.vue';
export default {
	components: {
		IndexList
	},
	data() {
		return {
			list: [
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
			],
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
					list: [
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
					list: [
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
					list: [
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
					list: [
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
					list: [
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
					list: [
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
					list: [
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
					list: [
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
				}
			]
		};
	},
	onLoad() {
		this.getSysHeight();
	},
	methods: {
		changeTabIndex(index) {
			this.tabIndex = index;
		},
		getSysHeight() {
			uni.getSystemInfo({
				success: res => {
					this.swiperHeigh = res.windowHeight - uni.upx2px(80);
				}
			});
		},
		ontabchange(e) {
		    let index = e.target.current || e.detail.current;
			// console.log(e)
			this.tabIndex = index
		},
	}
};
</script>

<style>
.tabs {
	display: flex;
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	background-color: #ffffff;
	/* #ifdef MP-ALIPAY || MP-BAIDU */
	height: 100vh;
	/* #endif */
}

.scroll-h {
	width: 750upx;
	height: 80upx;
	flex-direction: row;
	white-space: nowrap;
	flex-wrap: nowrap;
}

.line-h {
	height: 1upx;
	background-color: #cccccc;
}

.uni-tab-item {
	display: inline-block;
	flex-wrap: nowrap;
	padding-left: 34upx;
	padding-right: 34upx;
}

.uni-tab-item-title {
	display: inline-block;
	color: #959595;
	font-size: 30upx;
	height: 80upx;
	line-height: 80upx;
	flex-wrap: nowrap;
	white-space: nowrap;
}

.uni-tab-item-title-active {
	color: #343434;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.uni-tab-item-title-active text {
	display: inline-block;
	line-height: 1;
	border-bottom: 8upx solid #fede33;
	border-radius: 4upx;
}
.swiper-box {
	flex: 1;
}

.swiper-item {
	flex: 1;
	flex-direction: row;
}

.scroll-v {
	flex: 1;
	/* #ifndef MP-ALIPAY */
	flex-direction: column;
	/* #endif */
	width: 750upx;
}

.update-tips {
	position: absolute;
	left: 0;
	top: 41px;
	right: 0;
	padding-top: 5px;
	padding-bottom: 5px;
	background-color: #fddd9b;
	align-items: center;
	justify-content: center;
	text-align: center;
}

.update-tips-text {
	font-size: 14px;
	color: #ffffff;
}

.refresh {
	width: 750upx;
	height: 64px;
	justify-content: center;
}

.refresh-view {
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
}

.refresh-icon {
	width: 30px;
	height: 30px;
	transition-duration: 0.5s;
	transition-property: transform;
	transform: rotate(0deg);
	transform-origin: 15px 15px;
}

.refresh-icon-active {
	transform: rotate(180deg);
}

.loading-icon {
	width: 20px;
	height: 20px;
	margin-right: 5px;
	color: #999999;
}

.loading-text {
	margin-left: 2px;
	font-size: 16px;
	color: #999999;
}

.loading-more {
	align-items: center;
	justify-content: center;
	padding-top: 10px;
	padding-bottom: 10px;
	text-align: center;
}

.loading-more-text {
	font-size: 28upx;
	color: #999;
}
.uni-tab-bar {
	display: flex;
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
}

.uni-tab-bar .list {
	width: 750upx;
	height: 100%;
}

.uni-swiper-tab {
	width: 100%;
	white-space: nowrap;
	line-height: 100upx;
	height: 100upx;
	border-bottom: 1px solid #c8c7cc;
}

.swiper-tab-list {
	font-size: 30upx;
	width: 150upx;
	display: inline-block;
	text-align: center;
	color: #555;
}

.uni-tab-bar .active {
	color: #007aff;
}

.uni-tab-bar .swiper-box {
	flex: 1;
	width: 100%;
	height: calc(100% - 100upx);
}

.uni-tab-bar-loading {
	padding: 20upx 0;
}
</style>
