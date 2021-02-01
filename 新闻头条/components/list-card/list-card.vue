<template>
	<view>
		<!-- 基础卡片 -->
		<view v-if="mode === 'base'" class="listcard">
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

		<!-- 多图模式 -->
		<view v-if="mode === 'column'" class="listcard mode-column">
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架uni-app框架</text>
					<view class="listcard-image">
						<view v-for="item in 4" class="listcard-item_image"><image src="../../static/tabbar/logo.png" mode="aspectFill"></image></view>
					</view>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-label"><view class="listcard-content_des-label-item">前端</view></view>
					<view class="listcard-content_des-browse">1100浏览</view>
				</view>
			</view>
		</view>

		<!-- 大图模式 -->
		<view v-if="mode == 'image'" class="listcard mode-image">
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
	},
	props: {
		mode: {
			type: String,
			default: 'base'
		}
	}
};
</script>

<style lang="scss" scoped>
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
	&.mode-column {
		.listcard-content {
			width: 100%;
			margin-left: 0;
		}
		.listcard-image {
			display: flex;
			width: 100%;
			height: 140rpx;
			margin-top: 20rpx;
			.listcard-item_image {
				margin-left: 20rpx;
				width: 100%;
				border-radius: 10rpx;
				overflow: hidden;
				&:first-child {
					margin-left: 0rpx;
				}
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	&.mode-image {
		display: flex;
		flex-direction: column;
		.listcard-image {
			width: 100%;
			height: 200rpx;
		}
		.listcard-content {
			margin-top: 20rpx;
		}
	}
}
</style>
