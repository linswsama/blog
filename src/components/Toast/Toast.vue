<template>
	<div class="my-toast" v-if="isShow">
		<div class="message">{{message}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				message: ''
			};
		},
		methods: {
			show(message, duration=2000) {
				this.isShow = true;
				this.message = message;
				setTimeout(() => {
					this.isShow = false;
					this.message = '';
				}, duration)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-toast {
		position: fixed;
		top: 50vh;
		left: 50vw;
		max-width: 50vw;
		transform: translate(-50%,-50%);
		z-index: 99;
		.message{
			padding: 5px 10px;
			border-radius: 6px;
			color: #FFFFFF;
			background-color: rgba(255,127,127,.6);
		}
	}
</style>
