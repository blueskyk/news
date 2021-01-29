<template>
	<view class="content">
		<nav-bar></nav-bar>
		<tab :list="tabList" @tab="tab"></tab>
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
			this.$api.get_label({
				name: 'get_label'
			}).then((res) => {
				this.tabList = res.data
			})
		},
		tab(data,index) {
			console.log(data,index)
		}
		
	},
	components: {
		navBar,
		tab
	}
};
</script>

<style></style>
