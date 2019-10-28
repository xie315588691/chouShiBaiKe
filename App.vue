<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
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
</style>
