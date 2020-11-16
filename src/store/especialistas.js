export default {
    namespaced: true,
    state: {
      user:'',
      especialistas:[]

    },
    mutations: {
        fetchEspecialistas(state, response) {
            state.especialistas = response
        }
    },
    actions: {
      async fetchEspecialistas(state) {
        let response 
        try {
            // console.log(credentials)
            response = await this._vm.$http.get('especialista')
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
        state.commit("fetchEspecialistas", response.data)
      }
    },
    modules: {
    },
    getters: {
        getEspecialistas: state => state.especialistas
      }
  }