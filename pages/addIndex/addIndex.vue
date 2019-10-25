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
		<!-- 多图上传 -->
		<upload-images @getImageList="getImageList"></upload-images>
		<!-- 中间弹框 -->
		<uni-popup ref="popup" :show="show" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip">
				<image src="../../static/mimo/addinput.png" mode="widthFix"></image>
				<view class="uni-tip-title">1.涉及黄色，政治，广告及骚扰信息</view>
				<view class="uni-tip-title">2.涉及人身攻击</view>
				<view class="uni-tip-title">3.留联系方式，透露他人隐私</view>
				<view class="uni-tip-title">一经核实将被封禁，情节严重者永久封禁</view>
				<button @tap="cancel">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniNavBar from '../../common/uni-nav-bar/uni-nav-bar.vue';
import uploadImages from '../../common/common/uploadImages.vue';
import uniPopup from '../../common/uni-popup/uni-popup.vue';

export default {
	components: {
		uniNavBar,
		uploadImages,
		uniPopup
	},
	data() {
		return {
			addTextObj: ['所有人可见', '仅自己可见'],
			addTextIndex: 0,
			imageList: [],
			text: '',
			type: 'center',
			show: true,
			content: '中间弹出',
			istip: false
		};
	},
	onLoad() {
		this.togglePopup();
	},
	onBackPress() {
		if (this.text || this.imageList.length) {
			if (!this.istip) {
				this.baoCun();
				return true;
			}
		}
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},

		togglePopup() {
			this.$refs['popup'].open();
		},
		baoCun() {
			uni.showModal({
				content: '是否要保存为草稿？',
				confirmText: '保存',
				success: res => {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
					this.istip = true;
					uni.navigateBack({
						delta: 1
					});
				}
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
			this.imageList = val;
			console.log(val);
		},
		change(e) {
			console.log(e.show);
		},
		cancel() {
			this.$refs['popup'].close();
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
}
.uni-textarea textarea {
	width: 96%;
	padding: 18upx 2%;
	line-height: 1.6;
	font-size: 28upx;
	height: 150upx;
}
.uni-tip {
	padding: 15px;
	width: 300px;
	background: #fff;
	box-sizing: border-box;
	border-radius: 10px;
}
.uni-tip image {
	width: 500upx;
}

.uni-tip-title {
	font-size: 28upx;
	text-align: left;
	font-weight: 700;
	color: #333;
}

.uni-tip button {
	background-color: #ffe934;
	margin-top: 16upx;
}
.uni-list::before,
.uni-list::after {
	background-color: #ffffff;
}
</style>
