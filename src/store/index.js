import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 相当于vue中data
		collectBooks:localStorage.getItem("vuex")?JSON.parse(localStorage.getItem("vuex")).collectBooks:[]
	},
	getters: {
		// 相当于vue中的computed
		getCollectBoos(state) {
			return state.collectBooks;
		}
	},
	mutations: {
		// 相当于vue中的methods   调用同步函数使用 this.$store.commit("函数名",实参)
		addCollect(state, id) {
			state.collectBooks.push(id)
		},
		removeCollect(state, id) {
			let index = state.collectBooks.indexOf(id);
			state.collectBooks.splice(index, 1)
		}
	},
	actions: {
		// 是异步的 用来执行同步的mutations  调用异步函数 this.$store.dispatch("函数名",实参)
		addCollectAsync(context, id) {
			context.commit("addCollect", id)
		},
		removeCollectAsync(context, id) {
			context.commit("removeCollect", id);
		}
	},

	modules: {
		
	},
	plugins: [createPersistedState()],
})
