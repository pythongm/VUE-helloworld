<template>
	<div class="step">
		<button @click="num--">-</button>
		<span>{{num}}</span>
		<button @click="num++">+</button>
	</div>
</template>

<script>
	export default{
		name:"step",
		data(){
			return{
				num:0
			}
		},
		beforeCreate() {
			console.log("组件创建之前",this.$destroy);
		},
		created(){
			console.log("组件创建了",this.num);
		},
		beforeMount() {
			console.log("组件渲染之前");
		},
		mounted(){
			console.log("组件渲染了");
		},
		beforeUpdate() {
			console.log("组件更新之前");
		},
		updated() {
			console.log("组件更新了");
		},
		beforeDestroy() {
			console.log("组件销毁之前");
		},
		destroyed() {
			console.log("组件销毁了");
		}
	}
</script>

<style>
</style>

<!-- 从组件的创建 到组件的销毁过程 每一个阶段 都有一组对应的函数 称为生命周期函数 
生命周期函数是由框架自行调用 不需要用户调用
在VUE中每一个组件都是一个VUE的实例
-->
