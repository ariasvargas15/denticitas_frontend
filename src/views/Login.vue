<template>
    <div class='login'>
        <v-form class="card form form--login" @submit.prevent='submit()'>
          <div class="form__title">
            <h2>Iniciar sesión</h2>
            <em class="fas fa-tooth" style='font-size: xxx-large;'></em>
            <h2>Denticitas</h2>
          </div>
          <v-alert v-model="error" type="error" dense dismissible>{{errorMessage}}</v-alert>
          <v-text-field v-model="user" label="User" type="text" :rules="fieldRules" outlined  required></v-text-field>
          <v-text-field v-model="password" label="Contraseña" type="password" :rules="fieldRules" outlined  required></v-text-field>
          <button class='button button--primary button--block button--fat'>Iniciar Sesión</button>
        </v-form>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'Login',

    computed:{
      
    },

    data(){
      return{
        user: '',
        password: '',
        rol: 'admin',
        error: false,
        errorMessage:'',
        fieldRules: [v => !!v || 'Campo requerido']
      }
    },
    methods:{

      ...mapActions({
        login: 'authentication/login'
      }),

      submit(){ 
        let credential = {
          cedula: this.user,
          password: this.password,
          rol: this.rol
        }
        if(this.user=='' || this.password==''){
          this.error = true
          this.errorMessage = 'Debe llenar los campos'
        }else{
          this.login(credential).then((response)=>{
            console.log(response.data.message)
            if(response.data.message == 'success'){
              sessionStorage.user = this.user
              sessionStorage.logged = true
              this.$router.push({ name:'Citas' })
            }else if(response.data.message == 'failed'){
              this.error = true
              this.errorMessage = 'Usuario o contraseña inconrrecta'
            }else{
              this.error = true
              this.errorMessage = response
            }
          })
        }
      }
    }
  }
</script>