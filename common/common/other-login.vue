<template>
	<view class="home-login">
		<block v-for="(item,index) in providerList" :key="index">
			<image :src="item.img" lazy-load @tap="toOtherLogin(item)"/>
		</block>
	<!-- 	<image src="../../static/weixin.png" lazy-load @tap="toOtherLogin('weixin')"/>
		<image class="home-login-img" src="../../static/qqhy.png" lazy-load @tap="toOtherLogin('qq')" />
		<image src="../../static/weibo.png" lazy-load @tap="toOtherLogin('sinaweibo')" /> -->
	</view>
</template>

<script>
export default {
	props:{
		providerList:{
			type:Array,
			default:()=>{
				return [];
			}
		}
	},
	data() {
		return {
		};
	},
	onLoad() {
	},
	methods: {
		//第三方登录
		toOtherLogin(item) {
			console.log('other-login',JSON.stringify(item))
			uni.login({
				provider: item.id,
				// #ifdef MP-ALIPAY
				scopes: 'auth_user', //支付宝小程序需设置授权类型
				// #endif
				success: res => {
					console.log('login success:', JSON.stringify(res));
					// 更新保存在 store 中的登录状态

					// this.login(provider.id
					console.log('登录成功');
				},
				fail: err => {
					console.log('login fail:', err);
				}
			});
		}
	}
};
</script>

<style scoped>
.home-login {
	padding-top: 30upx;
	text-align: center;
}

.home-login image {
	width: 110upx;
	height: 110upx;
	padding-left: 40upx;
}
.home-login image:first-of-type {
	padding-left: 0;
}
</style>
