<template>
	<div class="regist">
		<h1 style="margin-bottom: 10px;color: #409EFF;">注册</h1>
		<el-row>
			<el-col :span="6" :offset="9">
				<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
					<el-form-item label="邮箱">
						<el-input placeholder="请输入邮箱" v-model="formLabelAlign.email"></el-input>
					</el-form-item>
					<el-form-item label="用户名">
						<el-input placeholder="请输入用户名" v-model="formLabelAlign.username"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input placeholder="请输入密码" v-model="formLabelAlign.password" show-password></el-input>
					</el-form-item>
					<el-form-item label="重复密码">
						<el-input placeholder="请再次输入密码" v-model="formLabelAlign.password2" show-password></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">提交</el-button>
						<el-button @click="$router.push({name:'Login'})">已有账号，去登录</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				labelPosition: 'right',
				formLabelAlign: {
					email:'',
					username: '',
					password: '',
					password2:''
				}
			};
		},
		methods: {
			onSubmit() {
				console.log('注册成功!');
				this.$axios({
					url:"users/",
					method:"post",
					data:{
						email:this.formLabelAlign.email,
						username:this.formLabelAlign.username,
						password:this.formLabelAlign.password,
						password2:this.formLabelAlign.password2
					}
				}).then(res=>{
					console.log("注册结果",res);
					this.$message('注册成功');
					this.$router.push({name:"Login"})
				}).catch(err=>{
					console.log("错误原因",err);
				})
				// this.$jscookie.set('user', 'gm1998', {
				// 	expires: 7
				// })

				// this.$root.$children[0].user = this.$jscookie.get("user")
				// this.$bus.$emit("userlogin", this.$jscookie.get("user"))

				// let next = this.$route.query.next;
				// if (next) {
				// 	this.$router.push(next)
				// } else {
				// 	this.$router.push({
				// 		name: 'Home'
				// 	})
				// }
			}
		}
	}
</script>

<style>
</style>
