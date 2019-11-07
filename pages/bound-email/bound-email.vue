<template>
	<view class="user-psd">
		<view class="reset-psd">
			<view class="reset-psd-item">
				<input type="text" v-model="email" placeholder="请输入你要绑定的邮箱" />
			</view>
			<view class="reset-psd-item">
				<input type="password" v-model="psd" placeholder="请输入密码" />
			</view>
		
		</view>
		<button @tap="updateEmail" :disabled="!isClick">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email:'',
				psd:''
			}
		},
		computed:{
			isClick(){
				if(this.email.trim() && this.psd.trim()){
					return true;
				}
				return false;
			}
		},
		methods: {
			check(){
				const reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
				if(reg.test(this.email)){
					return true;
				}else{
					return false
				}
			},
			updateEmail(){
				if(!this.check()){
					uni.showToast({
						icon:'none',
						title:'邮箱格式不对'
					})
				}else{
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
