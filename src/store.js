import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const url = 'http://localhost:8088/waybills';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    status: 0

  },
  mutations: {
    loadItems (state, itemList) {
      state.items = itemList
    },
    updateStatus (state, newStatus) {
      state.status = newStatus
    }
  },
  getters: {
    getShowItems: (state) => {
      if (state.status === 0) {
        return state.items
      } else if (state.status === 1) {
        return state.items.filter(item => item.status === '已预约')
      } else if (state.status === 2) {
        return state.items.filter(item => item.status === '未预约')
      } else {
        return state.items.filter(item => item.status === '已完成')
      }
    }
  },
  actions: {
    getItems ({ commit }) {
      axios.get(url).then((response) => commit('loadItems', response.data))
    },
    add({dispatch},item){
      axios.post(url,item).then(response => dispatch('getItems'))
    },
    ordered({dispatch},item){
      axios.patch(url+'/'+item.id,item).then(response =>{dispatch('getItems')} )

    }
  }
})
