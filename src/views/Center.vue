<template>
	<div class="center">
		<div>
			<h2>{{user}}的个人中心</h2>
		</div>
		<div>
			<router-view />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: null
			}
		},
		created() {
			this.user = this.$jscookie.get("user")
		}
	}
</script>

<style>
</style>
