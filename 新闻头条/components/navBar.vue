<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view class="navbar-search">
				<view class="navbar-search_icon"></view>
				<view class="navbar-search_text">uniapp,vue</view>
			</view>
		</view>
		<view style="height: 90rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.navbar {
	.navbar-fixed {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 30rpx;
		width: 100%;
		height: 90rpx;
		background-color: $base-color;
		.navbar-search {
			display: flex;
			align-items: center;
			width: 100%;
			height: 60rpx;
			padding: 0 20rpx;
			background-color: #fff;
			border-radius: 60rpx;
			.navbar-search_icon {
				width: 20rpx;
				height: 20rpx;
				border: 1rpx solid red;
				margin-right: 20rpx;
			}
			.navbar-search_text {
				font-size: 24rpx;
				color: #999;
			}
		}
	}
}
</style>
