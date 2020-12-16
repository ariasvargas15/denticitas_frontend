<template>
  <div class="contenido contenido--registroLayout">
    <v-form class='card form form--cliente' @submit.prevent='editarCliente()'>
      <h2 class='form__title form__title--cliente'>Editar Cliente</h2>
      <v-alert class="form__alert form__alert--cliente" v-model="error" type="error" dense dismissible>{{errorMessage}}</v-alert>
      <div class="form__fields form__fields1--cliente">
        <v-text-field label="Nombre del cliente" type="text" :rules="fieldRules"  v-model="nombre" outlined  required></v-text-field>
        <v-text-field label="Apellido del cliente" type="text" :rules="fieldRules"  v-model="apellido" outlined  required></v-text-field>
      </div>
      <div class="form__fields form__fields2--cliente">
        <v-text-field label="Telefono del cliente" type="tel" :rules="fieldRules"  v-model="telefono" outlined  required></v-text-field>
        <v-text-field label="Email del cliente" type="email" :rules="fieldRules"  v-model="email" outlined  required></v-text-field>
        <v-text-field label="Direccion del cliente" type="test" :rules="fieldRules"  v-model="direccion" outlined  required></v-text-field>
      </div>
      <div class="form__date form__date--cliente">
        <label>Fecha de nacimiento</label>
        <v-date-picker v-model="fechaNacimiento"  elevation="3" color="primary"></v-date-picker> 
      </div>
      <button class='button button--primary button--block form__button form__button--cliente'>Guardar cambios</button>
    </v-form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'RegistroCliente',
    computed:{
      ...mapGetters({
        passingData: "clientes/getPassingData"
      }),
    },
    data(){
      return{
        nombre: '',
        apellido: '',
        cedula: '',
        direccion: '',
        telefono: '',
        email: '',
        password: '',
        fechaNacimiento: '',
        fieldRules: [v => !!v || 'Campo requerido'],
        ocupacion: 'none',
        rol:'cliente',
        error:false,
        errorMessage:"",
      }
    },
    methods:{

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

      async editarCliente(){

        let data = { 
          ocupacion: this.ocupacion,
          persona: {
            apellido: this.apellido,
            direccion: this.direccion,
            email: this.email,
            fechaNacimiento: this.fechaNacimiento,
            nombre: this.nombre,
            password: this.password,
            telefono: this.telefono
          }
        }

         if(this.cedula=='' || this.password=='' || this.rol=='' || this.apellido=='' || this.direccion=='' || this.email=='' || this.nombre=='' || this.telefono=='' || this.fechaNacimiento==''){
            this.error=true
            this.errorMessage='Faltan datos'
        }else{
          try{
          await this.$http.patch('cliente/'+this.cedula, data).then((editResponse)=>{
              if(editResponse.data.message == 'success'){
                this.$router.push({ name:'Clientes' })
              }else{
                this.error=true
                this.errorMessage=editResponse.data.error
              }
            })
          }catch (error) {
            this.error=true
            this.errorMessage=error
          }
        }
      }
    },

    created(){
      this.setFileds()
    }

  }
</script>