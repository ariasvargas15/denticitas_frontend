<template>
  <div class="contenido contenido--perfilLayout">
    
    
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name: 'EditHistoriaClinica',
    computed:{
       ...mapGetters({
        especialistas: "especialistas/getEspecialistas"
      }),
      ...mapActions({
        fetchEspecialistas: 'especialistas/fetchEspecialistas'
      })
    },

    data() {
      return {
          apellido:"oncdownocd",
          nombre:"ncoenoien"
      }
    },

    methods:{
      abrirRegistroEspecialistas(){ 
        this.$router.push({ name:'RegistroEspecialista' })
      }
    },
    created(){
    }
  }
</script>