<template>
  <div class="contenido contenido--registroLayout">
    <v-form class='card form form--cliente' @submit.prevent='registrarCliente()'>
      <h2 class='form__title form__title--cliente'>Registrar Cliente</h2>
      <v-alert class="form__alert form__alert--cliente" v-model="error" type="error" dense dismissible>{{errorMessage}}</v-alert>
      <div class="form__fields form__fields1--cliente">
        <v-text-field label="Nombre del cliente" type="text" :rules="fieldRules"  v-model="nombre" outlined  required></v-text-field>
        <v-text-field label="Apellido del cliente" type="text" :rules="fieldRules"  v-model="apellido" outlined  required></v-text-field>
        <v-text-field label="Documento del cliente" type="text" :rules="fieldRules"  v-model="cedula" outlined  required></v-text-field>
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
      <button class='button button--primary button--block form__button form__button--cliente'>Registrar</button>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'RegistroCliente',
    computed:{
       
    },
    data(){
      return{
        nombre: '',
        apellido: '',
        cedula: '',
        direccion: '',
        telefono: '',
        email: '',
        password: this.generarContraseña(),
        fechaNacimiento: new Date().toISOString().substr(0, 10),
        fieldRules: [v => !!v || 'Campo requerido'],
        ocupacion: 'none',
        rol:'cliente',
        error:false,
        errorMessage:"",
      }
    },
    methods:{

      generarContraseña(){
        var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789*#$@&";
        var contraseña = "";
        for (let i=0; i<7; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
        return contraseña;
      },

      async registrarCliente(){ 

        let edit = {  
          ocupacion: this.ocupacion,
          persona: {
            apellido: this.apellido,
            direccion: this.direccion,
            email: this.email,
            fechaNacimiento: this.fechaNacimiento,
            nombre: this.nombre,
            password: this.password,
            telefono: this.telefono,
            activo: true
          }
        }

        let create = {
            cedula: this.cedula,
            password: this.password,
            rol: this.rol
        }
        if(this.cedula=='' || this.password=='' || this.rol=='' || this.apellido=='' || this.direccion=='' || this.email=='' || this.nombre=='' || this.telefono=='' || this.fechaNacimiento==''){
            this.error=true
            this.errorMessage='Faltan datos'
        }else if(!this.esMayorDeEdad()){
            this.error=true
            this.errorMessage='El cliente debe ser mayor de edad'
        }else{
          try {
            await this.$http.post('registro', create).then((response)=>{
              if(response.data.message == 'success'){
                this.editarCliente(this.cedula, edit)
              }else{
                this.error=true
                this.errorMessage=response.data.error
              }
            })
          } catch (error) {
            this.error=true
            this.errorMessage=error
          }
        }
      },

      async editarCliente(cliente, data){
        try{
          await this.$http.patch('cliente/'+cliente, data).then((editResponse)=>{
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
      },

      esMayorDeEdad(){
        let fechaActual = new Date().toISOString().substr(0, 10)
        let fechaNacimiento = this.fechaNacimiento
        var edad = Number(fechaActual.split('-')[0]) - Number(fechaNacimiento.split('-')[0])
        var mayorDeEdad=false
        if(edad>=18){
          mayorDeEdad=true
        }
        return mayorDeEdad
      }

    }
  }
</script>