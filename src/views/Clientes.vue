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
              <p class="itemTitle">{{cliente.persona.nombre}} {{cliente.persona.apellido}}</p>
              <p>C.C. {{cliente.cedula}}</p>
              <p>Tel. {{cliente.persona.telefono}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name: 'Clientes',
  computed:{
       ...mapGetters({
        clientes: "clientes/getClientes"
      }),
      ...mapActions({
        fetchClientes: 'clientes/fetchClientes'
      })
    },
  data() {
    return {
    }
  },
  methods:{
    abrirRegistroCliente(){ 
      this.$router.push({ name:'RegistroCliente' })
    }
  },
  created(){
      this.fetchClientes
    }
}
</script>

<style scoped>

</style>