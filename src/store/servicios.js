export default {
    namespaced: true,
    state: {
      user:'',
      servicios:[]

    },
    mutations: {
        fetchServicios(state, response) {
            state.servicios = response
        }
    },
    actions: {
      async fetchServicios(state) {
        let response 
        try {
            // console.log(credentials)
            response = await this._vm.$http.get('servicio')
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
        state.commit("fetchServicios", response.data)
      },
      async registrar(_,credentials) {
        let response 
        try {
          console.log(credentials)
          response = await this._vm.$http.post('servicio', credentials)
        } catch (error) {
          console.error(error);
        }
        return response
      },
      async eliminar(_,credentials) {
        let response 
        try {
          console.log(credentials)
          response = await this._vm.$http.delete('servicio', credentials)
        } catch (error) {
          console.error(error);
        }
        return response
      }
    },
    modules: {
    },
    getters: {
        getServicios: state => state.servicios
      }
  }