<template>
    <div id='loginView'>
        <form class='formLayout card' id='loginForm' @submit.prevent='submit()'>
            <h2 style='font-weight: bolder;'>Iniciar sesión</h2>
            <i class="fas fa-tooth" style='font-size: xxx-large;'></i>
            <h2 style='font-weight: bolder;'>Denticitas</h2>
            <div class="" v-show="error">          
              {{ error }}
            </div>
            <div class='lableInputGroup'>
                <label>Ususario</label>
                <input v-model="user" type='text' name='user' id='nombre' required/>
            </div>
            <div class='lableInputGroup'>
                <label>Contraseña</label>
                <input v-model="password" type='password' name='password' id='Contraseña' required/>
            </div>
            <button id='buttonLogin' class='buttonStyle1'>Iniciar Sesión</button>
            <!-- <p>No estas registrado? <a href='vistaRegistroNuevoUsuario.jsp'>Crear cuenta</a></p> -->
        </form>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'Login',
    data(){
      return{
        user: '',
        password: '',
        tipo: 'admin',
        error: ''
      }
    },
    methods:{
      ...mapActions({
        login: 'authentication/login'
      }),
      submit(){ 
        let json = {
          cedula: this.user,
          password: this.password,
          tipo: this.tipo
        }
        this.login(json).then((response)=>{
          console.log(response.data.message)
          if(response.data.message == 'success'){
            this.$router.push({ name:'Citas' })
          }else if(response.data.message == 'failed'){
            this.error = 'Usario o Contraseña incorrecta'
          }
        })
      }
    }
  }
</script>