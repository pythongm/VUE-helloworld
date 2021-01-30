<template>
	<div class="heart">
		<span><slot name="to"></slot></span>
		<img :src="state?heartselpng:heartnormalpng" alt="" @click="changestate">
		<span>{{state?"取消":"点赞"}}</span>
	</div>
</template>

<script>
export default {
	props:{
		stateprop:{
			required:true,
			type:Boolean
			
		}
	},
	created(){
		this.state=this.stateprop;
	},
	data(){
		return{
			state:true,
			heartselpng:require("./img/heart.png"),
			heartnormalpng:require("./img/heartsel.png")
		}
	},
	methods:{
		changestate(){
			this.state =!this.state
			this.$emit("tellparent",{"state":this.state})
		}
	},
}
</script>

<style lang="less">
	.heart{
		display: inline-block;
		img{
			vertical-align: -10px;
		}
	}
</style>
