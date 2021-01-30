<template>
	<!-- 	<div class="book">
		<el-row>
			<el-col :span="24">
				<h1>{{book.title}}</h1>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<p>{{book.outline}}</p>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="6" v-for="(a,index) in articles" :key="a.title">
				<router-link :to="'/article/'+a.id">
					<el-tag type="success">第{{index+1}}章--{{a.title}}</el-tag>
				</router-link>
			</el-col>
		</el-row>

	</div> -->
	<el-container style="width: 60%; margin: 0 auto;">
		<el-header>
			<el-col :span="20">
				<h1 class="title">{{book.title}} </h1>
			</el-col>
			<el-col :span="4" style="margin-top: 10px;">
				<template v-if="user">
					<el-button v-if="has" type="success" round disabled>已在书架</el-button>
					<el-button v-else type="success" round @click="add">加入书架</el-button>
				</template>
				<template v-else>
					<el-button type="success" round @click="$router.push({name:'Login',query:{next:$route.path}})">加入书架</el-button>
				</template>
			</el-col>
		</el-header>
		<el-container>
			<el-aside width="300px">
				<img :src='book.mainimg' alt="" style="height: 200px;">
				<p>{{book.outline}}</p>
			</el-aside>
			<el-container>
				<el-main>
					<el-row :gutter="20">
						<el-col :span="6" v-for="(a,index) in articles" :key="a.title">
							<router-link :to="'/article/'+a.id">
								<el-tag type="success" style="margin-top: 10px;">第{{index+1}}章--{{a.title}}</el-tag>
							</router-link>
						</el-col>
					</el-row>
				</el-main>
				<el-footer>
					<router-link :to="({name:'Home'})">返回首页</router-link>
				</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
	import {
		articles,
		books
	} from '../data/bookdata.js'
	export default {
		data() {
			return {
				book: null,
				articles: [],
				user:null,
				has:false
			}
		},
		created() {
			let user = this.$jscookie.get("user")
			if(user){
				this.user=user;
			}
			this.book = books.filter((item)=>{
				return item.id == this.$route.params.pk;
			})[0]
			this.articles=articles.filter((item)=>{
				return item.bookid == this.$route.params.pk;
			})
			
			this.has = this.$store.getters.getCollectBoos.indexOf(this.book.id)>=0?true:false
		},
		methods:{
			// go(){
			// 	this.$router.go(-1)
			// }
			add(){
				this.$message('加入书架');
				this.has=true
				this.$store.commit("addCollect",this.book.id)
			}
		}
	}
</script>

<style>
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;

	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;

	}

	body>.el-container {
		margin-bottom: 40px;
	}
</style>
