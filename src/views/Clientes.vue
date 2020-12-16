<template>
  <div class="contenido contenido--marginLeft">
    <h2 class="text--weightBold text--margin1">Clientes</h2>
    <button class="button button--primary" v-on:click="abrirRegistroCliente()">Registrar cliente</button>
    <div v-if="clientes.length>0">
      <div class="itemsList">
        <div v-for="cliente in clientes" :key="cliente" class="card personItem">
          <div class="buttonsGroup buttonsGroup--left">
            <button class="button button--tiny button--outlined" v-on:click="abrirEditarCliente(cliente)">Editar</button>
            <button class="button button--tiny button--outlined" v-on:click="abrirPerfilCliente(cliente)">Detalles</button>
          </div>
          <div class="personItem__info">
            <img class="roundImg roundImg--small" alt="perfil photo" src="https://londonsquare.co.uk/images/uploads/bio/team_bio_AdamLawence.jpg">
            <div>
              <p>
                <span class="text--weightBold">{{cliente.persona.nombre}} {{cliente.persona.apellido}}</span><br>
                C.C. {{cliente.cedula}}<br>
                Tel. {{cliente.persona.telefono}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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

    ...mapActions({
        setPassingData: 'clientes/setPassingData'
    }),

    abrirPerfilCliente(cliente){
      this.setPassingData(cliente)
      this.$router.push({ name:'DetalleCliente' })
    },

    abrirEditarCliente(cliente){
      this.setPassingData(cliente)
      this.$router.push({ name:'EditarCliente' })
    },

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