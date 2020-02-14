<template>
	<section class="article-tag">
		<section class="container bg-white">
			<div class="tag-title flex-cc pt-4">
				<my-icon type="tag" size="38" />
				<span class="px-3 font-26">文章标签</span>
			</div>
			<div class="tag-list d-flex flex-wrap justify-content-center p-3">
				<div class="m-3" v-for="(tag,i) in tag_list">
					<div class="px-3 py-2 tag-info rounded" :class="{select:i===cur_num}" :style="{background:tag.bg_color}" @click="chooseTag(i)">{{tag.name}}</div>
				</div>
			</div>
		</section>
		
		<section class="container bg-white mt-4">
			<div class="card-columns pt-4">
				<article class="rounded border border-secondary mb-3" v-for="art in art_list">
					<div class="card m-0" @click="goArticleInfo(art.art_id)">
						<img :src="art.img" class="card-img-top" alt="">
						<div class="card-img-overlay">
							<h5 class="card-title">{{art.title}}</h5>
						</div>
						<div class="card-body">
							<p class="card-text">{{art.abstract}}</p>
						</div>
					</div>
					<div class="card">
						<p class="card-text">{{art.time|formatDate}}</p>
						<p class="card-text"><small class="m-1 py-1 px-2 bg-tag rounded-pill" v-for="tag in art.tag">{{tag}}</small></p>
					</div>
				</article>
			</div>
		</section>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				tag_list:[{
					name:'tag1',
					bg_color:''
				},{
					name:'tag2',
					bg_color:''
				},{
					name:'tag3',
					bg_color:''
				},{
					name:'tag4',
					bg_color:''
				},{
					name:'tag5',
					bg_color:''
				},{
					name:'tag6',
					bg_color:''
				},{
					name:'tag7',
					bg_color:''
				},{
					name:'tag8',
					bg_color:''
				},{
					name:'tag9',
					bg_color:''
				},{
					name:'tag10',
					bg_color:''
				},{
					name:'tag11aaaaa',
					bg_color:''
				},],
				tag_color: ["#FFCCCC", "#FFE5CC", "#FFFFD8", "#CCFFCC", "#D8D8FF", "#CCFFFF", "#FFD8FF"],
				cur_num:'',
				art_list:[{
						img: require('@/assets/blog.jpeg'),
						title: '文章标题1',
						art_id: '00001',
						abstract: '摘要 XXXXXXX XXXXX X XXXXX XX XXXXX  XXXX XX  XXXXX XXX X XX   XXXX',
						time: new Date(),
						classify: '分类',
						tag: ['标签1', '标签2']
					}, {
						img: require('@/assets/blog.jpeg'),
						title: '文章标题2',
						art_id: '00002',
						abstract: '摘要 XXXXXXX XXXXX X XXXXX XX XXXXX  XXXX XX  XXXXX XXX X XX   XXXX',
						time: new Date(),
						classify: '分类',
						tag: ['标签1', '标签2']
					}, {
						img: require('@/assets/blog.jpeg'),
						title: '文章标题3',
						art_id: '00003',
						abstract: '摘要 XXXXXXX XXXXX X XXXXX XX XXXXX  XXXX XX  XXXXX XXX X XX   XXXX',
						time: new Date(),
						classify: '分类',
						tag: ['标签1', '标签1']
					}, {
						img: require('@/assets/blog.jpeg'),
						title: '文章标题4',
						art_id: '00004',
						abstract: '摘要 XXXXXXX XXXXX X XXXXX XX XXXXX  XXXX XX  XXXXX XXX X XX   XXXX',
						time: new Date(),
						classify: '分类',
						tag: ['标签1', '标签1']
					}, {
						img: require('@/assets/blog.jpeg'),
						title: '文章标题5',
						art_id: '00005',
						abstract: '摘要 XXXXXXX XXXXX X XXXXX XX XXXXX  XXXX XX  XXXXX XXX X XX xxx  XXXX',
						time: new Date(),
						classify: '分类',
						tag: ['标签1', '标签1']
					}, {
						img: require('@/assets/blog.jpeg'),
						title: '文章标题6',
						art_id: '00006',
						abstract: '摘要 XXXXXXX XXXXX X XXXXX XX XXXXX  XXXX XX  XXXXX XXX X XX  xxxxx XXXX',
						time: new Date().setFullYear(2019, 11, 3),
						classify: '分类',
						tag: ['标签1', '标签1']
					}],
			};
		},
		methods:{
			chooseTag(idx,tag){
				this.cur_num = idx;
				this.cur_tag = tag;
			},
			goArticleInfo(e) {
				this.$router.push({
					path: `/article/${e}`
				})
			}
		},
		created() {
			this.tag_list.forEach((v,i)=>v.bg_color=this.tag_color[i%7])
		}
	}
</script>

<style lang="scss" scoped>
	.article-tag{
		.tag-info:hover{
			cursor: pointer;
			color: #FFFFFF;
			background-image:linear-gradient(to right, #7FFF7F, #FFB2B2) !important;
		}
		
		.select{
			color: #FFFFFF;
			background-image:linear-gradient(to right, #FF7863, #7FFF7F) !important;
		}
		
		
		.card-columns {
			.card {
				border: none !important;
			}
		}
	}
	
	
</style>
