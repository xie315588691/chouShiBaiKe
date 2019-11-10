<template>
	<view>
		<user-space-bg></user-space-bg>
		<view class="user-num">
			<view class="user-space-num">
				<view>
					<view class="user-space-num-t">10K</view>
					<view class="user-space-num-b">获赞</view>
				</view>
				<view>
					<view class="user-space-num-t">11</view>
					<view class="user-space-num-b">关注</view>
				</view>
				<view>
					<view class="user-space-num-t">12</view>
					<view class="user-space-num-b">粉丝</view>
				</view>
			</view>
		</view>
		<new-head @changeTabbarIdx="changeTabbarIdx" :tabBarIndex="tabBarIndex" :tabBars="tabBars"></new-head>
		<view class="uni-tab-bar">
			<swiper :current="tabBarIndex" class="swiper-box" :style="{ height: swiperHeigh + 'px' }" @change="ontabchange">
				<!-- huati -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y="true" class="scroll-v list">
						<view class="user-space-one">
							<view class="user-space-one-title">账号信息</view>
							<view class="user-space-one-p">糗龄：1年8月6日</view>
							<view class="user-space-one-p user-space-one-p-line">糗龄：1年8月6日</view>
							<view class="user-space-one-title">个人信息</view>
							<view class="user-space-one-p">星座：天蝎座</view>
							<view class="user-space-one-p">职业：IT</view>
							<view class="user-space-one-p">故乡：广东广州</view>
							<view class="user-space-one-p user-space-one-p-line">情感状态：已婚</view>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item class="swiper-item">
					<scroll-view scroll-y="true" class="scroll-v list" @scrolltolower="loadMore(0)">
						<block v-for="(item, index) in newsList[0].list" :key="index"><news-list :item="item"></news-list></block>
						

						<load-more :loadText="newsList[0].loadingMore"></load-more>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y="true" class="scroll-v list" @scrolltolower="loadMore(1)">
						<block v-for="(item, index) in newsList[1].list" :key="index"><news-list :item="item"></news-list></block>

						<load-more :loadText="newsList[1].loadingMore"></load-more>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<user-space-menu @changeShow ="changeShow" :sysHight="sysHight" :isShow="isShow"></user-space-menu>
	</view>
</template>

<script>
import userSpaceBg from '../../common/user-space/user-space-bg.vue';
import newHead from '../../common/common/new-head.vue';
import newsList from '../../common/common/newsList.vue';
import userSpaceMenu from '../../common/user-space/user-space-menu.vue';
export default {
	components: {
		userSpaceBg,
		newHead,
		newsList,
		userSpaceMenu
	},
	onNavigationBarButtonTap(e) {
		console.log(e.index)
		if(e.index==0){
			this.isShow = true
		}
	},
	data() {
		return {
			userImg: '../../static/demo/datapic/4.jpg',
			imgIdx: 4,
			isguanzhu: false,
			isShow:false,
			tabBarIndex: 0,
			swiperHeigh: 500,
			sysHight:600,
			loadingMore: '加载更多',
			tabBars: [
				{ name: '主页', id: 'zhuye' },
				{
					name: '糗事',
					id: 'qiushi'
				},
				{
					name: '动态',
					id: 'dongtai'
				}
			],
			newsList: [
				{
					loadingMore: '上拉加载更多',
					list: [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }]
				},
				{
					loadingMore: '上拉加载更多',
					list: [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }]
				}
			],
			
		};
	},
	onLoad() {
		this.getWindowHeigh();
	},
	methods: {
		getWindowHeigh() {
			uni.getSystemInfo({
				success: res => {
					const h = res.windowHeight;
					this.sysHight =h
					this.swiperHeigh = h - uni.upx2px(500 + 110 + 80);
				}
			});
		},
		changeTabbarIdx(index) {
			this.tabBarIndex = index;
		},
		ontabchange(e) {
			let index = e.target.current || e.detail.current;
			this.tabBarIndex = index;
		},
		changeShow(e){
			this.isShow = false
		},
		// loadMore() {
		// 	console.log('加载更多');
		// },
		//加载更多
		loadMore(idx) {
			let moreIndex = this.newsList[idx].loadingMore;
			
			if (moreIndex != '上拉加载更多') {
				return;
			}

			this.newsList[idx].loadingMore = '加载中......';
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

<style>
.user-num {
	height: 113upx;
	width: 100%;
	background-color: #f4f4f4;
}
.user-space-num {
	display: flex;
	height: 113upx;
	background-color: #ffffff;
	border-top-left-radius: 12upx;
	border-top-right-radius: 12upx;
	transform: translateY(-12upx);
}
.user-space-num > view {
	flex: 1;
	padding: 10upx;
}
.user-space-num-t,
.user-space-num-b {
	text-align: center;
	font-size: 28upx;
	font-weight: 700;
}
.user-space-num-b {
	color: #bbbbbb;
}
.user-space-one {
	margin: 30upx;
}
.user-space-one-title {
	height: 80upx;
	line-height: 80upx;
	font-size: 32upx;
}
.user-space-one-p {
	height: 45upx;
	line-height: 45upx;
	font-size: 30upx;
	color: #a3a3a3;
}
.user-space-one-p-line {
	padding-bottom: 28upx;
	border-bottom: 1upx solid #ededed;
}
</style>
