<template>
	<view class="index-loading-more">{{ loadText }}</view>
</template>

<script>
	export default{
		props:{
			loadText:String
		}
	}
</script>

<style>
	.index-loading-more{
		text-align: center;
	}
</style>
