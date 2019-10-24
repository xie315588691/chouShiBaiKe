<template>
	<view class="uni-list list-pd">
		<view class="uni-list-cell cell-pd">
			<view class="uni-uploader">
				<view class="uni-uploader-head">
					<view class="uni-uploader-title">点击可预览选好的图片</view>
					<view class="uni-uploader-info">{{ imageList.length }}/9</view>
				</view>
				<view class="uni-uploader-body">
					<view class="uni-uploader__files">
						<block v-for="(image, index) in imageList" :key="index">
							<view class="uni-uploader__file">
								<view class="iconfont icon-shanchu" @tap="removeImg(imageList, index)"></view>
								<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
							</view>
						</block>
						<view class="uni-uploader__input-box"><view class="uni-uploader__input" @tap="chooseImage"></view></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var sourceType = [['camera'], ['album'], ['camera', 'album']];
	var sizeType = [['compressed'], ['original'], ['compressed', 'original']];
	export default{
		data(){
			return{
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			}
		},
		methods:{
			chooseImage: async function() {
				if (this.imageList.length === 9) {
					return;
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: res => {
						//上传成功
						this.imageList = this.imageList.concat(res.tempFilePaths);
						this.$emit('getImageList', this.imageList)
						
					},
					fail: err => {
						// #ifdef APP-PLUS
						if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
							this.checkPermission(err.code);
						}
						// #endif
						// #ifdef MP
						uni.getSetting({
							success: res => {
								let authStatus = false;
								switch (this.sourceTypeIndex) {
									case 0:
										authStatus = res.authSetting['scope.camera'];
										break;
									case 1:
										authStatus = res.authSetting['scope.album'];
										break;
									case 2:
										authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
										break;
									default:
										break;
								}
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: '需要从您的相机或相册获取图片，请在设置界面打开相关权限',
										success: res => {
											if (res.confirm) {
												uni.openSetting();
											}
										}
									});
								}
							}
						});
						// #endif
					}
				});
			},
			//预览
			previewImage: function(e) {
				var current = e.target.dataset.src;
				uni.previewImage({
					current: current,
					urls: this.imageList
				});
			},
			//remove
			removeImg(imageList, index) {
				// console.log('删除')
				uni.showModal({
					title: '提示',
					content: '您要删除图片吗？',
					success: res => {
						if (res.confirm) {
							this.imageList.splice(index, 1);
							this.$emit('getImageList', this.imageList)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			async checkPermission(code) {
				let type = code ? code - 1 : this.sourceTypeIndex;
				let status = permision.isIOS
					? await permision.requestIOS(sourceType[type][0])
					: await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' : 'android.permission.READ_EXTERNAL_STORAGE');
			
				if (status === null || status === 1) {
					status = 1;
				} else {
					uni.showModal({
						content: '没有开启权限',
						confirmText: '设置',
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					});
				}
			
				return status;
			}
				
		}
	}
</script>

<style>
	.cell-pd {
		padding: 22upx 30upx;
	}
	
	.list-pd {
		margin-top: 50upx;
	}
	.uni-uploader__file {
		position: relative;
	}
	.uni-uploader__file .icon-shanchu {
		color: #ffffff;
		background-color: #000000;
		line-height: 1.2;
		padding: 0 6upx;
		border-radius: 8upx;
		position: absolute;
		top: 10upx;
		right: 10upx;
		z-index: 9;
	}
</style>
