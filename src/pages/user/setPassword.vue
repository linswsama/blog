<template>
	<section class="reset-pass">
		<div class="p-3">
			<div class="text-left pl-3">
				<p>用户：{{user.ID}}</p>
				<p>设置新密码</p>
			</div>
			
			<div class="mb-2 border-bottom">
				<input type="password" class="form-control" placeholder="请输入新密码" v-model="user.password">
			</div>
			<div class="mb-3 border-bottom flex-c">
				<input type="password" class="form-control" placeholder="请再次输入密码" v-model="confirm_pass">
				<my-icon :type="icon.type" :color="icon.color" size="22" />
			</div>

			<button class="btn btn-main" @click="confirmPass">确认</button>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					ID: '',
					password: ''
				},
				confirm_pass: '',
				icon:{
					type: '',
					color:''
				}
				
			};
		},
		watch: {
			confirm_pass(val, old) {
				console.log('val')
				if (val && val === this.user.password) {
					this.icon.type = 'correct'
					this.icon.color = "#4CFF4C"
				} else {
					this.icon.type = 'error'
					this.icon.color = "#FF4C4C"
				}
			}
		},
		methods: {
		confirmPass(){
			
		}
		},
		created() {
			this.user.ID = localStorage.getItem('userID');
			localStorage.removeItem('userID');
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
