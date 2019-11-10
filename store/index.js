import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		providerList:[],
	},
	mutations: {
	
		//获取登录列表
		setProviderList(state, obj){
			state.providerList =obj
		}
		
	}
	
})

export default store
