<template>
    <div class="contenido contenido--marginLeft">
      <h2 class="text--weightBold text--margin1">Servicios</h2>
      <!-- <input class="searchInput" type="text" placeholder="Busqueda" name="busquedaServicio" />
      <button class="buttonStyle1">Buscar</button> -->
      <button class="button button--primary" v-on:click="abrirRegistroServicio()">Registrar servicio</button>
      <div v-if="servicios.length>0">
        <div class="itemsList">
          <div  v-for="servicio in servicios" v-show="servicio.estado==true" :key="servicio.id" class="card servicioItem">
            <div class="buttonsGroup buttonsGroup--left">
              <button class="button button--outlined button--tiny" v-on:click="abrirEditarServicio(servicio)">Editar </button>
              <button class="button button--outlined button--tiny" v-on:click="deshabilitarServicio(servicio)">Desahabilitar</button>
            </div>
            <p class="text--weightBold">{{servicio.nombre}}</p>
            <p><span class="text--weightBold">Area:</span> {{servicio.areaId.nombre}}</p>
            <p>{{servicio.descripcion}}</p>
            <p class="text--primaryColor">$ {{servicio.precio}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name: 'Servicios',
    data(){
      return{
      }
    },
    computed:{
       ...mapGetters({
        servicios: "servicios/getServicios"
      }),
      ...mapActions({
        fetchServicios: 'servicios/fetchServicios'
      })
    },
    methods:{
      ...mapActions({
        setPassingData: 'servicios/setPassingData',
        fetchServicios: 'servicios/fetchServicios'
      }),
      ...mapGetters({
        servicios: "servicios/getServicios"
      }),
      
      abrirRegistroServicio(){ 
        this.$router.push({ name:'RegistroServicio' })
      },

      abrirEditarServicio(servicio){ 
        this.setPassingData(servicio)
        this.$router.push({ name:'EditarServicio' })
      },

      async deshabilitarServicio(servicio){

        let datos = {
          estado: false
        }

        try {
          await this.$http.patch('servicio/'+servicio.id, datos).then((response)=>{
            if(response.data.message == 'success'){
              let pos = this.servicios.indexOf(servicio)
              this.servicios.splice(pos, 1)
            }else{
              //mostrar mensaje de error
            }
          })
        } catch (error) {
          console.error(error);
        }
      }
    },

    created(){
      this.fetchServicios
    }
  }
</script>