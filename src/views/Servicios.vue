<template>
    <div class="contenido">
      <h2 class="viewTitle">Servicios</h2>
      <input class="searchInput" type="text" placeholder="Busqueda" name="busquedaServicio" />
      <button class="buttonStyle1">Buscar</button>
      <button class="buttonStyle1" v-on:click="abrirRegistroServicio()">Registrar servicio</button>
      <ul class="componentList">
        <li  v-for="servicio in servicios" :key="servicio">
          <div class="card servicioItem">
            <button class="buttonStyle1">Editar</button>
            <button class="buttonStyle1">Eliminar</button>
            <p class="itemTitle">{{servicio.servicio}}</p>
            <p>{{servicio.descripsion}}</p>
            <p class="servicioPrice">{{servicio.valor}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'Servicios',
    data() {
      return {
        servicios: {
          1: {
            id:'1',
            servicio:'Ortodoncia',
            descripsion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
            valor:'$ 95,000'},
          2: {
            id:'2',
            servicio:'Ortodoncia',
            descripsion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
            valor:'$ 95,000'}
        }
      }
    },
    methods:{
      abrirRegistroServicio(){ 
        console.log('cncnoisdncosndc -kxmlkasmd')
        this.$router.push({ name:'RegistroServicio' })
      }
    }
  }
</script>