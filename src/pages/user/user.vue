<template>
	<div class="container bg-white" :class="isPC?'pc':'phone'">
		<router-view class="pc-box py-5"></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isPC: ''
			};
		},
		methods:{
			
		},
		created() {
			this.isPC = JSON.parse(localStorage.getItem('isPC'))
		}
	}
</script>

<style lang="scss" scoped>
</style>
