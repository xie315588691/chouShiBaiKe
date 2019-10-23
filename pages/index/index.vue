<template>
	<view class="index">
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @changeIndex="changeIndex"></swiperTabHead>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{ height: swiperHeigh + 'px' }" :current="tabIndex" @change="ontabchange">
				<swiper-item class="swiper-item" v-for="(items, idx) in newsList" :key="idx">
					<scroll-view scroll-y="true" class="scroll-v list" @scrolltolower="loadingMore(idx)">
						<template v-if="items.list.length">
							<block v-for="(item, index) in items.list" :key="index">
								<!-- 列表 -->
								<view class="index-items animated bounceInLeft">
									<view class="index-item-one">
										<view>
											<image :src="item.userpic" mode="widthFix" lazy-load></image>
											{{ item.username }}
										</view>
										<view class="index-item-one-add " :class="{ active: item.isguanZhu }" 
										@tap="changeIsguanZhu(item)">
											<template v-if="!item.isguanZhu">
												<view class="iconfont icon-tag27fuben"></view>
												关注
											</template>
											<template v-else>
												已关注
											</template>
										</view>
									</view>
									<view class="index-item-two">{{ item.title }}</view>
									<view class="index-item-three">
										<image :src="item.titlepic" mode="widthFix" lazy-load></image>
										<template v-if="item.type == 'video'">
											<view class="iconfont icon-bofang"></view>
											<view class="index-video-info">20W 次播放 {{ item.longTime }}</view>
										</template>
									</view>
									<view class="index-item-four">
										<view class="index-item-four-list">
											<view :class="{ active: item.infoNum.index == 1 }" @tap="dingCai(1, item)">
												<view class="iconfont icon-icon "></view>
												<view>{{ item.infoNum.dingNum }}</view>
											</view>
											<view :class="{ active: item.infoNum.index == 2 }" @tap="dingCai(2, item)">
												<view class="iconfont icon-kulian1"></view>
												<view>{{ item.infoNum.caiNum }}</view>
											</view>
										</view>
										<view class="index-item-four-list">
											<view class="">
												<view class="iconfont icon-xiaoxi"></view>
												<view>{{ item.commentNum }}</view>
											</view>
											<view>
												<view class="iconfont icon-zhuanfa1"></view>
												<view>{{ item.shareNum }}</view>
											</view>
										</view>
									</view>
								</view>
							</block>
							<loadMore :loadText="items.loadingMore"></loadMore>
						</template>
						<template v-else>
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
import swiperTabHead from '../../common/index/swiperTabHead.vue';
import loadMore from '../../common/common/loadmore.vue';
import nothing from '../../common/common/nothing.vue';
export default {
	components: {
		IndexList,
		swiperTabHead,
		loadMore,
		nothing
	},
	data() {
		return {
			swiperHeigh: 500,
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
					loadingMore: '上拉加载更多',
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
					loadingMore: '上拉加载更多',
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
		this.getSysHeight();
	},
	methods: {
		getSysHeight() {
			uni.getSystemInfo({
				success: res => {
					this.swiperHeigh = res.windowHeight - uni.upx2px(80);
				}
			});
		},
		ontabchange(e) {
			let index = e.target.current || e.detail.current;
			this.tabIndex = index;
		},
		changeIndex(val) {
			this.tabIndex = val;
		},
		changeObj(obj) {
			console.log(obj);
			// this.newsList[item.index][item][isguanZhu] = true;
		},
		//关注
		changeIsguanZhu(item) {
			if (!item.isguanZhu) {
				item.isguanZhu = true;
				uni.showToast({
					title: '关注成功'
				});
			} else {
				item.isguanZhu = false;
				uni.showToast({
					title: '取消关注'
				});
			}
		},
		//@tap="dingCai(2,item)"
		dingCai(num, item) {
			if (num == 1) {
				if (item.infoNum.index == 1) {
					uni.showToast({
						title: '您已经操作过了'
					});
					return false;
				}
				if (item.infoNum.index != 0) {
					item.infoNum.caiNum--;
				}
				item.infoNum.dingNum++;
				item.infoNum.index = num;
				uni.showToast({
					title: '顶'
				});
			} else if (num == 2) {
				if (item.infoNum.index == 2) {
					uni.showToast({
						title: '您已经操作过了'
					});
					return false;
				}
				if (item.infoNum.index != 0) {
					item.infoNum.dingNum--;
				}
				item.infoNum.caiNum++;
				item.infoNum.index = num;
				uni.showToast({
					title: '踩'
				});
			}
		},
		loadingMore(idx) {
			let moreIndex = this.newsList[idx].loadingMore;
			if (moreIndex != '上拉加载更多') {
				return;
			}
			this.newsList[idx].loadingMore = '加载中......';
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
				this.newsList[idx].list.push(obj);
				this.newsList[idx].loadingMore = '上拉加载更多';
			}, 1000);
		}
	}
};
</script>

<style>
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
.index-loading-more {
	text-align: center;
	color: #c0c0c0;
	font-size: 28upx;
	padding: 10upx 0;
}
.index-items {
	padding: 25upx 26upx 40upx;
	border-bottom: 1upx solid #f8f8f8;
}
.index-item-one {
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 90upx;
}
.index-item-one .active {
	background-color: #feeb62;
	color: #ffffff;
}
.index-item-one image {
	width: 90upx;
	border-radius: 50%;
	margin-right: 15upx;
}
.index-item-one > view {
	display: flex;
	align-items: center;
	font-size: 26upx;
	color: #999;
}
.index-item-one-add {
	display: inline-block;
	height: 46upx;
	background-color: #f4f4f4;
	padding: 0 15upx;
	font-size: 22upx;
	border-radius: 8upx;
}
.index-item-one-add .iconfont {
	font-size: 18upx;
	margin-right: 8upx;
}

.index-item-two {
	font-size: 36upx;
	color: #000000;
	padding: 20upx 0 36upx;
}
.index-item-three {
	position: relative;
	line-height: 1;
}
.index-item-three image {
	width: 100%;
	border-radius: 12upx;
}
.index-item-three .iconfont {
	font-size: 150upx;
	line-height: 1;
	color: #ffffff;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.index-item-three .index-video-info {
	position: absolute;
	width: 208upx;
	height: 48upx;
	background-color: rgba(0, 0, 0, 0.4);
	border-radius: 24upx;
	right: 10upx;
	bottom: 10upx;
	font-size: 22upx;
	text-align: center;
	line-height: 48upx;
	color: #ffffff;
}
.index-item-four {
	margin-top: 10upx;
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.index-item-four-list {
	display: flex;
}
.index-item-four-list > view {
	display: flex;
	align-items: center;
	font-size: 32upx;
	color: #d4d4d4;
	line-height: 32upx;
}
.index-item-four-list .iconfont {
	color: #d4d4d4;
	font-size: 36upx;
	padding: 0 20upx;
}
.index-item-four .active,
.index-item-four .active .iconfont {
	color: #feeb62;
}

</style>
