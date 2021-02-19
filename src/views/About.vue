<template>
	<div class="about">
		<div>
			<h2>这是一个普通方法计数器</h2>
			<p>
				<button @click="reduce">-</button>
				<span>{{ num }}</span>
				<button @click="add">+</button>
			</p>
		</div>
		<div>
			<h2>这是一个计算属性计数器</h2>
			<p>
				<button @click="num2--">-</button>
				<span>{{num2}}</span>
				<button @click="num2++">+</button>
			</p>
		</div>
		<p>{{normal()}}</p>
		<p>{{comput1}}</p>
		<div>
			<hiworld msg="123456" :num="20" @toparent="myshow">About你好</hiworld>
		</div>
		<transition>
			<div class="target" v-show="play" style="margin: 0 auto;"></div>
		</transition>
		<button @click="play=!play">动画</button>
		<br>
		<br>
		<br>
		<span class="iconfont icon-shouye"></span>
		<span class="iconfont icon-caidan"></span>
		<span class="iconfont icon-liebiao"></span>
		<br>
		<br>
		<br>
		<button @click="login">发起请求</button>
		<button @click="diarys">获取日记列表</button>
		<button @click="diary">获取指定日记</button>
		<br>
		<br>
		<br>
		<van-button type="primary">主要按钮</van-button>
		<van-button type="info">信息按钮</van-button>
		<van-button type="default">默认按钮</van-button>
		<van-button type="warning">警告按钮</van-button>
		<van-button type="danger">危险按钮</van-button>
		<br>
		<br>
		<br>
		<van-button plain type="primary">朴素按钮</van-button>
		<van-button plain type="info">朴素按钮</van-button>
		<br>
		<br>
		<br>
		<van-button plain hairline disabled type="primary">细边框按钮</van-button>
		<van-button plain hairline type="info">细边框按钮</van-button>
		<br>
		<br>
		<br>
		<van-button loading type="primary" />
		<van-button loading type="primary" loading-type="spinner" />
		<van-button loading type="info" loading-text="加载中..." />
	</div>
</template>


<script>
	export default {
		data() {
			return {
				num: 0,
				num2: 0,
				play: true
			}
		},
		methods: {
			normal() {
				console.log("普通方法执行了")
				return "普通方法"
			},
			reduce() {
				this.num--;
				if (this.num <= 0) {
					this.num = 0;
				}
			},
			add() {
				this.num++;
			},
			myshow(e) {
				console.log("About组件接收了", e);
			},
			login() {
				this.$axios.post('http://127.0.0.1:8000/obtainjwt/', {
					username: 'admin',
					password: '123456'
				}).then(function(res) {
					console.log("请求结果", res);
				}).catch(function(error) {
					console.log("请求错误", error);
				});
			},
			diarys() {
				this.$axios.get('http://127.0.0.1:8000/diarys/', {
					params: {
						page: 2,
						page_size: 2
					}
				}).then(function(res) {
					console.log("请求结果", res);
				}).catch(function(error) {
					console.log("请求错误", error);
				});
			},
			diary(){
				this.$axios.get('http://127.0.0.1:8000/diarys/1/', {
				}).then(function(res) {
					console.log("请求结果", res);
				}).catch(function(error) {
					console.log("请求错误", error);
				});
				this.$jscookie.set("token","YWRtaW46MTIzNDU2")
			}

		},
		computed: {
			comput1() {
				console.log("计算属性执行了")
				return "计算属性" + this.num
			}
		},
		watch: {
			num(newvalue, oldvalue) {
				console.log("监听到了num变化了", newvalue, oldvalue);
			},
			num2(newvalue, oldvalue) {
				console.log("监听到了num2变化了", newvalue, oldvalue);
			},
		}
	}
</script>

<style>
	@keyframes hide {
		from {
			width: 100px;
			height: 100px;
			opacity: 1;
			left: 0;
		}

		to {
			width: 0;
			height: 0;
			opacity: 0;
			left: -200px;
		}
	}

	/* .target{
		width: 100px;
		height: 100px;
		background-color: red;
		position: relative;
	}
	.v-enter{
		opacity: 0;
		left: -200px;
		width: 0;
		height: 0;
	}
	.v-enter-active{
		transition: all 2s linear;
	}
	.v-enter-to{
		opacity: 1;
		left: 0;
	}
	.v-leave{
		opacity: 1;
		left: 0;
	}
	.v-leave-active{
		transition: all 2s linear;
	}
	.v-leave-to{
		opacity: 0;
		left: -200px;
		width: 0;
		height: 0;
	} */

	.target {
		width: 100px;
		height: 100px;
		background-color: red;
		position: relative;
	}

	.v-enter {}

	.v-enter-active {
		animation: hide 2s reverse linear;
	}

	.v-enter-to {}

	.v-leave {}

	.v-leave-active {
		animation: hide 2s linear;
	}

	.v-leave-to {}
</style>
