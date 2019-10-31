<template>
	<view class="user-list">
		<view class="user-list-head"><new-head @changeTabbarIdx="changeTabbarIdx" tabbarWidth="width:33%;" :tabBarIndex="tabBarIndex" :tabBars="tabBars"></new-head></view>
		<view class="user-items">
			<block v-for="(item,index) in userList" :key="index">
				<user-item :item="item"></user-item>
			</block>
		</view>
	</view>
</template>

<script>
import newHead from '../../common/common/new-head.vue';
import userItem from '../../common/user/user-item.vue';
export default {
	components: {
		newHead,
		userItem
	},
	data() {
		return {
			tabBarIndex: 0,
			tabBars: [
				{ name: '互关', id: 'huguan', num: 10 },
				{ name: '互助', id: 'huzhu', num: 10 },
				{
					name: '粉丝',
					id: 'fensi',
					num: 10
				}
			],
			userList: [
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
		};
	},
	onNavigationBarButtonTap(e) {
		if (e.index == 0) {
			uni.navigateBack({
				delta: 1
			});
		}
	},
	methods: {
		changeTabbarIdx(index) {
			this.tabBarIndex = index;
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
