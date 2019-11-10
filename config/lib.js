
const netWork ={
	isConnect:false,
	On(){
		uni.getNetworkType({
			success: (res) => {
				console.log('网络状态',res)
				if(res.networkType!='none'){
					 return this.isConnect = true;
				}
				uni.showToast({
					title:'请连接网络',
					icon:'none'
				})
			}
		})
		uni.onNetworkStatusChange((resu)=>{
			console.log('监听',resu)
			this.isConnect = resu.isConnected
			if(!resu.isConnected){
				uni.showToast({
					title:'您现在处于断网状态！',
					icon:'none'
				})
			}
		})
	}
}

const update=()=>{
	// #ifdef APP-PLUS  
	plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
	    uni.request({  
	        url: 'http://www.example.com/update/',  
	        data: {  
	            version: widgetInfo.version,  
	            name: widgetInfo.name  
	        },  
	        success: (result) => {  
	            var data = result.data;  
	            if (data.update && data.wgtUrl) {  
	                uni.downloadFile({  
	                    url: data.wgtUrl,  
	                    success: (downloadResult) => {  
	                        if (downloadResult.statusCode === 200) {  
	                            plus.runtime.install(downloadResult.tempFilePath, {  
	                                force: false  
	                            }, function() {  
	                                console.log('install success...');  
	                                plus.runtime.restart();  
	                            }, function(e) {  
	                                console.error('install fail...');  
	                            });  
	                        }  
	                    }  
	                });  
	            }  
	        }  
	    });  
	});  
	// #endif
}
export default{
	netWork,
	update
}