<template>
    <div class="contenido">
      <h2 class="viewTitle">Servicios</h2>
      <!-- <input class="searchInput" type="text" placeholder="Busqueda" name="busquedaServicio" />
      <button class="buttonStyle1">Buscar</button> -->
      <button class="buttonStyle1" v-on:click="abrirRegistroServicio()">Registrar servicio</button>
      <ul class="componentList">
        <li  v-for="servicio in servicios" :key="servicio.id">
          <div class="card servicioItem">
            <button class="buttonStyle1">Editar</button>
            <button class="buttonStyle1" v-on:click="eliminarServicio(servicio.id)">Eliminar</button>
            <p class="itemTitle">{{servicio.nombre}}</p>
            <p>{{servicio.descripcion}}</p>
            <p class="servicioPrice">$ {{servicio.precio}}</p>
          </div>
        </li>
      </ul>
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
        eliminar: 'servicios/eliminar'
      }),
      abrirRegistroServicio(){ 
        console.log('cncnoisdncosndc -kxmlkasmd')
        this.$router.push({ name:'RegistroServicio' })
      },
      eliminarServicio(servicio){
        console.log(servicio)
        let json = {
          id: Number(servicio)
        }
        this.eliminar(json).then((response)=>{
          console.log(response.data.message)
          if(response.data.message == 'success'){
            console.log('lllllllllllllllllssssssssssssssssssssssssssss')
          }
        })
      }
    },
    created(){
      this.fetchServicios
    }
  }
</script>