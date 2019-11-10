<template>
	<view class="user-space-bg" @tap="changeImg">
		<image :src="userImg" mode="widthFix" lazy-load ></image>
		<view class="user-space-bg-info">
			<image src="../../static/demo/topicpic/12.jpeg" mode="widthFix" lazy-load></image>
			<view class="user-space-bg-info-name">
				JIA一勺
				<view>
					<text class="iconfont icon-nan"></text>
					20
				</view>
			</view>
			<view class="ser-space-bg-info-guanzhu" :class="{'active':isguanzhu}" @tap.stop="changGuanzhu">
				<template v-if="!isguanzhu">
					<text class="iconfont icon-jia"></text>
					关注
				</template>
				<template v-else>
					已关注
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				userImg:'../../static/demo/datapic/4.jpg',
				imgIdx:4,
				isguanzhu:false
			}
		},
		methods:{
			changeImg(){
				this.imgIdx++
				if(this.imgIdx >9){
					this.imgIdx =4
				}
				this.userImg ='../../static/demo/datapic/'+this.imgIdx+'.jpg'
				// console.log(this.imgIdx)
			},
			changGuanzhu(){
				this.isguanzhu = !this.isguanzhu
				// console.log('guanzhu')
			}
		}
	}
</script>

<style>
	.user-space-bg {
		width: 100%;
		height: 500upx;
		overflow: hidden;
		position: relative;
	}
	.user-space-bg image {
		width: 100%;
	}
	.user-space-bg-info {
		position: absolute;
		top: 100upx;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.user-space-bg-info image {
		width: 150upx;
		height: 150upx;
		border-radius: 50%;
	}
	.user-space-bg-info-name {
		display: flex;
		height: 40upx;
		align-items: center;
		font-size: 32upx;
		color: #ffffff;
		margin: 30upx 0;
	}
	.user-space-bg-info-name > view {
		display: inline-block;
		height: 30upx;
		border: 1upx solid #ffffff;
		font-size: 20upx;
		line-height: 30upx;
		padding: 0 15upx;
		border-radius: 15upx;
		background-color: #41a6ea;
	
		margin-left: 15upx;
	}
	.user-space-bg-info-name .iconfont {
		font-size: 20upx;
	}
	.ser-space-bg-info-guanzhu {
		display: inline-block;
		height: 50upx;
		padding: 0 15upx;
		line-height: 50upx;
		background-color: #ffe933;
		border-radius: 8upx;
	}
	.ser-space-bg-info-guanzhu.active{
		background-color: #C0C0C0;
	}
</style>
