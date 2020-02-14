<template>
	<span  :style="{ color: color, 'font-size': size + 'px' }" class="iconfont" :class="['icon-'+type]" @click="_onClick"></span>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: 'internal'
			},
			size: {
				type: [Number, String],
				default: 'internal'
			}
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
	@import "~@/style/iconfont.css";
</style>

