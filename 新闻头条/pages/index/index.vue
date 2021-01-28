<template>
	<view class="content">
		<nav-bar></nav-bar>
		<view v-for="item in 100">
			{{item}} 测试内容
		</view>
	</view>
</template>

<script>
	import navBar from "../../components/navbar/navbar.vue"
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {
			navBar
		}
	}
</script>

<style>
	
</style>
