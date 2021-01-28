<template>
	<view class="tab">
		<scroll-view scroll-x class="tab-scroll">
			<view class="tab-scroll_box">
				<view class="tab-scroll_item" v-for="(item,index) in list" :key="index">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666" ></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{name: "前端"},
					{name: "后端"},
					{name: "前端"},
					{name: "前端"},
					{name: "前端"},
					{name: "前端"},
					{name: "前端"},
					{name: "前端"},
					{name: "前端"},
					{name: "前端"},
					{name: "前端"},
					{name: "前端"}
				]
			};
		}
	}
</script>

<style lang="scss">
.tab {
	display: flex;
	align-items: center;
	width: 100%;
	background-color: #fff;
	border: 1rpx solid #fff;
	box-sizing: border-box;
	.tab-scroll {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		.tab-scroll_box {
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			height: 90rpx;
			box-sizing: border-box;
			.tab-scroll_item {
				flex-shrink: 0;
				color: #333;
				padding: 0 20rpx;
				font-size: 28rpx;
			}
		}
	}
	
	.tab-icons {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90rpx;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			width: 1px;
			background-color: pink;
		}
	}
}
</style>
