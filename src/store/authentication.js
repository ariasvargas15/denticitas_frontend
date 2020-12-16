

export default {
  namespaced: true,
  state: {
    user:''
  },
  mutations: {
    setLogedUser(state, user){
      state.user=user
    }
  },
  actions: {
    async login(state,credentials) {
      let response 
      try {
        response = await this._vm.$http.post('login', credentials)
      } catch (error) {
        response = error;
      }
      state.commit("setLogedUser", credentials.cedula)
      return response
    }
  },
  modules: {
  },
  getters: {
    getLogedUser: state => state.user
  }
}