export default {
    namespaced: true,
    state: {
      user:'',
      Citas:[]

    },
    mutations: {
        fetchCitas(state, response) {
            state.Citas = response
        }
    },
    actions: {
      async fetchCitas(state) {
        let response 
        try {
            // console.log(credentials)
            response = await this._vm.$http.get('cita')
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
        state.commit("fetchCitas", response.data)
      }
    },
    modules: {
    },
    getters: {
        getCitas: state => state.Citas
      }
  }