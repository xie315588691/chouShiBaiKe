<template>
	<view class="user-psd">
		<view class="reset-psd">
			<view class="reset-psd-item">
				<input type="password" v-model="oldpsd" placeholder="输入旧密码" />
			</view>
			<view class="reset-psd-item">
				<input type="password" v-model="newpsd" placeholder="输入新密码" />
			</view>
			<view class="reset-psd-item">
				<input type="password" v-model="renewpsd" placeholder="输入确认密码" />
			</view>
		</view>
		<button @tap="updatePsd" :disabled="!isClick">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpsd:'',
				newpsd:'',
				renewpsd:''
			}
		},
		computed:{
			isClick(){
				if(this.oldpsd.trim()&& this.newpsd.trim() &&this.renewpsd.trim()){
					return true;
				}else{
					return false;
				}
			}
		},
		methods: {
			check(){
				if(!(this.oldpsd.trim())){
					uni.showToast({
						title:'旧密码不能为空！',
						icon:'none'
					})
					return false
				}
				if(!(this.newpsd.trim())){
					uni.showToast({
						title:'输入新密码不能为空！',
						icon:'none'
					})
					return false
				}
				if(!(this.renewpsd.trim())){
					uni.showToast({
						title:'再次输入密码不能为空！',
						icon:'none'
					})
					return false
				}
				if(this.renewpsd.trim() !=this.newpsd.trim()){
					uni.showToast({
						title:'两次新密码输入不一致！',
						icon:'none'
					})
					return false
				}
				return true
			},
			updatePsd(){
				if(this.check()){
					console.log('ok')
				}
				
			}
		}
	}
</script>

<style>
	.reset-psd{
		padding: 10upx 25upx 40upx;
		
	}
	.reset-psd-item{
		height: 80upx;
		border-bottom: 1upx solid #f2f2f2;
		display: flex;
		align-items: center;
	}
	.reset-psd-item input{
		width: 100%;
		padding: 0 20upx;
	}
	.user-psd button{
		margin: 0 40upx;
	}
</style>
