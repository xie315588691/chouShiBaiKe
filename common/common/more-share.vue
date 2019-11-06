<template>
	<view>
		<!-- 分享 -->
		<view class="more-share-model" v-show="moreShow"></view>
		<view class="more-share" v-show="moreShow">
			<view class="more-share-title">分享到</view>
			<view class="more-share-contain tab">
				<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false">
					<view class="uni-tab-item">
						<block v-for="(item, index) in providerList" :key="index">
							<view class="uni-tab-item-title" hover-class="uni-tab-item-hover" @tap="share(item)">
								<image :src="item.src" lazy-load></image>
								<view>{{ item.name }}</view>
							</view>
						</block>

					</view>
				</scroll-view>
			</view>

			<view class="more-share-btn" hover-class="uni-tab-item-hover" @tap="clearMoreShare">取消</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		moreShow: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			shareText: '我是谢小新',
			href: 'https://uniapp.dcloud.io',
			image: '',
			shareType: 1, //1:文字 2:图片 0:图文 5:小程序
			providerList: [
				{ name: '微信好友', id: 'weixin', src: '../../static/weixin.png', sort: 0 },
				{
					name: '朋友圈',
					id: 'weixin',
					type: 'WXSenceTimeline',
					src: '../../static/pyq.png',
					sort: 1
				},{
					name: '新浪微博',
					id: 'sinaweibo',
					src: '../../static/weibo.png',
					sort: 2
				},{
					name: 'QQ好友',
					id: 'qq',
					src: '../../static/qqhy.png',
					sort: 3
				}
			]
		};
	},
	onLoad() {
		uni.getProvider({
			service: 'share',
			success: e => {
				console.log('success', e);
				let data = [];
				for (let i = 0; i < e.provider.length; i++) {
					switch (e.provider[i]) {
						case 'weixin':
							data.push({
								name: '微信好友',
								id: 'weixin',
								src: '../../static/weixin.png',
								sort: 0
							});
							data.push({
								name: '朋友圈',
								id: 'weixin',
								type: 'WXSenceTimeline',
								src: '../../static/pyq.png',
								sort: 1
							});
							break;
						case 'sinaweibo':
							data.push({
								name: '新浪微博',
								id: 'sinaweibo',
								src: '../../static/weibo.png',
								sort: 2
							});
							break;
						case 'qq':
							data.push({
								name: 'QQ好友',
								id: 'qq',
								src: '../../static/qqhy.png',
								sort: 3
							});
							break;
						default:
							break;
					}
				}
				this.providerList = data.sort((x, y) => {
					return x.sort - y.sort;
				});
			},
			fail: e => {
				console.log('获取分享通道失败', e);
				uni.showModal({
					content: '获取分享通道失败',
					showCancel: false
				});
			}
		});
	},
	methods: {
		clearMoreShare() {
			this.$emit('clear', false);
		},
		async share(e) {
			console.log('分享通道:' + e.id + '； 分享类型:' + this.shareType);

			if (!this.shareText && (this.shareType === 1 || this.shareType === 0)) {
				uni.showModal({
					content: '分享内容不能为空',
					showCancel: false
				});
				return;
			}

			if (!this.image && (this.shareType === 2 || this.shareType === 0)) {
				uni.showModal({
					content: '分享图片不能为空',
					showCancel: false
				});
				return;
			}

			let shareOPtions = {
				provider: e.id,
				scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏
				type: this.shareType,
				success: e => {
					console.log('success', e);
					uni.showModal({
						content: '分享成功',
						showCancel: false
					});
				},
				fail: e => {
					console.log('fail', e);
					uni.showModal({
						content: e.errMsg,
						showCancel: false
					});
				},
				complete: function() {
					console.log('分享操作结束!');
				}
			};

			switch (this.shareType) {
				case 0:
					shareOPtions.summary = this.shareText;
					shareOPtions.imageUrl = this.image;
					shareOPtions.title = '欢迎体验uniapp';
					shareOPtions.href = 'https://uniapp.dcloud.io';
					break;
				case 1:
					shareOPtions.summary = this.shareText;
					break;
				case 2:
					shareOPtions.imageUrl = this.image;
					break;
				case 5:
					shareOPtions.imageUrl = this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png';
					shareOPtions.title = '欢迎体验uniapp';
					shareOPtions.miniProgram = {
						id: 'gh_33446d7f7a26',
						path: '/pages/tabBar/component/component',
						webUrl: 'https://uniapp.dcloud.io',
						type: 0
					};
					break;
				default:
					break;
			}

			if (shareOPtions.type === 0 && plus.os.name === 'iOS') {
				//如果是图文分享，且是ios平台，则压缩图片
				shareOPtions.imageUrl = await this.compress();
			}
			if (shareOPtions.type === 1 && shareOPtions.provider === 'qq') {
				//如果是分享文字到qq，则必须加上href和title
				shareOPtions.href = 'https://uniapp.dcloud.io';
				shareOPtions.title = '欢迎体验uniapp';
			}
			uni.share(shareOPtions);
		},
		radioChange(e) {
			console.log('type:' + e.detail.value);
			this.shareType = parseInt(e.detail.value);
		},
		chooseImage() {
			uni.chooseImage({
				count: 1,
				sourceType: ['album', 'camera'],
				sizeType: ['compressed', 'original'],
				success: res => {
					this.image = res.tempFilePaths[0];
				},
				fail: err => {
					// #ifdef MP
					uni.getSetting({
						success: res => {
							let authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
							if (!authStatus) {
								uni.showModal({
									title: '授权失败',
									content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
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
		compress() {
			//压缩图片 图文分享要求分享图片大小不能超过20Kb
			console.log('开始压缩');
			let img = this.image;
			return new Promise(res => {
				var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
				console.log('after' + localPath);
				// 压缩size
				plus.io.resolveLocalFileSystemURL(
					localPath,
					entry => {
						entry.file(file => {
							// 可通过entry对象操作图片
							console.log('getFile:' + JSON.stringify(file));
							if (file.size > 20480) {
								// 压缩后size 大于20Kb
								plus.zip.compressImage(
									{
										src: img,
										dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
										width: '10%',
										height: '10%',
										quality: 1,
										overwrite: true
									},
									event => {
										console.log('success zip****' + event.size);
										let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
										res(newImg);
									},
									function(error) {
										uni.showModal({
											content: '分享图片太大,需要请重新选择图片!',
											showCancel: false
										});
									}
								);
							}
						});
					},
					e => {
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content: '分享图片太大,需要请重新选择图片!',
							showCancel: false
						});
					}
				);
			});
		}
	}
};
</script>

<style scoped>
.more-share-model {
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 29;
}
.more-share {
	width: 100%;
	height: 380upx;
	background-color: #ffffff;
	border-top: 1upx solid #c0c0c0;
	z-index: 30;
	position: fixed;
	left: 0;
	bottom: 0;
}
.more-share-title {
	text-align: center;
	font-size: 32upx;
	line-height: 80upx;
}
.uni-tab-item-hover {
	background-color: #eeeeee;
}
.uni-tab-item-title image {
	width: 100upx;
	height: 100upx;
}
.tabs {
	display: flex;
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	background-color: #ffffff;
}

.scroll-h {
	width: 750upx;
	height: 200upx;
	flex-direction: row;
	white-space: nowrap;
	flex-wrap: nowrap;
}

.line-h {
	height: 1upx;
	background-color: #cccccc;
}
.uni-tab-item {
	display: flex;
	width: 100%;
	flex-wrap: nowrap;
}

.uni-tab-item-title {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #959595;
	font-size: 30upx;
	height: 200upx;
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
.more-share-btn {
	height: 100upx;
	text-align: center;
	line-height: 100upx;
	font-size: 32upx;
	border-top: 1upx solid #c0c0c0;
}
</style>
