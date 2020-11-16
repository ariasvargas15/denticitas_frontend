<template>
  <div class="contenido">
    <h2 class="viewTitle">Especialistas</h2>
    <button class="buttonStyle1" v-on:click="abrirRegistroEspecialistas()">Registrar especialistas</button>
    <ul class="componentList especialistaList">
      <li  v-for="especialistas in especialistas" :key="especialistas">
        <div class="card especialistaItem">
          <button class="buttonStyle1">Editar</button>
          <button class="buttonStyle1">Eliminar</button>
          <div class="personInfo">
            <div><img class="personImg" src="https://londonsquare.co.uk/images/uploads/bio/team_bio_AdamLawence.jpg"></div>
            <div>
              <p class="itemTitle">{{especialistas.persona.nombre}} {{especialistas.persona.apellido}}</p>
              <p>{{especialistas.areaEspecializacionList.nombre}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
      abrirRegistroEspecialistas(){ 
        this.$router.push({ name:'RegistroEspecialista' })
      }
    },
    created(){
      this.fetchEspecialistas
    }
  }
</script>