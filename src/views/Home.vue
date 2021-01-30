<template>
	<!-- <div class="home"> -->
	<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
	<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<heiworld msg="123345" :num="20"></heiworld>
	<hiworld msg="123345" :num="20" @toparent="myshow"> <h1 slot="top">Home你好</h1> <h1 slot="inner">世界你好</h1></hiworld> -->
	<!-- <heart :stateprop="state1" @tellparent="statechange"><span slot="to">给商品点赞:</span></heart>
	<br>
	<heart :stateprop="state2" @tellparent="state2change"><span slot="to">给快递点赞:</span></heart>
	<br>
	<heart :stateprop="state3" @tellparent="state3change"><span slot="to">给客服点赞:</span></heart>
	<br>
	<star :starnumprop="star1" @tellparent="star1change"><span slot="to">给商品评星:</span></star>
	<br>
	<star :starnumprop="star2" @tellparent="star2change"><span slot="to">给快递评星:</span></star>
	<br>
	<star :starnumprop="star3" @tellparent="star3change"><span slot="to">给客服评星:</span></star>
	<br>
	<step v-if="show"></step><button @click="show=!show">切换</button> -->
	<!-- </div> -->
	<div class="book">
<!-- 		<el-carousel :interval="4000" type="card" style="width: 500px;margin: 100px auto;">
			<el-carousel-item v-for="b in books" :key="b.id">
				<router-link :to="'/book/'+b.id">
					<img :src="b.mainimg" class="image" style="width: 100%;height: 100%;">
				</router-link>
			</el-carousel-item>
		</el-carousel> -->
		<el-row :gutter="20">
			<el-col :span="6" v-for="b in books" :key="b.id">
				<router-link :to="'/book/'+b.id">
					<el-card :body-style="{ padding: '0px' }" shadow="hover" class="book">
						<img :src="b.mainimg" class="image">
						<div style="padding: 14px;">
							<span>{{b.title}}</span>
						</div>
					</el-card>
				</router-link>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import {
		books
	} from '../data/bookdata.js'
	// console.log(books)
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	// import heiworld from '@/components/heiworld.vue'
	// import heart from '@/components/heart/heart.vue'
	// import star from '@/components/star/star.vue'
	// import step from '@/components/lifetime.vue'
	export default {
		components: {
			//    HelloWorld,
			// heiworld
			// heart,
			// star,
			// step
		},
		methods: {
			// myshow(e){
			// 	console.log("Home组件接收了",e);
			// }
			// 请求API接口 获取点赞状态

			// statechange(e){
			// 	console.log("通知服务器再将商品点赞状态设置为",e.state)
			// },
			// state2change(e){
			// 	console.log("通知服务器再将快递点赞状态设置为",e.state)
			// },
			// state3change(e){
			// 	console.log("通知服务器再将客服点赞状态设置为",e.state)
			// },
			// star1change(e){
			// 	console.log("通知服务器再将商品评星状态设置为",e.starnum)
			// },
			// star2change(e){
			// 	console.log("通知服务器再将快递评星状态设置为",e.starnum)
			// },
			// star3change(e){
			// 	console.log("通知服务器再将客服评星状态设置为",e.starnum)
			// },
		},
		data() {
			return {
				// show:true,
				// // 从服务器获取商品点赞状态
				// state1:true,
				// state2:false,
				// state3:false,

				// star1:0,
				// star2:0,
				// star3:0
				books: books

			}
		}
	}
</script>

<style>
	.book {
		width: 88%;
		margin: 0 auto;

		img {
			width: 100%;
		}
	}

	.el-carousel__item{
		color: #475669;
		font-size: 14px;
		opacity: 1;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
