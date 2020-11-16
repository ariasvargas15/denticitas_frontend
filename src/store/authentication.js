

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
        console.log(credentials)
        response = await this._vm.$http.post('login', credentials)
      } catch (error) {
        console.error(error);
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