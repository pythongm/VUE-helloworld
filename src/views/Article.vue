<template>
	<div class="article">
		{{article.content}}
		<p><router-link :to="({name:'Book',params:{pk:article.bookid}})">返回目录</router-link></p>
	</div>
</template>
<!--  -->
<script>
	import {
		articles,
	} from '../data/bookdata.js'
	export default {
		data() {
			return {
				article: null
			}
		},
		created() {
			this.article = articles.filter(item => {
				return item.id == this.$route.params.pk;
			})[0]
		}
	}
</script>

<style>
</style>
