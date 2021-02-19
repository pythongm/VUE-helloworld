<template>
	<div id="app">
		<el-container>
			<el-header>
				<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
				background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="1">
						<router-link :to="{name:'Home'}">首页</router-link>
					</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的</template>
						<el-menu-item index="2-1">
							<router-link :to="{name:'Collect'}" style="color: white;text-decoration: none;">收藏<i class="el-icon-reading"></i></router-link>
						</el-menu-item>
					</el-submenu>
					<template v-if="userinfo">
						<el-menu-item class="rt" index="4" @click="logout">退出</el-menu-item>
						<el-menu-item class="rt" index="3">
							<router-link :to="{name:'Center'}">{{userinfo.username}}</router-link>
						</el-menu-item>
					</template>
					<template v-else>
						<el-menu-item class="rt" index="4">
							<router-link :to="{name:'Regist'}">注册</router-link>
						</el-menu-item>
						<el-menu-item class="rt" index="3">
							<router-link :to="{name:'Login'}">登录</router-link>
						</el-menu-item>
					</template>
				</el-menu>
			</el-header>
			<el-main>
				<router-view />
			</el-main>
			<el-footer>
				关于我们| 诚聘英才| 商务合作| 法律声明| 帮助中心| 作者投稿| 联系我们| 友情链接| 谨防诈骗
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex2: '1',
				user: null,
				userinfo:null
			};
		},
		created() {
			this.$bus.$on("userlogin",_u=>{
				this.user=_u
				this.$axios({
					url:"users/getuserinfo/",
					method:"get"
				}).then(res=>{
					console.log(res,"userinfo");
					this.userinfo=res.data
				})
			})
			
			let user =this.$jscookie.get('token')
			
			if(user)
			{
				this.user=user;
				this.$axios({
					url:"users/getuserinfo/",
					method:"get"
				}).then(res=>{
					console.log(res,"userinfo");
					this.userinfo=res.data
				})
			}
		},
		beforeDestroy() {
			this.$bus.$off("userlogin")
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			logout() {
				if (this.$route.name != "Home") {
					this.$router.push({
						name: "Home"
					});
				}
				this.user = null;
				this.$jscookie.remove("token")
			},
		}
	}
</script>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;

		a {
			text-decoration: none;
		}


		.el-header {
			padding: 0;

			.rt {
				float: right;
			}
		}

		.el-main {
			background-color: #E9EEF3;
			color: #333;
			text-align: center;
		}

		.el-footer {
			background-color: #B3C0D1;
			color: #333;
			text-align: center;
			line-height: 60px;
		}
	}
</style>
