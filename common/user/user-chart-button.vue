<template>
	<view class="user-chart-button">
		<input type="text" placeholder="文明发言" v-model="text" />
		<text class="iconfont icon-iconfontfabu" @tap="submit"></text>
	</view>
</template>

<script>

export default {
	data() {
		return {
			text: ''
		};
	},
	methods: {
		submit() {
			console.log('submit');
			this.$emit('submit', this.text);
		}
	}
};
</script>

<style scoped>
.user-chart-button {
	height: 100upx;
	width: 100%;
	background-color: #ffffff;
	border-top: 1upx solid #c0c0c0;
	position: fixed;
	bottom: 0;
	left: 0;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	padding: 0 20upx;
	font-size: 32upx;
}
.user-chart-button input {
	height: 80upx;
	background-color: #f7f7f7;
	width: 600upx;
	box-sizing: border-box;
	padding: 0 20upx;
	border-radius: 12upx;
}

.user-chart-button .iconfont {
	font-size: 42upx;
	margin-left: 40upx;
	font-weight: 700;
}
</style>
