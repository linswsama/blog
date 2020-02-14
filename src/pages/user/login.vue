<template>
	<section>
		<div class="login-box p-3" v-if="isLoginBox">
			<div class="form-group flex-b border-bottom">
				<input type="text" class="form-control" placeholder="请输入账号" v-model="uesr.ID">
				<my-icon type="close" size="22" @click="selectUesrID" />
			</div>
			<div class="password-box form-group flex-b">
				<div class="passbox-input border-bottom">
					<input :type="passShow" class="form-control" v-model="uesr.password" placeholder="请输入密码">
				</div>
				<div class="pl-2 flex-cc">
					<my-icon :type="passIcon" size="22" @click="changPassShow" />
					<label class="form-check-label pl-2" for="exampleCheck1" @click="getPassword">忘记密码</label>
				</div>
			</div>
			<button class="btn btn-main" @click="userLogin">登录</button>
		</div>
		<div class="register-box p-3" v-else>
			<div class="id-box mb-2 flex-b border-bottom">
				<input type="text" class="form-control" placeholder="请输入账号" v-model="uesr.ID">
				<my-icon type="close" size="22" @click="selectUesrID" />
			</div>
			<div class="pass-box mb-2 border-bottom">
				<input :type="passShow" class="form-control" placeholder="请输入密码" v-model="uesr.password">
			</div>
			<div class="pass-box mb-3 border-bottom">
				<input :type="passShow" class="form-control" placeholder="请再次输入密码" v-model="confirm_pass">
			</div>
			<button class="btn btn-main" @click="userRegister">注册</button>
		</div>

		<a class="" @click.prevent="changeCard">{{cardName}}</a>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				isLoginBox: true,
				passShow: 'password',
				passIcon: 'pass-hidden',
				uesr: {
					ID: '',
					password: ''
				},
				confirm_pass:'',
				cardName: '注册'
			};
		},
		methods: {
			changPassShow() {
				if (this.passShow == 'password') {
					this.passShow = 'text';
					this.passIcon = 'pass-show'
				} else {
					this.passShow = 'password'
					this.passIcon = 'pass-hidden'
				}
			},
			selectUesrID() {
				this.uesrID = ''
			},
			changeCard() {
				this.isLoginBox = !this.isLoginBox;
				this.cardName = this.isLoginBox ? '注册' : '登录'
			},
			userLogin() {
				console.log('登录')
				localStorage.setItem('isLogin', true)
				this.$router.push({
					path: '/about'
				});
			},
			userRegister(){
				this.$router.push({
					path: '/about'
				});
			},
			getPassword() {
				this.$router.push({
					path: '/user/get_password'
				});
			}
		},
		created() {

		}
	}
</script>

<style lang="scss" scoped>
	.pc {

		.login-box,
		.register-box {
			border: 1px solid $col-sec;
			border-radius: 10px;
		}
	}

	.password-box {
		.passbox-input {
			flex: 1;
		}
	}
</style>
