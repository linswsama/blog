<template>
	<div id="app" class="flex-col">
		<header class="navbar navbar-expand-md navbar-dark fixed-top" :class="isShadow?'shadow-sm':''">
			<nav class="container">

				<router-link class="navbar-brand" to="/home" tag="span">
					<img src="@/assets/logo.png" alt="logo" style="width:40px;" />
				</router-link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
					<span class="navbar-toggler-icon"></span>
				</button>


				<div class="collapse navbar-collapse flex-row-reverse" id="collapsibleNavbar">
					<ul class="navbar-nav d-flex text-center" data-toggle="collapse" data-target="#collapsibleNavbar">
						<router-link class="nav-item flex-c" v-for="nav in navList" :key="nav.title" :to="nav.path" tag="li" active-class="nav-active">
							<my-icon :type="nav.icon" size="20" />
							<div>{{nav.title}}</div>
						</router-link>
						<li class="search flex-c">
							<my-icon type="search" size="20" />
						</li>
					</ul>
				</div>

			</nav>
		</header>
		<section class="slied bg-main">
			<div class="brand container">
				<div class="title">致力于前后端开发技术</div>
				<div class="description">一个90后程序员，终身学习者。 </div>
			</div>
		</section>

		<router-view class="flex-1"></router-view>

		<footer class="page-foo bg-main pt-3">
			<div class="container">
				<div class="row">
					<div class="foo-left col-sm-8">底部不知道写啥</div>
					<div class="foo-right col-sm-4">
						<a href="">
							<my-icon type="github" size="30" /></a>
						<a href="">
							<my-icon type="email" size="30" /></a>
						<a href="">
							<my-icon type="weixin" size="30" /></a>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {},
		data() {
			return {
				navList: [{
					title: '首页',
					path: '/home',
					icon: 'home1'
				}, {
					title: '标签',
					path: '/tag',
					icon: 'tag'
				}, {
					title: '分类',
					path: '/classify',
					icon: 'classify'
				}, {
					title: '关于我',
					path: '/about',
					icon: 'me'
				}, {
					title: '写文章',
					path: '/write_article',
					icon: 'pen'
				}],
				isShadow: false
			};
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
			window.addEventListener('resize', this.handleResize);
			//$('[data-toggle="tooltip"]').tooltip();
		},
		methods: {
			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				this.scrollTop > 0 ? this.isShadow = true : this.isShadow = false;
			},
			userAgent() {
				let userAgentInfo = navigator.userAgent;
				let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
				for (let v = 0; v < Agents.length; v++) {
					if (userAgentInfo.indexOf(Agents[v]) > 0) {
						localStorage.setItem('isPC',false)
						break;
					}else{
						localStorage.setItem('isPC',true)
					}
				}
			},
			goTop(){
				
			}
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll);
			window.removeEventListener('resize', this.handleResize);
		},
		created() {
			this.userAgent()
			
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-height: 100vh;
		text-align: center;
		color: #2c3e50;
		background: $bg-fen;

		.navbar {
			height: 58px;
			background: $bg-nav;

			.navbar-nav {
				//background: #002451;

				li {
					height: 58px;
					padding: 0 15px;
					font-size: 14px;
					color: $col-qlv;
				}

				li:hover {
					cursor: pointer;
					background: $bg-foo;
				}

				.nav-active {
					color: $col-main;
				}
			}
		}

		.slied {
			box-sizing: border-box;
			min-height: 46vh;
			margin-top: -50px;
			margin-bottom: -40px;
			padding-top: 15vh;
			padding-bottom: 40px;

			.brand {
				.title {
					font-size: 50px;
				}

				.description {}
			}
		}

		.page-foo {
			height: 100px;

			.foo-left {
				flex: 2;
			}

			.foo-right {
				flex: 1;

				a {
					margin: 0 10px;
					color: inherit;
					text-decoration: none;
				}
			}
		}
	}
</style>
