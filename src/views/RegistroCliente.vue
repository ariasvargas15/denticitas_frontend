<template>
    <form class='formLayout card contenido' style="margin:0" id='registroEspecialistaForm' @submit.prevent='registrarCliente()'>
        <h2 style='font-weight: bolder;'>Registrar Cliente</h2>
        <div class="inputsTextarea">
          <div class='lableInputGroup'>
            <label>Nombre del cliente</label>
            <input type='text'  v-model="nombre" required/>
          </div>
          <div class='lableInputGroup'>
              <label>Apellido del cliente</label>
              <input type='text'  v-model="apellido" required/>
          </div>
        </div>
        <div class="inputsTextarea">
          <div class='lableInputGroup'>
            <label>Documento del cliente</label>
            <input type='text'  v-model="cedula" required/>
          </div>
          <div class='lableInputGroup'>
              <label>Telefono del cliente</label>
              <input type="tel" v-model="telefono" required/>
          </div>
        </div>
        <div class="inputsTextarea">
          <div class='lableInputGroup'>
            <label>Email del cliente</label>
            <input type='email' v-model="email" required/>
          </div>
          <div class='lableInputGroup'>
              <label>Direccion del cliente</label>
              <input type='text'  v-model="fechaNacimiento" required/>
          </div>
        </div>
        
        <div class='lableInputGroup'>
            <label>Fecha de nacimiento del cliente</label>
            <input type='date'  value='' required/>
        </div>
      <button id='buttonRegistrarServicio' class='buttonStyle1'>Registrar</button>
    </form>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'RegistroCita',
    computed:{
       
    },
    data(){
      return{
        ocupacion: 'none',
        apellido: '',
        cedula: '',
        direccion: '',
        email: '',
        fechaNacimiento: '',
        nombre: '',
        password: this.generarContraseña(),
        telefono: '' ,
        tipo:'cliente'
      }
    },
    methods:{
      ...mapActions({
        registrar: 'clientes/registrar',
        editar: 'clientes/editar'
      }),
      generarContraseña(){
        var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789*#$@&";
        var contraseña = "";
        for (let i=0; i<7; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
        return contraseña;
      },
      registrarCliente(){ 
        let edit = {
          cedula: this.cedula,
          clienteDdata:{
            ocupacion: this.ocupacion,
            persona: {
              apellido: this.apellido,
              cedula: this.cedula,
              direccion: this.direccion,
              email: this.email,
              fechaNacimiento: this.fechaNacimiento,
              nombre: this.nombre,
              password: this.password,
              telefono: this.telefono 
            }
          }
          
        }
        let create = {
            cedula: this.cedula,
            password: this.password,
            tipo: this.tipo 
          
        }
        this.registrar(create).then((response)=>{
          console.log(response.data.message)
          if(response.data.message == 'success'){
            this.registrar(edit).then((response)=>{
              console.log(response.data.message)
                if(response.data.message == 'success'){
                  this.$router.push({ name:'Clientes' })
                }
              })
          }
        })
      }
    }
  }
</script>