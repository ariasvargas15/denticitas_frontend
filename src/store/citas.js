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
        let citas
        try {
            citas = await this._vm.$http.get('cita')
        } catch (error) {
            console.error("ERROR", error)
        }
        state.commit("fetchCitas", citas.data)
      }
    },
    modules: {
    },
    getters: {
        getCitas: state => state.Citas
      }
  }