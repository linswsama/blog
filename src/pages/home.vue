<template>
	<div class="home">

		<main>
			<div class="skill container bg-white">
				<div class="skill-title flex-cc pt-3">
					<my-icon type="code" size="38" />
					<p class="px-3 font-26">技术栈</p>
				</div>
				<div class="skill-list row p-3">
					<div class="col-5 col-md-2 mb-3" v-for="skill in skill_list">
						<div class="py-2 bg-tag">{{skill}}</div>
					</div>
				</div>
			</div>

			<div class="article-list container bg-white mt-3 pt-3">
				<div class="card-columns">
					<article class="rounded border border-secondary mb-3" v-for="art in articleList">
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
			</div>
		</main>

	<Pages :cur_page='cur_page' :all_page='all_page' @click="changePage"></Pages>
		
	</div>
</template>

<script>
	import Pages from '@/components/pages.vue'
	
	export default {
		components:{
			Pages
		},
		data() {
			return {
				cur_page: 1,
				all_page: 5,
				articleList: [{
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
				skill_list: ['Vue.js', 'JavaScript', 'HTML/CSS', 'Git','Bootstrap','jQuery','a','...']
			};
		},
		methods: {
			changePage(e){
				if(e == 'next'){
					this.nextPage();
				}else if(e== 'back'){
					this.backPage()
				}
			},
			backPage() {
				if (this.cur_page < 2) {
					return
				}
				this.cur_page--
			},
			nextPage() {
				if (this.cur_page == this.all_page) {
					return
				}
				this.cur_page++
			},
			goArticleInfo(e) {
				this.$router.push({
					path: `/article/${e}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {


		main {

			.skill {
				p {
					margin-bottom: 0;
				}

			}

			.article-list {
				.card {
					border: none;
				}
			}
		}
	}
</style>
