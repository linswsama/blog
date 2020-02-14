<template>
	<section class="get-passwrd">
		<div class="pass-box p-3">
			<p>通过绑定邮箱找回密码</p>
			<div class="form-group flex-b border-bottom">
				<input type="text" class="form-control" placeholder="请输入账号" v-model="uesrID">
			</div>
			<div class="email-box form-group border-bottom">
				<input type="email" class="form-control" placeholder="请输入绑定邮箱" v-model="uesrEmail">
			</div>
			<div class="verify-box form-group flex-c">
				<div class="border-bottom">
					<input type="text" class="form-control" placeholder="请输入验证码" v-model="uesrVerify">
				</div>
				<button class="btn btn-verify" @click="getVerify">获取验证码</button>
			</div>
			<button class="btn btn-main" @click="goSetPassword">下一步</button>
		</div>

	</section>
</template>

<script>
	export default {
		data() {
			return {
				isPC: true,
				uesrID: '',
				uesrEmail: '',
				uesrVerify: ''
			};
		},
		methods: {
			getVerify() {
				if (!this.uesrID) {
					this.$toast.show('请输入账号')
					return
				}else if(!this.uesrEmail){
					this.$toast.show('请输入绑定邮箱')
					return
				}
			},
			goSetPassword() {
				if (!this.uesrVerify) {
					this.$toast.show('请输入验证码');
					return
				}
				localStorage.setItem('userID', this.uesrID)
				this.$router.push({
					path: '/user/set_password'
				});
			}
		},
		created() {}
	}
</script>

<style lang="scss" scoped>
	.get-passwrd {
		.btn-verify {
			flex: 1;
		}
	}
</style>
