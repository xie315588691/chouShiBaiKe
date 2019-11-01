<template>
	<view class="paper">
		<!-- 操作菜单 -->
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
		<block v-for="(item, idx) in list" :key="idx">
			<paper-list :item="item"></paper-list>
			</block>
	</view>
</template>

<script>
import paperList from '../../common/paper/paper-list.vue';
export default {
	components: {
		paperList
	},
	data() {
		return {
			isShow: false,
			sysHight:500,
			list: [
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				},
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				},
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				},
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				},
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				},
				{
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼',
					time: '13:35',
					info: '六道快手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '12'
				}
			]
		};
	},
	onPullDownRefresh() {
		this.pullDownFresh();
	},
	onLoad() {
		uni.getSystemInfo({
			success:(res)=>{
				this.sysHight = res.windowHeight
			}
		})
	},
	onNavigationBarButtonTap(e) {
		if(e.index==0){
			uni.navigateTo({
				url:'../user-list/user-list'
			})
		}
		if (e.index == 1) {
			this.isShow = !this.isShow
		}
	},
	methods: {
		pullDownFresh() {
			setTimeout(() => {
				const obj = {
					userpic: '../../static/demo/demo6.jpg',
					name: '低头看鱼1',
					time: '13:40',
					info: '六道快000手家常菜，好吃又下饭，家人吃了还想要',
					infoNum: '20'
				};
				this.list.unshift(obj);
				uni.stopPullDownRefresh();
			}, 1000);
		},
		addqiuYou(){
			console.log('加糗友！')
			this.isShow = false
		},
		clearmsg(){
			console.log('清除未读')
			this.isShow = false
		}
	}
};
</script>

<style>
.paper {
	position: relative;
	width: 100%;
	height: 100%;
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
