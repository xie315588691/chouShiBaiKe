<template>
	<view class="user-list">
		<view class="user-list-head">
			<new-head @changeTabbarIdx="changeTabbarIdx" tabbarWidth="width:33%;" :tabBarIndex="tabBarIndex" :tabBars="tabBars"></new-head></view>

		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{ height: swiperHeigh + 'px' }" :current="tabBarIndex" @change="ontabchange">
				<swiper-item class="swiper-item" v-for="(items, idx) in newsList" :key="idx">
					<scroll-view scroll-y="true" class="scroll-v list" @scrolltolower="loadingMore(idx)">
						<template v-if="items.list.length">
							<block v-for="(item, index) in items.list" :key="index">
								<!-- items -->
								<user-item :item="item"></user-item>
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
import newHead from '../../common/common/new-head.vue';
import userItem from '../../common/user/user-item.vue';
import loadMore from '../../common/common/loadmore.vue';
import nothing from '../../common/common/nothing.vue';
export default {
	components: {
		newHead,
		userItem,
		loadMore,
		nothing
	},
	data() {
		return {
			tabBarIndex: 0,
			swiperHeigh: 500,
			tabBars: [
				{ name: '互关', id: 'huguan', num: 10 },
				{ name: '互助', id: 'huzhu', num: 10 },
				{
					name: '粉丝',
					id: 'fensi',
					num: 10
				}
			],
			newsList: [
				{
					loadingMore: '上拉加载更多',
					list: [
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 21,
							iconbtn: 0 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 1, //0:nv 1:nan
							age: 22,
							iconbtn: 1 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 23,
							iconbtn: 1 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 1, //0:nv 1:nan
							age: 29,
							iconbtn: 0 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 29,
							iconbtn: 1 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 29,
							iconbtn: 1 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 29,
							iconbtn: 1 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 29,
							iconbtn: 1 //0:dui 1:jia
						}
					]
				},
				{
					loadingMore: '上拉加载更多',
					list: [
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 21,
							iconbtn: 0 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 1, //0:nv 1:nan
							age: 22,
							iconbtn: 1 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 23,
							iconbtn: 1 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 1, //0:nv 1:nan
							age: 29,
							iconbtn: 0 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 29,
							iconbtn: 1 //0:dui 1:jia
						}
					]
				},
				{
					loadingMore: '上拉加载更多',
					list: [
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 21,
							iconbtn: 0 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 1, //0:nv 1:nan
							age: 22,
							iconbtn: 1 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 23,
							iconbtn: 1 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 1, //0:nv 1:nan
							age: 29,
							iconbtn: 0 //0:dui 1:jia
						},
						{
							userImg: '../../static/demo/demo6.jpg',
							username: '木壳果儿',
							sex: 0, //0:nv 1:nan
							age: 29,
							iconbtn: 1 //0:dui 1:jia
						}
					]
				}
			]
		};
	},
	onNavigationBarButtonTap(e) {
		if (e.index == 0) {
			uni.navigateBack({
				delta: 1
			});
		}
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
		changeTabbarIdx(index) {
			this.tabBarIndex = index;
		},
		ontabchange(e) {
			let index = e.target.current || e.detail.current;
			this.tabBarIndex = index;
			// console.log(index)
			// this.scrollIndex = this.tabBars[index].id
			// console.log(this.scrollIndex)
		},
		loadingMore(idx) {
			let moreIndex = this.newsList[idx].loadingMore;
			if (moreIndex != '上拉加载更多') {
				return;
			}
			this.newsList[idx].loadingMore = '加载中......';
			setTimeout(() => {
				let obj = {
					userImg: '../../static/demo/demo6.jpg',
					username: '木壳果儿',
					sex: 0, //0:nv 1:nan
					age: 29,
					iconbtn: 1 //0:dui 1:jia
				};
				this.newsList[idx].list.push(obj);
				this.newsList[idx].loadingMore = '上拉加载更多';
			}, 1000);
		}
	}
};
</script>

<style>
.user-list-head {
	padding: 10upx 0 20upx;
}
.user-items {
	padding: 0 24upx;
}

.user-item {
	height: 170upx;
	border-bottom: 1upx solid #ececec;
}
.user-item-t image {
	width: 120upx;
	height: 120upx;
	border-radius: 50%;
	margin-right: 30upx;
}
.user-item-title {
	font-size: 34upx;
	font-weight: 700;
	color: #000000;
}
.user-item-sex {
	font-size: 24upx;
	display: inline-block;
	height: 32upx;
	border-radius: 16upx;
	background-color: #ff658a;
	line-height: 32upx;
	padding: 0 12upx;
	color: #ffffff;
}
.user-item-sex.nan {
	background-color: #3aafff;
}
.user-item-sex .iconfont {
	font-size: 24upx;
}
</style>
