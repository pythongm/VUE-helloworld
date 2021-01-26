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
	</div>
</template>


<script>
export default {
	data(){
		return{
			num:0,
			num2:0
		}
	},
	methods:{
		normal(){
			console.log("普通方法执行了")
			return "普通方法"
		},
		reduce(){
			this.num--;
			if(this.num<=0){
				this.num=0;
			}
		},
		add(){
			this.num++;
		}
	},
	computed:{
		comput1(){
			console.log("计算属性执行了")
			return "计算属性"+this.num
		}
	},
	watch:{
		num(newvalue,oldvalue){
			console.log("监听到了num变化了",newvalue,oldvalue);
		},
		num2(newvalue,oldvalue){
			console.log("监听到了num2变化了",newvalue,oldvalue);
		},
	}
}
</script>