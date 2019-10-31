<template>
	<view class="user-item df df-j-s-b df-a-c">
		<view class="user-item-t df df-a-c">
			<image :src="userInfo.userImg" lazy-load></image>
			<view class="user-item-t-info">
				<view class="user-item-title">{{ userInfo.username }}</view>
				<!-- sex 0:nv 1:nan -->
				<template v-if="userInfo.sex == 0">
					<view class="user-item-sex">
						<text class="iconfont icon-nv"></text>
						{{ userInfo.age }}
					</view>
				</template>
				<template v-else>
					<view class="user-item-sex nan">
						<text class="iconfont icon-nan"></text>
						{{ userInfo.age }}
					</view>
				</template>
			</view>
		</view>
		<!-- icon-btn 0:dui 1:jia -->
		<template v-if="userInfo.iconbtn == 0">
			<view class="iconfont icon-dui"></view>
		</template>
		<template v-else>
			<view class="iconfont icon-jia1"></view>
		</template>
	</view>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			default: ()=>{
				return {};
			}
		}
	},
	data() {
		return {
			userInfo: this.item
		};
	}
};
</script>

<style>
.user-item {
	height: 170upx;
	border-bottom: 1upx solid #ececec;
}
.user-item .icon-dui{
	color: #CCCCCC;
}
.user-item .icon-jia1{
	color: #F8781A;
	}
.user-item-t image {
	width: 120upx;
	height: 120upx;
	border-radius: 50%;
	margin-right: 30upx;
}
.user-item-title {
	font-size: 34upx;
	font-weight: 700;
	color: #000000;
}
.user-item-sex {
	font-size: 24upx;
	display: inline-block;
	height: 32upx;
	border-radius: 16upx;
	background-color: #ff658a;
	line-height: 32upx;
	padding: 0 12upx;
	color: #ffffff;
}
.user-item-sex.nan {
	background-color: #3aafff;
}
.user-item-sex .iconfont {
	font-size: 24upx;
}
</style>
