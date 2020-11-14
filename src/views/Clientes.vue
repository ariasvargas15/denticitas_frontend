<template>
  <div class="contenido">
    <h2 class="viewTitle">Clientes</h2>
    <button class="buttonStyle1" v-on:click="abrirRegistroCliente()">Registrar cliente</button>
    <ul class="componentList especialistaList">
      <li  v-for="cliente in clientes" :key="cliente">
        <div class="card clienteItem">
          <button class="buttonStyle1">Editar</button>
          <button class="buttonStyle1">Eliminar</button>
          <div class="personInfo">
            <div><img class="personImg" src="https://londonsquare.co.uk/images/uploads/bio/team_bio_AdamLawence.jpg"></div>
            <div>
              <p class="itemTitle">{{cliente.nombre}}</p>
              <p>C.C. {{cliente.cedula}}</p>
              <p>Tel. {{cliente.telefono}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Clientes',
  data() {
    return {
      clientes: {
        1: {
          nombre:'Alexander  Salazar',
          cedula:'1473849847',
          telefono:'3114758384'},
        2: {
          nombre:'Name SecondName Lastname',
          cedula:'1940938472',
          telefono:'3048573847'}
      }
    }
  },
  methods:{
    abrirRegistroCliente(){ 
      this.$router.push({ name:'RegistroCliente' })
    }
  }
}
</script>

<style scoped>

</style>