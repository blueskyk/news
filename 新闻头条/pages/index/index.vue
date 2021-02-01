<template>
	<view class="home">
		<nav-bar></nav-bar>
		<tab :list="tabList" @tab="tab"></tab>
		<list-scroll>
			<list-card mode="base"></list-card>
			<list-card mode="image"></list-card>
			<list-card mode="column"></list-card>
		</list-scroll>
	</view>
</template>

<script>
import navBar from '../../components/navbar/navbar.vue';
import tab from '../../components/tab/tab.vue';
import listScroll from "../../components/list-scroll/list-scroll.vue"
import listCard from "../../components/list-card/list-card.vue"
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
			this.$api
				.get_label({
					name: 'get_label'
				})
				.then(res => {
					this.tabList = res.data;
				});
		},
		tab(data, index) {
			console.log(data, index);
		}
	},
	components: {
		navBar,
		tab,
		listScroll,
		listCard
	}
};
</script>

<style lang="scss">
page {
	display: flex;
	height: 100%;
}
.home {
	display: flex;
	flex-direction: column;
	flex: 1;
	border: 1rpx solid red;
}
</style>
