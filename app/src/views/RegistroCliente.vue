<template>
    <form class='formLayout card' id='registroEspecialistaForm' @submit.prevent='login()'>
        <h2 style='font-weight: bolder;'>Registrar Cliente</h2>
        <div class='lableInputGroup'>
            <label>Nombre del cliente</label>
            <input type='text'  value='' required/>
        </div>
        <div class='lableInputGroup'>
            <label>Documento del cliente</label>
            <input type='text'  value='' required/>
        </div>
        <div class='lableInputGroup'>
            <label>Telefono del cliente</label>
            <input type="tel" value='' required/>
        </div>
        <div class='lableInputGroup'>
            <label>Email del cliente</label>
            <input type='email' value='' required/>
        </div>
      <button id='buttonRegistrarServicio' class='buttonStyle1'>Registrar</button>
    </form>
</template>

<script>
  export default {
    name: 'RegistroCita',
    methods:{
      login(){ 
          this.$router.push({ name: 'Citas' })
      }
    }
  }
</script>