export default {
    namespaced: true,
    state: {
      user:'',
      clientes:[]

    },
    mutations: {
        fetchClientes(state, response) {
            state.clientes = response
        }
    },
    actions: {
      async fetchClientes(state) {
        let response 
        try {
            // console.log(credentials)
            response = await this._vm.$http.get('cliente')
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
        state.commit("fetchClientes", response.data)
      },
      async registrar(_,credentials) {
        let response 
        try {
          console.log(credentials)
          response = await this._vm.$http.post('registro', credentials)
        } catch (error) {
          console.error(error);
        }
        return response
      },
      async editar(_,credentials) {
        let response 
        try {
          console.log(credentials)
          response = await this._vm.$http.put('cliente', credentials)
        } catch (error) {
          console.error(error);
        }
        return response
      }
    },
    modules: {
    },
    getters: {
        getClientes: state => state.clientes
      }
  }