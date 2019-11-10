<template>
	<view>
		<view class="home-setting">
			<view class="home-setting-item home-setting-user">
				<view class="setting-item-title">头像</view>
				<view class="setting-user-img" @tap="changeImg">
					<image :src="userpic" mode="aspectFill" lazy-load></image>
					<text class="iconfont icon-xie"></text>
				</view>
			</view>
			<view class="home-setting-item">
				<view class="setting-item-title">昵称</view>
				<view class="setting-user-img">
					<input type="text" v-model="nickname" />
					<text class="iconfont icon-xie"></text>
				</view>
			</view>
			<view class="home-setting-item">
				<view class="setting-item-title">性别</view>
				<view class="setting-user-img" @tap="changeList('sex')">
					<text>{{ sex }}</text>
					<text class="iconfont icon-xie"></text>
				</view>
			</view>
			<view class="home-setting-item">
				<view class="setting-item-title">生日</view>
				<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="setting-user-img">
						<text>{{ birthday }}</text>
						<text class="iconfont icon-xie"></text>
					</view>
				</picker>
			</view>
			<view class="home-setting-item">
				<view class="setting-item-title">情感</view>
				<view class="setting-user-img" @tap="changeList('qg')">
					<text>{{ qg }}</text>
					<text class="iconfont icon-xie"></text>
				</view>
			</view>
			<view class="home-setting-item">
				<view class="setting-item-title">职业</view>
				<view class="setting-user-img" @tap="changeList('job')">
					<text>{{ job }}</text>
					<text class="iconfont icon-xie"></text>
				</view>
			</view>
			<view class="home-setting-item">
				<view class="setting-item-title">家乡</view>
				<view class="setting-user-img" @tap="showMulLinkageThreePicker">
					<text>{{ cityAddr }}</text>
					<text class="iconfont icon-xie"></text>
				</view>
			</view>
		</view>
		<button class="layout">完成</button>
		<mpvue-city-picker
			:themeColor="themeColor"
			ref="mpvueCityPicker"
			:pickerValueDefault="cityPickerValueDefault"
			@onCancel="onCancel"
			@onConfirm="onConfirm"
		></mpvue-city-picker>
	</view>
</template>

<script>
import mpvueCityPicker from '../../common/mpvue-citypicker/mpvueCityPicker.vue';
export default {
	components: {
		mpvueCityPicker
	},
	data() {
		return {
			userpic: '../../static/demo/topicpic/9.jpeg',
			nickname: '哈哈',
			sex: '不限',
			sexList: ['不限', '男', '女'],
			qgList: ['秘密', '未婚', '已婚'],
			jobList: ['秘密', 'IT', '教师', '工人'],
			qg: '已婚',
			job: 'IT',
			birthday: '1990-01-01',
			themeColor: '#007AFF',
			cityPickerValueDefault: [0, 0, 1],
			cityAddr: '广东-广州'
		};
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	},
	onBackPress() {
		if (this.$refs.mpvueCityPicker.showPicker) {
			this.$refs.mpvueCityPicker.pickerCancel();
			return true;
		}
	},
	onUnload() {
		if (this.$refs.mpvueCityPicker.showPicker) {
			this.$refs.mpvueCityPicker.pickerCancel();
		}
	},
	methods: {
		changeImg() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['compressed'],
				success: res => {
					this.userpic = res.tempFilePaths[0];
					console.log(JSON.stringify(res));
				}
			});
		},
		//修改生日
		bindDateChange(e) {
			this.birthday = e.target.value;
		},
		// 三级联动选择
		showMulLinkageThreePicker() {
			this.$refs.mpvueCityPicker.show();
		},
		onConfirm(e) {
			this.cityAddr = e.label;
			this.cityPickerValueDefault = e.value;
			// this.pickerText = JSON.stringify(e)
			console.log(JSON.stringify(e));
		},
		onCancel(e) {
			console.log(e);
		},
		changeList(val) {
			const _this = this;
			if (val == 'sex') {
				uni.showActionSheet({
					itemList: _this.sexList,
					success: res => {
						_this.sex = _this.sexList[res.tapIndex];
						// console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					}
				});
			} else if (val == 'qg') {
				uni.showActionSheet({
					itemList: _this.qgList,
					success: res => {
						_this.qg = _this.qgList[res.tapIndex];
						// console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					}
				});
			} else if (val == 'job') {
				uni.showActionSheet({
					itemList: _this.jobList,
					success: res => {
						_this.job = _this.jobList[res.tapIndex];
						// console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					}
				});
			}
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		}
	}
};
</script>

<style>
.home-setting {
	margin: 0 25upx;
}

.setting-user-img {
	display: flex;
	align-items: center;
}
.setting-user-img .icon-xie {
	margin-left: 20upx;
}
.setting-user-img input {
	text-align: right;
}
.setting-item-title {
	font-size: 36upx;
	font-weight: 700;
	color: #949494;
}
.home-setting-item {
	height: 110upx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	padding: 0 30upx;
	border-bottom: 1upx solid #f2f2f2;
	justify-content: space-between;
}
.home-setting-user {
	height: 170upx;
}
.home-setting-user image {
	height: 100upx;
	width: 100upx;
	border-radius: 50%;
}
.home-setting-item-hover {
	background-color: #f1f1f1;
}
.home-setting-item .iconfont {
	color: #cccccc;
}

.layout {
	margin: 40upx 90upx;
	background-color: #ffe933;
}
</style>
