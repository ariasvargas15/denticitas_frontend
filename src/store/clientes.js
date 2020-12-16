export default {
    namespaced: true,
    state: {
      user:'',
      clientes:[],
      passingData:null

    },
    mutations: {
        fetchClientes(state, response) {
            state.clientes = response
        },

        setPassingData(state, passingData) {
          state.passingData = passingData
        }
    },
    actions: {
      async fetchClientes(state) {
        let response 
        try {
            response = await this._vm.$http.get('cliente')
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
        state.commit("fetchClientes", response.data)
      },

      setPassingData(state, passingData) {
        state.commit("setPassingData", passingData)
      },
    },
    modules: {
    },
    getters: {
        getClientes: state => state.clientes,
        getPassingData: state => state.passingData
      }
  }