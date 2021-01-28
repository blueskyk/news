<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{height: statusBarHeight +'px'}"></view>
			<view class="navbar-content" :style="{height: navBarHeight + 'px',width: windowWidth+'px'}">
				<view class="navbar-search">
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">uniapp,vue</view>
				</view>
			</view>
		</view>
		<view :style="{height: statusBarHeight + navBarHeight +'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: ""
			};
		},
		created() {
			// 获取手机系统信息
			 const info = uni.getSystemInfoSync()
			 // 设置状态栏的高度
			 this.statusBarHeight = info.statusBarHeight
			 this.windowWidth = info.windowWidth
			 // 获取小程序胶囊的位置
			 // #ifndef H5 || APP-PLUS
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo)
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top-info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
			// #endif
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
		width: 100%;
		background-color: $base-color;
		.navbar-content {
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			padding: 0 30rpx;
			height: 90rpx;
			.navbar-search {
				display: flex;
				align-items: center;
				width: 100%;
				height: 60rpx;
				padding: 0 20rpx;
				background-color: #fff;
				border-radius: 60rpx;
				.navbar-search_icon {
					margin-right: 20rpx;
				}
				.navbar-search_text {
					font-size: 24rpx;
					color: #999;
				}
			}
		}
	}
}
</style>
