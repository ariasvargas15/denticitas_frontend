<template>
    <form class='formLayout card contenido' style="margin:0" id='registroEspecialistaForm' @submit.prevent='login()'>
        <h2 style='font-weight: bolder;'>Registrar Especialista</h2>
        <div class='lableInputGroup'>
            <label>Nombre del especialista</label>
            <input type='text'  value='' required/>
        </div>
        <div class='lableInputGroup'>
            <label>Documento del especialista</label>
            <input type='text'  value='' required/>
        </div>
        <div class='lableInputGroup'>
            <label>Area del especialista</label>
            <input type='text' value='' required/>
        </div>
      <button id='buttonRegistrarServicio' class='buttonStyle1'>Registrar</button>
    </form>
</template>

<script>
  export default {
    name: 'RegistroEspecialista',
    methods:{
      login(){ 
          this.$router.push({ name: 'Citas' })
      }
    }
  }
</script>