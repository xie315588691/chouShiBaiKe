<template>
	<view class="paper-menus">
		<view class="paper-msk" :style="{ height: sysHight + 'px' }" v-show="isShow" @click="isShow = false"></view>
		<view class="paper-menu" v-show="isShow">
			<view hover-class="paper-menu-h" @tap="addqiuYou">
				<text class="iconfont icon-sousuo"></text>
				加糗友
			</view>
			<view hover-class="paper-menu-h" @tap="clearmsg">
				<text class="iconfont icon-qingchu"></text>
				清除未读
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		components:{
			sysHight:{
				type:Number,
				default:500
			},
			paperShow:{
				type:Boolean,
				default:false
			}
			
		},
		data(){
			return{
				isShow:this.paperShow
			}
		},
		methods:{
			addqiuYou(){
				console.log('加糗友！')
				this.isShow = false
			},
			clearmsg(){
				console.log('清除未读')
				this.isShow = false
			}
		}
	}
</script>

<style>
	.paper-menus{
		position: relative;
	}
	.paper-menu {
		width: 420upx;
		height: 200upx;
		box-sizing: border-box;
	
		box-shadow: 1upx 1upx 20upx 0 rgba(0, 0, 0, 0.3);
		background-color: #ffffff;
		z-index: 9;
		position: absolute;
		top: 20upx;
		right: 0;
	}
	.paper-menu > view {
		height: 100upx;
		line-height: 100upx;
		padding-left: 20upx;
		font-size: 34upx;
		font-weight: 700;
	}
	.paper-menu .iconfont {
		margin-right: 20upx;
	}
	.paper-menu-h {
		background-color: #eeeeee;
	}
	.paper-msk{
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 8;
	}
</style>
