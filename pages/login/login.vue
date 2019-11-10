<template>
	<view>
		<uni-status-bar :bgC="tabbarColor"></uni-status-bar>
		<view class="login-img">
			<image src="../../static/mimo/loginhead.png" mode="widthFix" lazy-load></image>
			<text class="iconfont icon-guanbi" @tap="colseLogin"></text>
		</view>
		<view class="login-from">
			<view class="reset-psd">
				<!-- 第一行账号输入 -->
				
				<view class="reset-psd-item">
					<template v-if="!isTel">
						<input type="text" v-model="username" placeholder="昵称/手机号码/邮箱" />
					</template>
					<template v-else>
						<view class="reset-psd-tel">
							<text>+86</text>
							<input type="text" v-model="telephone" placeholder="输入手机号码" />
						</view>
					</template>
				</view>
				<!-- 第二行 -->
				<template v-if="!isTel">
					<view class="reset-psd-item login-psd">
						<input type="password" v-model="psd" placeholder="请输入密码" />
						<text>忘记密码?</text>
					</view>
				</template>
				<template v-else>
					<view class="reset-psd-item login-psd login-yzm">
						<input type="text" v-model="yzm" placeholder="请输入验证码" />
						<button class="reset-psd-yzm" :disabled="yzmCheck" @tap="getyzm">{{ yzmtext }}</button>
					</view>
				</template>
			</view>
			<button class="layout" :disabled="hasLogin">登录</button>
		</view>
		<template v-if="!isTel">
			<view class="login-code" @tap="changeTel(1)">
				验证码登录
				<text class="iconfont icon-you"></text>
			</view>
		</template>
		<template v-else>
			<view class="login-code" @tap="changeTel(2)">
				账号密码登录
				<text class="iconfont icon-you"></text>
			</view>
		</template>
		<view class="login-others">
			<view class="login-others-text">第三方登录</view>
			<view class="login-others-line"></view>
		</view>
		<other-login :providerList="providerList"></other-login>
		<view class="login-agree">
			注册即代表您同意
			<text>《仿糗事百科用户协议》</text>
		</view>
	</view>
</template>

<script>
import uniStatusBar from '@/common/uni-status-bar/uni-status-bar.vue';
import otherLogin from '@/common/common/other-login.vue';

export default {
	components: {
		uniStatusBar,
		otherLogin
	},
	data() {
		return {
			tabbarColor: '#FFE933',
			username: '',
			psd: '',
			isTel: true,
			telephone: '',
			yzm: '',
			yzmtext: '获取验证码',
			yzmTime: false,
			providerList:this.$store.state.providerList
			// isyzm:true?
		};
	},
	onLoad() {
		
	},
	computed: {
		//手机号码验证码登录
		isyzm() {
			const mPattern = /^1[34578]\d{9}$/;
			if (this.telephone && mPattern.test(this.telephone)) {
				return false;
			}
			return true;
		},
		
		yzmCheck() {
			if (!this.isyzm && !this.yzmTime) {
				return false;
			}
			return true;
		},

		hasLogin() {
			if(this.isTel){
				if (!this.isyzm && this.yzm && this.yzm.length == 6) {
					return false;
				}
				return true;
			}else{
				if(this.username && this.psd){
					return false
				}
				return true;
			}
		}
	},
	methods: {
		colseLogin() {
			console.log('close');
			uni.navigateBack({
				delta:1
			})
		},
		changeTel(num) {
			if (num == 2) {
				this.isTel = false;
			} else if (num == 1) {
				this.isTel = true;
			}
		},
		//获取验证码
		getyzm() {
			console.log('验证码');
			this.yzmTime = true;
			let i = 60;
			let timer = setInterval(() => {
				this.yzmtext = '获取验证码' + i + 's';
				i--;
				if (i < 0) {
					this.yzmTime = false;
					this.yzmtext = '获取验证码';
					clearInterval(timer);
				}
			}, 1000);
			console.log('验证码获取完毕')
		}
	}
};
</script>

<style>
.reset-psd-tel {
	display: flex;
	align-items: center;
	font-size: 32upx;
}
.reset-psd-tel text {
	color: #000000;
}
.reset-psd .reset-psd-yzm {
	font-size: 24upx;
	height: 60upx;
	font-weight: 400;
	padding-left: 10upx;
	padding-right: 10upx;
	margin: 0 0;
	background-color: #ffe933;
}
.reset-psd .login-psd {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.login-img,
.login-img image {
	width: 100%;
	height: 440upx;
}
.login-img {
	position: relative;
}
.login-img text {
	position: absolute;
	top: 30upx;
	left: 30upx;
	font-size: 32upx;
	font-weight: 700;
	color: #332f0a;
}
.reset-psd {
	padding: 10upx 25upx 40upx;
}
.reset-psd-item {
	height: 100upx;
	border-bottom: 1upx solid #f2f2f2;
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	font-size: 32upx;
	font-weight: 700;
	color: #929292;
}
.reset-psd-item input {
	width: 70%;
	padding: 0 20upx;
}

.reset-psd .login-psd text {
	font-weight: 400;
	font-size: 24upx;
	color: #000000;
}
.login-code {
	font-size: 28upx;
	line-height: 36upx;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50upx;
}
.login-code .iconfont {
	font-size: 26upx;
	color: #d9d9d9;
	margin-left: 5upx;
}
.login-others {
	font-size: 26upx;
	color: #9b9b9b;
	height: 36upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.login-others-text {
	display: inline-block;
	padding: 0 28upx;
	background-color: #ffffff;
	z-index: 9;
}
.login-others-line {
	height: 1upx;
	border-top: 1upx solid #cccccc;
	width: 375upx;
	transform: translateY(-24upx);
}

.login-agree {
	margin-top: 30upx;
	text-align: center;
	font-size: 26upx;
}
.login-agree text {
	color: #2baefc;
}
</style>
