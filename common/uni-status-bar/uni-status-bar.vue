<template>
	<!-- background-color: ; -->
	<view :style="{ height: statusBarHeight ,backgroundColor:bgC}" class="uni-status-bar">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		name: 'UniStatusBar',
		props:{
			bgC:{
				type:String,
				default:"#FFFFFF"
			}
		},
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		}
	}
</script>

<style>
	.uni-status-bar {
		display: block;
		width: 100%;
		height: 20px;
	}
</style>