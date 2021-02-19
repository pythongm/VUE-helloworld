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
	<el-container style="width: 60%; margin: 0 auto;" v-if="book">
		<el-header v-if="book">
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
			<el-main>
				<el-row :gutter="20">
					<img :src='book.mainimg' alt="" style="height: 200px;">
					<p>{{book.outline}}</p>
					<el-col :span="6" v-for="(a,index) in book.articles" :key="a.title">
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
</template>

<script>
	// import {
	// 	articles,
	// 	books
	// } from '../data/bookdata.js'
	export default {
		data() {
			return {
				articles:[],
				book: null,
				user:null,
				has:false
			}
		},
		created() {
			// let datas = this.$mock.mock({
			// 	"books|30":[
			// 		{
			// 			"title": "@CTITLE",
			// 			"mainimg": "@IMAGE(240X320,@COLOR)",
			// 			"outline": "@CSENTENCE(50,100)",
			// 			"id|+1": 101
			// 		}
			// 	],
			// 	"articles|200":[
			// 		{
			// 			"id|+1": 100001,
			// 			"title": "@CTITLE",
			// 			"bookid": "@NATURAL(101,130)",
			// 			"content": "@CSENTENCE(500,1000)"
			// 		}
			// 	]
			// })
			let user = this.$jscookie.get("token")
			if(user){
				this.user=user;
			}
			this.$axios({
				url:`books/${this.$route.params.pk}/`,
				method:'get'
			}).then(res=>{
				this.book = res.data;
				this.has = res.data.collectinfo.hascollect
			}).catch(err=>{
				console.log("err",err);
			})
			
		},
		methods:{
			// go(){
			// 	this.$router.go(-1)
			// }
			add(){
				this.$message('加入书架');
				this.has=true
				// this.$store.commit("addCollect",this.book.id)
				this.$axios({
					url:'collects/',
					method:'post',
					data:{
						book:this.book.title
					}
				}).then(res=>{
					console.log("收藏成功",res)
				}).catch(err=>{
					console.log("err",err);
				})
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
