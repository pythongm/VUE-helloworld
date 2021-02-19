<template>
	<div class="article" v-if="article">
		<div v-html="article.content"></div>
		<p><router-link :to="({name:'Book',params:{pk:article.book}})">返回目录</router-link></p>
	</div>
</template>
<!--  -->
<script>
	// import {
	// 	articles,
	// } from '../data/bookdata.js'
	export default {
		data() {
			return {
				article: null
			}
		},
		created() {
			// let datas = this.$mock.mock({
			// 	"articles|200":[
			// 		{
			// 			"id|+1": 100001,
			// 			"title": "@CTITLE",
			// 			"bookid": "@NATURAL(101,130)",
			// 			"content": "@CSENTENCE(500,1000)"
			// 		}
			// 	]
			// })
			// this.article = datas.articles.filter(item => {
			// 	return item.id == this.$route.params.pk;
			// })[0]
			this.$axios({
				url:`articles/${this.$route.params.pk}/`,
				method:'get'
			}).then(res=>{
				this.article=res.data;
			})
		}
	}
</script>

<style>
</style>
