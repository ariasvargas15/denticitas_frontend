<template>
  <div class="contenido contenido--registroLayout">
    <v-form class='card form form--especialista' @submit.prevent='registrarEspecialista()'>
      <h2 class='form__title form__title--especialista'>Registrar Especialista</h2>
      <v-alert class="form__alert form__alert--especialista" v-model="error" type="error" dense dismissible>{{errorMessage}}</v-alert>
      <v-text-field label="Nombre del especialista" type="text" v-model="nombre" :rules="fieldRules" outlined required></v-text-field>
      <v-text-field label="Apellido del especialista" type="text" v-model="apellido" :rules="fieldRules" outlined required></v-text-field>
      <v-text-field label="Documento del Especialista" type="text" v-model="cedula" :rules="fieldRules" outlined required></v-text-field>
      <v-text-field label="Telefono del Especialista" type="tel" v-model="telefono" :rules="fieldRules" outlined required></v-text-field>
      <v-combobox label="Areas" :rules="fieldRules" item-text="nombre" :items="items" v-model="areas" multiple outlined required></v-combobox>
      <button class='button button--primary button--block form__button form__button--especialista'>Registrar</button>
    </v-form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name: 'RegistroEspecialista',

    computed:{
      ...mapGetters({
        items: "areas/getAreas"
      }),
       ...mapActions({
        fetchAreas: 'areas/fetchAreas'
      }),
    },

    data(){
      return{
        apellido: '',
        cedula: '',
        email: '',
        nombre: '',
        password: this.generarContraseña(),
        telefono: '' ,
        areas: [],
        fieldRules: [v => !!v || 'Campo requerido'],
        rol:'especialista',
        error:false,
        errorMessage:""
      }
    },
    methods:{

      generarContraseña(){
        var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789*#$@&";
        var contraseña = "";
        for (let i=0; i<7; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
        return contraseña;
      },

      async registrarEspecialista(){ 

        let edit = {  
          areaEspecializacionList: this.areas,
          hojaVida: null,
          persona: {
            apellido: this.apellido,
            direccion: null,
            email: null,
            fechaNacimiento: null,
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
        if(this.cedula=='' || this.password=='' || this.rol=='' || this.apellido=='' || this.nombre=='' || this.telefono=='' || this.areas.length<1) {
          this.error=true
          this.errorMessage='Faltan datos'
        }else{
          try {
          await this.$http.post('registro', create).then((response)=>{
              if(response.data.message == 'success'){
                console.log(create)
                this.editarEspecialista(this.cedula, edit)
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

      async editarEspecialista(especialista, data){
        try{
          await this.$http.patch('especialista/'+especialista, data).then((editResponse)=>{
            console.log()
            if(editResponse.data.message == 'success'){
              this.$router.push({ name:'Especialistas' })
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
    },

    created(){
      this.fetchAreas
    }
  }
</script>