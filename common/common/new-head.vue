<template>
	<view class="news-tabbar-center" :class="{ 'news-head-flex': isFlex }">
		<view :class="{ active: tabBarIndex == index }" :style="tabbarWidth" v-for="(item, index) in tabBars" :key="index" @tap="changeTabIndex(index)">
			<text>{{ item.name }} {{ item.num ? item.num : '' }}</text>
			<view class="uni-tab-line"></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		tabBarIndex: {
			type: Number,
			default: 0
		},
		tabBars: {
			type: Array,
			default: () => {
				return [];
			}
		},
		tabbarWidth: {
			type: String,
			default: 'width:50%;'
		},
		isFlex: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {};
	},
	methods: {
		changeTabIndex(index) {
			this.$emit('changeTabbarIdx', index);
			// this.tabBarIndex = index;
		}
	}
};
</script>

<style>
.news-tabbar-center {
	width: 100%;
	display: flex;
	font-size: 36upx;
	font-weight: 700;
	justify-content: center;
}
.news-tabbar-center > view {
	width: 33%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}
.news-tabbar-center text {
	display: inline-block;
	color: #afafaf;
}

.news-tabbar-center .uni-tab-line {
	height: 10upx;
	width: 60upx;
	border-radius: 5upx;
	margin: 0 auto;
}
.news-tabbar-center .active text {
	color: #000000;
}
.news-tabbar-center .active .uni-tab-line {
	background-color: #fede33;
}
</style>
