<template>
	<view class="content">
		<nav-bar></nav-bar>
		<tab :list="tabList"></tab>
	</view>
</template>

<script>
import navBar from '../../components/navbar/navbar.vue';
import tab from '../../components/tab/tab.vue';
export default {
	data() {
		return {
			tabList: []
		};
	},
	onLoad() {
		this.getLabel();
	},
	methods: {
		// 获取表单数据
		getLabel() {
			uniCloud
				.callFunction({
					name: 'get_label'
				})
				.then(res => {
					const { result } = res;
					this.tabList = result.data
					console.log(this.tabList)
				});
		}
	},
	components: {
		navBar,
		tab
	}
};
</script>

<style></style>
