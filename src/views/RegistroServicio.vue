<template>
  <form class='formLayout card contenido' style="margin:0" id='registroServicioForm' @submit.prevent='registrarServicio()'>
    <h2 style='font-weight: bolder;'>Registrar Servicio</h2>
    <div class="inputsTextarea">
      <div>
        <div class='lableSelectGroup'>
          <label>Area del servicio</label>
          <select v-model="area">
            <option disabled value="">Seleccione un elemento</option>
            <option   v-for="area in areas" :key="area.id" v-on:click="setAreaId(area.id)">{{area.nombre}}</option>
          </select>
        </div>
        <div class='lableInputGroup'>
          <label>Nombre del servicio</label>
          <input type='text'  v-model='nombre' required/>
        </div>
        <div class='lableInputGroup'>
          <label>Valor del servicio</label>
          <input type='number' v-model='precio' required/>
        </div>
      </div>
      <div class='lableTextareadGroup'>
        <label>Descripsion del servicio</label>
        <textarea type='text' v-model='descripcion' required/>
      </div>
    </div>
    <p>{{error}}</p>
    <button id='buttonRegistrarServicio' class='buttonStyle1'>Registrar</button>
  </form>
    
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name: 'RegistroServicio',
    computed:{
       ...mapGetters({
        areas: "areas/getAreas"
      }),
      ...mapActions({
        fetchAreas: 'areas/fetchAreas'
      }),
    },
    data(){
      return{
        areaId:'',
        area:'',
        descripcion:'',
        imagen:'none',
        nombre: '',
        precio: '',
        error:''
      }
    },
    methods:{
      ...mapActions({
        registrar: 'servicios/registrar'
      }),
      setAreaId(key){
        console.log(key)
        this.areaId = key
      },
      registrarServicio(){ 
        let json = {
          areaId: this.areaId,
          descripcion: this.descripcion,
          imagen: this.imagen,
          nombre: this.nombre,
          precio: Number(this.precio)
        }
        this.registrar(json).then((response)=>{
          console.log(response.data.message)
          if(response.data.message == 'success'){
            this.$router.push({ name:'Servicios' })
          }else if(response.data.message == 'failed'){
            this.error = 'error'
          }
        })
      }
    },
    created(){
      this.fetchAreas
    }
  }
</script>