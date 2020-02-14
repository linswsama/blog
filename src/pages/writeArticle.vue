<template>
	<div class="write-article container bg-white p-3">
		<section class="art-title mb-3">
			<div class="bg-main px-3 py-2">标题</div>
			<div class="border-main flex-1"><input class="pl-3" type="text"></div>
			
		</section>
		<section class="art-content  border-main mb-3"></section>
		<section class="art-submit">
			<button class="btn btn-main">保存文章</button>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.write-article{
		.art-title{
			display: flex;
			
			input{
				width: 100%;
				height: 100%;
			}
		}
		.art-content{
			min-height: 500px;
		}
	}
</style>
