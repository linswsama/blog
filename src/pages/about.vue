<template>
	<div class="about container bg-white">
		<section class="">
			<div class="row pt-3">
				<div class="left d-flex justify-content-center col-3">
					<div class="px-2"><p>文章</p><span>{{art_tatol}}</span></div>
					<div class="px-2"><p>分类</p><span>{{art_classify}}</span></div>
					<div class="px-2"><p>标签</p><span>{{art_tag}}</span></div>
				</div>
				<div class="right col text-muted">
					<img :src="user.avatar" class="rounded-circle" alt="" height="160px">
					<P class="font-26">{{user.id}}</P>
					<span>{{user.work}}</span>
				</div>
			</div>
		</section>
		<section class="introduction"></section>
		<section>
			<div class="logout" @click="userLogout">退出登录</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				art_tatol: 28,
				art_classify: 3,
				art_tag: 19,
				user:{
					avatar:require('@/assets/avatar.png'),
					id:'XXXXXX',
					work:'前端工程师'
				}
			};
		},
		methods: {
			userLogout() {
				localStorage.removeItem('isLogin');
				this.$router.push({
					path: '/user/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.about {
		p{margin: 0;}
	}
</style>
