<script>
export default {
	
	onLaunch() {
		this.getLocalProvider();
		this.lib.netWork.On()
		console.log('config',this.config.webUrl)
	},
	onShow() {
		console.log('App Show');
	},
	onHide() {
		console.log('App Hide');
	},
	methods: {
		getLocalProvider() {
			let providerList =[]
			uni.getProvider({
				service: 'oauth',
				success: result => {
					providerList = result.provider.map(value => {
						let providerName = '';
						let img = ''
						switch (value) {
							case 'weixin':
								providerName = '微信登录';
								img='http://admin.0752hb.com/baike/weixin.png'
								break;
							case 'qq':
								providerName = 'QQ登录';
								img = 'http://admin.0752hb.com/baike/qqhy.png';
								
								break;
							case 'sinaweibo':
								providerName = '新浪微博登录';
								img = 'http://admin.0752hb.com/baike/weibo.png';
								break;
							case 'xiaomi':
								providerName = '小米登录';
								img = 'http://admin.0752hb.com/baike/xiaomi.png';
								break;
							case 'alipay':
								providerName = '支付宝登录';
								img = 'http://admin.0752hb.com/baike/zhifubao.png';
								break;
							case 'baidu':
								providerName = '百度登录';
								img = 'http://admin.0752hb.com/baike/baidu.png';
								break;
							
						}
						return {
							name: providerName,
							img:img,
							id: value
						};
					});
					this.$store.commit('setProviderList',providerList)
				},
				fail: error => {
					console.log('获取登录通道失败', error);
				}
			});
		}
	}
};
</script>

<style>
@import url('./static/uni.css');
@import url('./static/font/iconfont');

@import url('./common/animate.css');
.df {
	display: flex;
}
.df-j-c {
	justify-content: center;
}
.df-j-s-b {
	justify-content: space-between;
}
.df-a-c {
	align-items: center;
}
//解决图片闪一下的问题
image{
	will-change: transform;
}
//播放时间
.pay-time {
	position: absolute;
	bottom: 10upx;
	right: 10upx;
	display: inline-block;
	height: 50upx;
	color: #ffffff;
	line-height: 50upx;
	background-color: rgba(0, 0, 0, 0.4);
	font-size: 24upx;
	padding: 0 20upx;
	border-radius: 25upx;
}
.layout {
	margin: 40upx 90upx;
	background-color: #ffe933;
}
</style>
