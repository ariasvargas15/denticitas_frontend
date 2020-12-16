export default {
    namespaced: true,
    state: {
      user:'',
      servicios:[],
      passingData:null

    },
    mutations: {
      fetchServicios(state, response) {
          state.servicios = response
      },

      setPassingData(state, passingData) {
        state.passingData = passingData
      }
    },
    actions: {
      async fetchServicios(state) {
        let response 
        try {
            response = await this._vm.$http.get('servicio')
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
        state.commit("fetchServicios", response.data)
      },

      setPassingData(state, passingData) {
        state.commit("setPassingData", passingData)
      },
    },
    modules: {
    },
    getters: {
        getServicios: state => state.servicios,
        getPassingData: state => state.passingData
      }
  }