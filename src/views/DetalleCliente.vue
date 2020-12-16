<template>
  <div class="contenido contenido--perfilLayout">
    <div class="card personData">
        <h2 class="personData__title">Datos del Cliente</h2>
        <img class="roundImg roundImg--big personData__img" alt="perfil photo" src="../assets/img/user.jpg">
        <div class="personData__subtitles">
            <p class="text--weightBold">Apellido</p>
            <p class="text--weightBold">Nombre</p>
            <p class="text--weightBold">No. Documento</p>
            <p class="text--weightBold">Fecha de Nacimiento</p>
            <p class="text--weightBold">Telefono</p>
            <p class="text--weightBold">Email</p>
            <p class="text--weightBold">Direccion</p>
        </div>
        <div class="personData__data">
            <p v-if="apellido">{{apellido}}</p>
            <p v-else>-</p>
            <p v-if="nombre">{{nombre}}</p>
            <p v-else>-</p>
            <p v-if="cedula">{{cedula}}</p>
            <p v-else>-</p>
            <p v-if="fechaNacimiento">{{fechaNacimiento}}</p>
            <p v-else>-</p>
            <p v-if="telefono">{{telefono}}</p>
            <p v-else>-</p>
            <p v-if="email">{{email}}</p>
            <p v-else>-</p>
            <p v-if="direccion">{{direccion}}</p>
            <p v-else>-</p>
        </div>
        <button class='button button--primary button--block personData__button' v-on:click="abrirEditarCliente(passingData)">Editar</button>
    </div>
    
    <div class="card historiaClinica">
        <h2>Historia Clinica</h2>
        <button class='button button--primary personData__button'>Agregar Entrada</button>
        <!-- <h4 class="text--weightBold">Medicamentos</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aliquid dolores, nesciunt est iure, id eum et maiores aut eius optio incidunt atque aspernatur natus pariatur, officiis rerum obcaecati nihil.</p>
        
        <h4 class="text--weightBold">Enfermedades</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores officia deserunt omnis dolor at est incidunt sit reiciendis. Sit itaque eligendi vitae illo animi modi magnam vero similique omnis!</p>
        
        <h4 class="text--weightBold">Alergias</h4>
        
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus alias eligendi recusandae hic explicabo quaerat amet nihil! Fuga nesciunt earum eos praesentium, sapiente cupiditate maiores at, fugit libero, velit reiciendis!</p>
        <h4 class="text--weightBold">Cirugias</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda praesentium molestias consequatur corporis suscipit. Quae corrupti debitis illum nam error quidem dicta nisi neque numquam ratione! Corporis et perferendis quod.</p> -->

        <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name: 'DetalleCliente',
    computed:{
       ...mapGetters({
        passingData: "clientes/getPassingData"
      })
    },

    data() {
      return {
        nombre: '',
        apellido: '',
        cedula: '',
        direccion: '',
        telefono: '',
        email: '',
        password: '',
        fechaNacimiento: ''
      }
    },

    methods:{

      ...mapActions({
        setPassingData: 'clientes/setPassingData'
      }),

      setFileds(){
        this.nombre=this.passingData.persona.nombre
        this.apellido=this.passingData.persona.apellido
        this.cedula=this.passingData.persona.cedula
        this.direccion=this.passingData.persona.direccion
        this.telefono=this.passingData.persona.telefono
        this.email=this.passingData.persona.email
        this.password=this.passingData.persona.password
        this.fechaNacimiento=this.passingData.persona.fechaNacimiento
      },

      abrirEditarCliente(cliente){
        this.setPassingData(cliente)
        this.$router.push({ name:'EditarCliente' })
      }
    },
    created(){
      this.setFileds()
    }
  }
</script>