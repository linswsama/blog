<template>
	<div class="classify">
		<main>
			<section class="container bg-white">
				<div class="tag-title flex-cc pt-4">
					<my-icon type="tag" size="38" />
					<span class="px-3 font-26">文章分类</span>
				</div>
				<div class="tag-list row p-3">
					<div class="col-5 col-md-2 mb-3" v-for="(tag,i) in tag_list">
						<div class="py-2 bg-tag" :class="{select:tag.isChoose}" @click="chooaseTag(i)">{{tag.name}}</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tag_list: [{
					name: 'tag1',
					isChoose:false,
					bg_color: ''
				}, {
					name: 'tag2',
					isChoose:false,
					bg_color: ''
				}, {
					name: 'tag3',
					isChoose:false,
					bg_color: ''
				}, {
					name: 'tag4',
					isChoose:false,
					bg_color: ''
				}, {
					name: 'tag5',
					isChoose:false,
					bg_color: ''
				}, {
					name: 'tag6',
					isChoose:false,
					bg_color: ''
				}, {
					name: 'tag7',
					isChoose:false,
					bg_color: ''
				}, {
					name: 'tag8',
					isChoose:false,
					bg_color: ''
				}, {
					name: 'tag9',
					isChoose:false,
					bg_color: ''
				}, {
					name: 'tag10',
					isChoose:false,
					bg_color: ''
				}, {
					name: 'tag11',
					isChoose:false,
					bg_color: ''
				}, ]
			};
		},
		methods: {
			goRegister() {
				this.$router.push({
					path: '/register'
				});
			},
			chooaseTag(idx){
				// console.log(i)
				// this.tag_list[i].isChoose = true;
				// this.$forceUpdate()
				this.tag_list.forEach((v,i)=>{
					if (idx== i) {
						v.isChoose = true
					} else{
						v.isChoose = false
					}
				})
			}
		},
		created() {
			//console.log(this.$data)
		}
	}
</script>

<style lang="scss" scoped>
	.classify {


		main {}

		.select {
			color: #FFFFFF;
			background-image: linear-gradient(to right, #FF7863, #7FFF7F) !important;
		}
	}
</style>
