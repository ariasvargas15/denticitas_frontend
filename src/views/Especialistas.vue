<template>
  <div class="contenido">
    <h2 class="viewTitle">Especialistas</h2>
    <button class="buttonStyle1" v-on:click="abrirRegistroEspecialista()">Registrar especialista</button>
    <ul class="componentList especialistaList">
      <li  v-for="especialista in especialistas" :key="especialista">
        <div class="card especialistaItem">
          <button class="buttonStyle1">Editar</button>
          <button class="buttonStyle1">Eliminar</button>
          <div class="personInfo">
            <div><img class="personImg" src="https://londonsquare.co.uk/images/uploads/bio/team_bio_AdamLawence.jpg"></div>
            <div>
              <p class="itemTitle">{{especialista.nombre}}</p>
              <p>{{especialista.area}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Especialistas',
    data() {
      return {
        especialistas: {
          1: {
            nombre:'Dr. Fernando Alexander Rodriguez Salazar',
            area:'Especialista en Odontologia'},
          2: {
            nombre:'Dr. Name Lastname',
            area:'Especialista en Odontologia'}
        }
      }
    },
    methods:{
      abrirRegistroEspecialista(){ 
        this.$router.push({ name:'RegistroEspecialista' })
      }
    }
  }
</script>