<template>
	<view>
		<view class="paper-msk" :style="{ height: sysHight + 'px' }" v-show="isShow" @tap="changeShow"></view>

		<view class="paper-menu" v-show="isShow">
			<view hover-class="paper-menu-h" @tap="addqiuYou">
				<text class="iconfont icon-sousuo"></text>
				拉黑
			</view>
			<view hover-class="paper-menu-h" @tap="clearmsg">
				<text class="iconfont icon-qingchu"></text>
				备注
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		isShow:{
			type:Boolean,
			default:false
		},
		sysHight:{
			type:Number,
			default:600
		}
	},
	
	methods:{
		changeShow(){
			this.$emit('changeShow',false)
		},
		addqiuYou(){
			console.log('add')
			this.$emit('changeShow',false)
		},
		clearmsg(){
			console.log('clear')
			this.$emit('changeShow',false)
		}
	}
};
</script>

<style>
.paper-menu {
	width: 420upx;
	height: 200upx;
	box-sizing: border-box;

	box-shadow: 1upx 1upx 20upx 0 rgba(0, 0, 0, 0.3);
	background-color: #ffffff;
	z-index: 99;
	position: absolute;
	top: 120upx;
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
