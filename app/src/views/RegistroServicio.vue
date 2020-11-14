<template>
    <form class='formLayout card' id='registroServicioForm' @submit.prevent='login()'>
      <h2 style='font-weight: bolder;'>Registrar Servicio</h2>
      <div class="inputsTextarea">
        <div>
          <div class='lableInputGroup'>
            <label>Area del servicio</label>
            <input type='text'  value='' required/>
          </div>
          <div class='lableInputGroup'>
            <label>Nombre del servicio</label>
            <input type='text'  value='' required/>
          </div>
          <div class='lableInputGroup'>
            <label>Area del servicio</label>
            <input type='text' value='' required/>
          </div>
        </div>
        <div class='lableTextareadGroup'>
          <label>Descripsion del servicio</label>
          <textarea type='text' v-model="variable" required/>
        </div>
      </div>
      <button id='buttonRegistrarServicio' class='buttonStyle1'>Registrar</button>
    </form>
</template>

<script>
  export default {
    name: 'RegistroServicio',
    data(){
      return{
        variable:'hola'
      }
    },
    methods:{
      login(){ 
          this.$router.push({ name: 'Citas' })
      }
    }
  }
</script>