<template>
	<view class="index-items animated bounceInLeft">
		<view class="index-item-one">
			<view>
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
				<view>
					<view class="detail-userinfo df df-a-c">
						<view class="newslist-one-name">{{ item.username }}</view>
						<view class="newslist-one-sex" :class="{ active: item.sex == 0 }">
							<text class="iconfont icon-nan" v-show="item.sex == 1"></text>
							<text class="iconfont icon-nv" v-show="item.sex == 0"></text>
							36
						</view>
					</view>
					<view class="detail-date">26天前</view>
				</view>
			</view>
			<view class="index-item-one-add " :class="{ active: isguanZhu }" @tap="changeIsguanZhu">
				<template v-if="!isguanZhu">
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
			<block v-for="(pic,idx) in item.morePic" :key="idx">
				<image :src="pic" mode="widthFix" lazy-load @tap="checkImg(idx)"></image>
			</block>
			
			<template v-if="item.type == 'video'">
				<view class="iconfont icon-bofang"></view>
				<view class="index-video-info">20W 次播放 {{ item.longTime }}</view>
			</template>
		</view>
		<view class="index-item-four">
			<view class="index-item-four-list detail-four-addr">深圳  龙岗</view>
			<view class="index-item-four-list">
				<text class="iconfont icon-zhuanfa1"></text>
				37
				<text class="iconfont icon-xiaoxi"></text>
				51
				<text class="iconfont icon-zan1"></text>
				985
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		item: Object,
		index: Number
	},
	data() {
		return {
			isguanZhu: this.item.isguanZhu,
			InfoNumIndex: this.item.infoNum.index,
			dingNum: this.item.infoNum.dingNum,
			caiNum: this.item.infoNum.caiNum
		};
	},
	methods: {
		changeIsguanZhu() {
			if (!this.isguanZhu) {
				this.isguanZhu = true;
				uni.showToast({
					title: '关注成功'
				});
			} else {
				this.isguanZhu = false;
				uni.showToast({
					title: '取消关注'
				});
			}
		},
		checkImg(idx){
			uni.previewImage({
				current:idx,
				 urls: this.item.morePic,
				 indicator:"default"
			})
			
		}
	}
};
</script>

<style scoped>
.detail-userinfo .newslist-one-sex {
	background-color: #44b3ff;
	height: 30upx;
	padding: 0 10upx;
	font-size: 24upx;
	color: #ffffff;
	line-height: 30upx;
	border-radius: 15upx;
	margin-left: 16upx;
}
.detail-userinfo .newslist-one-sex.active {
	background-color: #fa6c8e;
}
.newslist-one-sex .iconfont {
	font-size: 20upx;
}
.detail-four-addr{
	font-size: 28upx;
	color: #C0C0C0;
}
.index-item-one .detail-date{
	font-size: 24upx;
	color: #CDCDCD;
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
	font-size: 28upx;
	align-items: center;
	color: #C0C0C0;
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
