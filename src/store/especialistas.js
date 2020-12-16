export default {
    namespaced: true,
    state: {
      user:'',
      especialistas:[],
      passingData:null
    },
    mutations: {
        fetchEspecialistas(state, response) {
            state.especialistas = response
        },

        setPassingData(state, passingData) {
          state.passingData = passingData
        }
    },
    actions: {

      async fetchEspecialistas(state) {
        let response 
        try {
            response = await this._vm.$http.get('especialista')
        } catch (error) {
            console.error(error);
        }
        state.commit("fetchEspecialistas", response.data)
      },

      setPassingData(state, passingData) {
        state.commit("setPassingData", passingData)
      },

    },
    modules: {
    },
    getters: {
        getEspecialistas: state => state.especialistas,
        getPassingData: state => state.passingData
      }
  }