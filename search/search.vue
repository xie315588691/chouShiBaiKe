<template>
	<view>
		搜索页
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e){
			if(e.index == 0){
				uni.navigateBack({
					delta:1
				})
			}
		
		},
		//监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged(e){
			console.log('输入框内容变化：'+JSON.stringify(e))
			
		},
		//监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
		onNavigationBarSearchInputConfirmed(e) {
			console.log('搜索'+JSON.stringify(e))
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
