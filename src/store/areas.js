export default {
    namespaced: true,
    state: {
      user:'',
      areas:[]
      

    },
    mutations: {
        fetchAreas(state, response) {
            state.areas = response
        }
    },
    actions: {

      async fetchAreas(state) {
        let response 
        try {
            response = await this._vm.$http.get('area')
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
        state.commit("fetchAreas", response.data)
        
      }
      
    },
    modules: {
    },
    getters: {
        getAreas: state => state.areas
      }
  }