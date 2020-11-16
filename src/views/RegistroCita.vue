<template>
    <form class='formLayout card contenido' style="margin:0" id='registroEspecialistaForm' @submit.prevent='login()'>
        <h2 style='font-weight: bolder;'>Registrar Cita</h2>

        <div class="inputsTextarea">
          <div class='lableInputGroup'>
            <label>Documento del cliente</label>
            <input type='text'  value='' required/>
          </div>
          <div class='lableInputGroup'>
            <label>Especialista</label>
            <input type='text'  value='' required/>
          </div>
        </div>
        <div class="inputsTextarea">
          <div class='lableInputGroup'>
              <label>Area</label>
              <input type='text'  value='' required/>
          </div>
          <div class='lableInputGroup'>
              <label>Servicio</label>
              <input type="tel" value='' required/>
          </div>
        </div>
      <button id='buttonRegistrarServicio' class='buttonStyle1'>Registrar</button>
    </form>
</template>

<script>
  export default {
    name: 'RegistroCliente',
    methods:{
      login(){ 
          this.$router.push({ name: 'Citas' })
      }
    }
  }
</script>