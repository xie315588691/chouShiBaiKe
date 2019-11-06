<template>
	<view class="detail">
		<detail-list :item="item"></detail-list>
		<view class="detail-common-title">最新评论</view>
		<view class="uni-comment">
			<block v-for="(item, index) in commonList" :key="index"><detail-common-list :item="item"></detail-common-list></block>
		</view>
		<view style="height: 120upx;"></view>
		<!-- 提交评论-->
		<user-chart-button @submit="submit"></user-chart-button>
		<more-share :moreShow="moreShow" @clear="clearShare"></more-share>
	</view>
</template>

<script>
import detailList from '../../common/detail/detail-list.vue';
import detailCommonList from '../../common/detail/detail-common-list.vue';
import userChartButton from '../../common/user/user-chart-button.vue';
import moreShare from '../../common/common/more-share.vue';
export default {
	components: {
		detailList,
		userChartButton,
		detailCommonList,
		moreShare
	},
	data() {
		return {
			item: {
				userpic: '../../static/demo/userpic/12.jpg',
				username: '鲁大师',
				isguanZhu: false,
				title: '我是标题',
				type: 'img', //img:图文，video:视频
				morePic: ['../../static/demo/datapic/11.jpg', '../../static/demo/datapic/12.jpg'],
				playNum: 200000,
				longTime: '2:47',
				sex: 0, //0:nv 1:nan
				commentNum: 20,
				shareNum: 20
			},
			commonList: [
				{
					id: 1,
					list: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
				},
				{
					id: 2,
					list: []
				}
			],
			moreShow: false
		};
	},
	onLoad(option) {
		console.log('内容详情', option);
	},
	onNavigationBarButtonTap(e) {
		if (e.index == 0) {
			console.log('分享');
			this.moreShow = true;
		}
	},
	methods: {
		submit(e) {
			console.log('提交评论', e);
		},
		clearShare(e) {
			this.moreShow = e;
		}
	}
};
</script>

<style>
.detail-common-title {
	font-size: 32upx;
	font-weight: 700;
	color: #000000;
	padding: 10upx 20upx;
}
</style>
