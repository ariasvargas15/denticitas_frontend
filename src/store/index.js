import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './authentication'
import servicios from './servicios'
import citas from './citas'
import especialistas from './especialistas'
import clientes from './clientes'
import areas from './areas'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication,
    servicios,
    citas,
    especialistas,
    clientes,
    areas
  }
})
