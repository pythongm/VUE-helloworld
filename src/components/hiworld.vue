<template>
	<div class="hello">
		<h1>这是一个全局组件</h1>
		<p>我接收到的msg值为{{msg}}</p>
		<p>我接收到的num值为{{num}}</p>
		<button @click="myfun">子传父</button>
	</div>
</template>

<script>
export default {
  name: 'hiworld',
  props: {
	msg:String,
	num:{
		type:Number,
		required:true,
		
	}
  },
  methods:{
	myfun(){
		this.$emit("toparent",{"name":"qiku"});
	}
  }
}
</script>

<style>
</style>
