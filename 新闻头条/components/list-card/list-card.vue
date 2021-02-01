<template>
	<view>
		<view class="listcard">
			<view class="listcard-image"><image src="../../static/tabbar/logo.png" mode="aspectFill"></image></view>
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架</text>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-label"><view class="listcard-content_des-label-item">前端</view></view>
					<view class="listcard-content_des-browse">1100浏览</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.listcard {
	display: flex;
	align-items: center;
	padding: 20rpx;
	margin: 20rpx;
	border-radius: 10rpx;
	box-shadow: 0 0 10rpx 2rpx rgba($color: #000000, $alpha: 0.1);
	box-sizing: border-box;
	.listcard-image {
		flex-shrink: 0;
		width: 120rpx;
		height: 120rpx;
		border-radius: 10rpx;
		overflow: hidden;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.listcard-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 20rpx;
		width: 100%;
		.listcard-content_title {
			font-weight: 400;
			color: #333;
			font-size: 28rpx;
			margin-bottom: 20rpx;
			text {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
		.listcard-content_des {
			display: flex;
			justify-content: space-between;
			font-size: 24rpx;
			color: #333;
			.listcard-content_des-label {
				display: flex;
				align-items: center;
				.listcard-content_des-label-item {
					display: flex;
					align-items: center;
					padding: 0 10rpx;
					border-radius: 30rpx;
					border: 1rpx solid $base-color;
					color: $base-color;
				} 
			}
		}
	}
}
</style>
