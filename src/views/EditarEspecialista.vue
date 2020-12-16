<template>
  <div class="contenido contenido--registroLayout">
    <v-form class='card form form--especialista' @submit.prevent='editarEspecialista()'>
      <h2 class='form__title form__title--especialista'>Editar Especialista</h2>
      <v-alert class="form__alert form__alert--especialista" v-model="error" type="error" dense dismissible>{{errorMessage}}</v-alert>
      <v-text-field label="Nombre del especialista" type="text" v-model="nombre" :rules="fieldRules" outlined required></v-text-field>
      <v-text-field label="Apellido del especialista" type="text" v-model="apellido" :rules="fieldRules" outlined required></v-text-field>
      <v-text-field label="Telefono del Especialista" type="tel" v-model="telefono" :rules="fieldRules" outlined required></v-text-field>
      <v-combobox label="Areas" :rules="fieldRules" item-text="nombre" :items="items" v-model="areas" multiple outlined required></v-combobox>
      <button class='button button--primary button--block form__button form__button--especialista'>Guardar cambios</button>
    </v-form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name: 'EditarEspecialista',

    computed:{
      ...mapGetters({
        items: "areas/getAreas",
        passingData: "especialistas/getPassingData"
      }),
       ...mapActions({
        fetchAreas: 'areas/fetchAreas'
      }),
    },

    data(){
      return{
        nombre: '',
        apellido: '',
        cedula: '',
        password: '',
        areas: [],
        email: '',
        telefono: '' ,
        fieldRules: [v => !!v || 'Campo requerido'],
        rol:'especialista',
        error:false,
        errorMessage:""
      }
    },
    methods:{

      setFileds(){
        this.nombre=this.passingData.persona.nombre
        this.apellido=this.passingData.persona.apellido
        this.cedula=this.passingData.persona.cedula
        this.password=this.passingData.persona.password
        this.telefono=this.passingData.persona.telefono
        this.areas=this.passingData.areaEspecializacionList
      },

      async editarEspecialista(){

        let edit = {  
          areaEspecializacionList: this.areas,
          persona: {
            nombre: this.nombre,
            apellido: this.apellido,
            password: this.password,
            telefono: this.telefono,
            direccion: null,
            email: null,
            fechaNacimiento: null,
            activo: true
          }
        }

        if(this.cedula=='' || this.password=='' || this.rol=='' || this.apellido=='' || this.nombre=='' || this.telefono=='' || this.areas.length<1) {
          this.error=true
          this.errorMessage='Faltan datos'
        }else{
          try{
            await this.$http.patch('especialista/'+this.cedula, edit).then((editResponse)=>{
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

        
      }
    },

    created(){
      this.fetchAreas
      this.setFileds()
    }
  }
</script>