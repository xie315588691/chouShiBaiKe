<template>
	<view>
		<view class="home-setting">
			<view class="home-setting-item" hover-class="home-setting-item-hover" @tap="gotoPage('../user-psd/user-psd')">
				<view>
					账号与安全
				</view>
				<text class="iconfont icon-you" ></text> 
			</view>
			<view class="home-setting-item" hover-class="home-setting-item-hover" @tap="gotoPage('../bound-email/bound-email')">
				<view>
					绑定邮箱
				</view>
				<text class="iconfont icon-you"></text>
			</view>
			<view class="home-setting-item" hover-class="home-setting-item-hover" @tap="gotoPage('../user-set-userinfo/user-set-userinfo')">
				<view>
					资料编辑
				</view>
				<text class="iconfont icon-you"></text>
			</view>
			<view class="home-setting-item" hover-class="home-setting-item-hover">
				<view>
					小字条
				</view>
				<text class="iconfont icon-you"></text>
			</view>
			<view class="home-setting-item" hover-class="home-setting-item-hover">
				<view>
					清除缓存
				</view>
				<text class="iconfont icon-you"></text>
			</view>
			<view class="home-setting-item" hover-class="home-setting-item-hover">
				<view>
					意见反馈
				</view>
				<text class="iconfont icon-you"></text>
			</view>
			<view class="home-setting-item" hover-class="home-setting-item-hover">
				<view>
					关于糗事百科
				</view>
				<text class="iconfont icon-you"></text>
			</view>
		</view>
		<button  class="layout">退出登录</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			gotoPage(val){
				uni.navigateTo({
					url:val
				})
			}
		}
	}
</script>

<style>
.home-setting {
	margin: 0 25upx;
	border-top: 1upx solid #f2f2f2;
}
.home-setting-item {
	height: 110upx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	padding: 0 30upx;
	border-bottom: 1upx solid #f2f2f2;
	justify-content: space-between;
}
.home-setting-item-hover{
	background-color: #F1F1F1;
}
.home-setting-item .iconfont{
	color: #CCCCCC;
}

.layout{
	margin: 40upx 90upx;
	background-color: #FFE933;
}
</style>
