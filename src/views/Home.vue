<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<heiworld msg="123345" :num="20"></heiworld>
	<hiworld msg="123345" :num="20" @toparent="myshow"></hiworld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import heiworld from '@/components/heiworld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
	heiworld
  },
  methods:{
	myshow(e){
		console.log("Home组件接收了",e);
	}
  }
}
</script>
