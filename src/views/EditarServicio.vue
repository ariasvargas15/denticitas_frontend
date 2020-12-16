<template>
  <div class="contenido contenido--registroLayout">
    <v-form class='card form form--servicio' @submit.prevent='editarServicio()'>
      <h2 class="form__title form__title--servicio">Editar Servicio</h2>
      <v-alert class="form__alert form__alert--servicio" v-model="error" type="error" dense dismissible>{{errorMessage}}</v-alert>
      <div class="form__fields form__fields--servicio">
        <v-combobox label="Area del servicio" v-model="area" item-text="nombre" :items="areas" :rules="fieldRules" outlined required></v-combobox>
        <v-text-field label="Nombre del servicio" v-model='nombre' type="text" :rules="fieldRules" outlined  required></v-text-field>
        <v-text-field label="Valor del servicio" v-model='precio' type="number" :rules="fieldRules" outlined required></v-text-field>
        <v-text-field label="Duracion del servicio" v-model='duracion' type="number" :rules="fieldRules" outlined required></v-text-field>
      </div>
      <v-textarea class="form__textarea form__textarea--servicio" label="Descripsion del servicio" v-model='descripcion' :areas="areas" type="text" :rules="fieldRules" outlined no-resize required></v-textarea>
      <button  class='button button--primary button--block form__button form__button--servicio'>Guardar cambios</button>
    </v-form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {

    name: 'EditarServicio',

    computed:{
       ...mapGetters({
        areas: "areas/getAreas",
        passingData: "servicios/getPassingData"
      }),
      ...mapActions({
        fetchAreas: 'areas/fetchAreas',
      }),
    },

    data(){
      return{
        id:'',
        area:'',
        nombre: '',
        precio: '',
        duracion:'',
        descripcion:'',
        imagen:null,
        fieldRules: [ v => !!v || 'Campo requerido'],
        error:false,
        errorMessage:''
      }
    },

    methods:{

        setFileds(){
            this.id=this.passingData.id
            this.area=this.passingData.areaId.nombre
            this.nombre=this.passingData.nombre
            this.precio=this.passingData.precio
            this.duracion=this.passingData.duracion
            this.descripcion=this.passingData.descripcion
        },
      
        async editarServicio() {

          let datos = {
            areaId: this.area.id,
            nombre: this.nombre,
            precio: Number(this.precio),
            duracion:Number(this.duracion),
            descripcion: this.descripcion,
            estado: true,
            imagen: this.imagen,
          }

          if(this.area=='' || this.nombre=='' || this.precio=='' || this.duracion==''){
            this.error = true
            this.errorMessage = 'Campos incompletos'
          }else{
            try {
              await this.$http.patch('servicio/'+this.id, datos).then((response)=>{
                if(response.data.message == 'success'){
                  this.$router.push({ name:'Servicios' })
                }else if(response.data.message == 'failed'){
                  this.error = true
                  this.errorMessage = 'Error de servicio'
                }
              })
            } catch (error) {
              this.errorMessage = error;
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