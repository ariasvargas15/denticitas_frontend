<template>
  <div class="contenido contenido--perfilLayout">
    <div class="card personData">
        <h2 class="personData__title">Datos del Especialista</h2>
        <img class="roundImg roundImg--big personData__img" alt="perfil photo" src="../assets/img/user.jpg">
        <div class="personData__subtitles">
            <p class="text--weightBold">Apellido</p>
            <p class="text--weightBold">Nombre</p>
            <p class="text--weightBold">No. Documento</p>
            <p class="text--weightBold">Telefono</p>
            <p class="text--weightBold">Activo</p>
        </div>
        <div class="personData__data">
            <p v-if="apellido">{{apellido}}</p>
            <p v-else>-</p>
            <p v-if="nombre">{{nombre}}</p>
            <p v-else>-</p>
            <p v-if="cedula">{{cedula}}</p>
            <p v-else>-</p>
            <p v-if="telefono">{{telefono}}</p>
            <p v-else>-</p>
            <p v-if="activo">{{activo}}</p>
            <p v-else>-</p>
        </div>
        <div class="personData__area">
            <h4>Areas de Especializacion</h4><br>
            <ul>
              <li v-for="area in areas" :key="area.id">{{area.nombre}}</li>
            </ul>
        </div>
        <button class='button button--primary button--block personData__button' v-on:click="abrirEditarEspecialista(passingData)">Editar</button>
    </div>
    
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name: 'DetalleEspecialista',
    computed:{
       ...mapGetters({
        passingData: "especialistas/getPassingData"
      })
    },

    data() {
      return {
          apellido:'',
          nombre:'',
          cedula:'',
          password:'',
          telefono:'',
          activo:'',
          areas:[]
      }
    },

    methods:{

      ...mapActions({
        setPassingData: 'especialistas/setPassingData'
      }),

      setFileds(){
        this.nombre=this.passingData.persona.nombre
        this.apellido=this.passingData.persona.apellido
        this.cedula=this.passingData.persona.cedula
        this.telefono=this.passingData.persona.telefono
        this.areas=this.passingData.areaEspecializacionList
        this.password=this.passingData.persona.password
        if(this.passingData.persona.activo){
          this.activo = 'Si'
        }else{
          this.activo = 'No'
        }
      },

      abrirEditarEspecialista(especialista){
        this.setPassingData(especialista)
        this.$router.push({ name:'EditarEspecialista' })
      },
    },
    created(){
      this.setFileds()
    }
  }
</script>