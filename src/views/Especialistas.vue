<template>
  <div class="contenido contenido--marginLeft">
    <h2 class="text--weightBold text--margin1">Especialistas</h2>
    <button class="button button--primary" v-on:click="abrirRegistroEspecialista()">Registrar especialistas</button>
    <div v-if="especialistas.length>0">
      <div class="itemsList">
        <div  v-for="especialista in especialistas" v-show="especialista.persona.activo==true" :key="especialista.id" class="card personItem">
          <div class="buttonsGroup buttonsGroup--left">
            <!-- {{especialista.persona.activo}} -->
            <button class="button button--tiny button--outlined" v-on:click="abrirEditarEspecialista(especialista)">Editar</button>
            <button class="button button--tiny button--outlined" v-on:click="abrirPerfilEspecialista(especialista)">Detalles</button>
            <button class="button button--tiny button--outlined" v-on:click="deshabilitarEspecialista(especialista)">Desahabilitar</button>
          </div>
          <div class="personItem__info">
            <img class="roundImg roundImg--small" alt="perfil photo" src="https://londonsquare.co.uk/images/uploads/bio/team_bio_AdamLawence.jpg">
            <div>
              <p>
                <span class="text--weightBold">{{especialista.persona.nombre}} {{especialista.persona.apellido}}</span><br>
                {{especialista.persona.cedula}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name: 'Especialistas',
    computed:{
       ...mapGetters({
        especialistas: "especialistas/getEspecialistas"
      }),
      ...mapActions({
        fetchEspecialistas: 'especialistas/fetchEspecialistas'
      })
    },
    
    data() {
      return {
      }
    },

    methods:{

      ...mapActions({
        setPassingData: 'especialistas/setPassingData'
      }),

      abrirPerfilEspecialista(especialista){
        this.setPassingData(especialista)
        this.$router.push({ name:'DetalleEspecialista' })
      },

      abrirEditarEspecialista(especialista){
        this.setPassingData(especialista)
        this.$router.push({ name:'EditarEspecialista' })
      },

      abrirRegistroEspecialista(){ 
        this.$router.push({ name:'RegistroEspecialista' })
      },

      async deshabilitarEspecialista(especialista){
        let edit = {  
          persona: {
            activo: false
          }
        }
        try {
          await this.$http.patch('especialista/'+especialista.persona.cedula, edit).then((response)=>{
            if(response.data.message == 'success'){
              let pos = this.especialistas.indexOf(especialista)
              this.especialistas.splice(pos, 1)
            }else{
              //mostrar mensaje de error
            }
          })
        } catch (error) {
          console.error(error);
        }
      }
    },
    created(){
      this.fetchEspecialistas
    }
  }
</script>