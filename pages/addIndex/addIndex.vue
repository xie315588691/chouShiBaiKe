<template>
	<view>
		<view>
			<uni-nav-bar :statusBar="true" rightText="发布" @click-right="indexSub" left-icon="arrowleft" title="" @click-left="back">
				<view class="add-navbar-center" @tap="toggleIndexText">
					<text>{{ addTextObj[addTextIndex] }}</text>
					<text class="iconfont icon-down2"></text>
				</view>
			</uni-nav-bar>
		</view>
		<view class="uni-textarea"><textarea v-model="text" placeholder="说一句话吧~"></textarea></view>
		<upload-images @getImageList="getImageList"></upload-images>
	</view>
</template>

<script>
import uniNavBar from '../../common/uni-nav-bar/uni-nav-bar.vue';
import uploadImages from '../../common/common/uploadImages.vue';

export default {
	components: {
		uniNavBar,
		uploadImages
	},
	data() {
		return {
			addTextObj: ['所有人可见', '仅自己可见'],
			addTextIndex: 0,
			imageList: [],
			text: ''
		};
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		indexSub() {
			console.log('sss');
		},
		toggleIndexText() {
			uni.showActionSheet({
				itemList: this.addTextObj,
				success: res => {
					this.addTextIndex = res.tapIndex;
				}
			});
		},
		getImageList(val) {
			this.imageList = val
			console.log(val)
		}
	}
};
</script>

<style>
.add-navbar-center {
	width: 100%;
	display: flex;
	justify-content: center;
}
.uni-textarea {
	width: 100%;
	background: #fff;
	border: 1upx solid #eeeeee;
}
.uni-textarea textarea {
	width: 96%;
	padding: 18upx 2%;
	line-height: 1.6;
	font-size: 28upx;
	height: 150upx;
}
</style>
