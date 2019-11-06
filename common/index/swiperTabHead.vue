<template>
	<view class="tabs">
		<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
			<view class="uni-tab-item" v-for="(item, index) in tabBars" :id="item.id" :key="index">
				<view class="uni-tab-item-title" :class="{ 'uni-tab-item-title-active': tabIndex == index }" @tap="changeTabIndex(index)">
					<text>{{ item.name }}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		tabBars: Array,
		tabIndex: Number,
		scrollIndex: String
	},
	data() {
		return {
			scrollInto: this.scrollIndex
		};
	},
	methods: {
		changeTabIndex(index) {
			this.$emit('changeIndex', index);
		}
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
</style>
