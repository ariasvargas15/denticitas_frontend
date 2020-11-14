<template>
    <div id='loginView'>
        <form class='formLayout card' id='loginForm' @submit.prevent='login()'>
            <h2 style='font-weight: bolder;'>Iniciar sesión</h2>
            <i class="fas fa-tooth" style='font-size: xxx-large;'></i>
            <h2 style='font-weight: bolder;'>Denticitas</h2>
            <div class="" v-if="error">          
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
  import axios from 'axios';
  export default {
    name: 'Login',
    data(){
      return{
        user: '105032',
        password: 'denti123*#',
        tipo: 'admin',
        error: ''
      }
    },
    methods:{
      async login(){ 
        /*consumir servicio login*/
        let json = {
          cedula: this.user,
          password: this.password,
          tipo: this.tipo
        }
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.post('http://3.82.145.61:8080/login', json).then(data=>{console.log(data)})
        // axios.post('http://3.82.145.61:8080/login?cedula=105032&password=denti123*%23&tipo=admin').then(data=>{console.log(data)})
        // if(this.user==='romariojaimes@gmail.com' && this.password==='123456'){
        //   this.$router.push({ name: 'Citas' })
        // }else{
        //   this.error = 'No existe el usuario'
        // }
      }
    }
  }
</script>