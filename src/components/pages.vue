<template>
	<section class="pages container">
		<div class="flex-cc py-3">
			<div class="bg-arc text-white" @click="changePage('back')">
				<my-icon type="back" size="36" />
			</div>
			<div class="page-info">{{cur_page}}/{{all_page}}</div>
			<div class="bg-arc text-white" @click="changePage('next')">
				<my-icon type="next" size="36" />
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		props:{
			cur_page:{
				type: [Number, String],
				default: ''
			},
			all_page:{
				type: [Number, String],
				default: ''
			}
		},
		data(){
			return{
				
			};
		},
		methods:{
			changePage(e){
				this.$emit('click',e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pages {
	
		.page-info {
			flex: 1;
		}
	
		.iconfont {
			line-height: 50px;
		}
	}
</style>
