<template>
    <div class="contenido">
        <h2 class="viewTitle">Citas</h2>
        <button class="buttonStyle1" v-on:click="abrirRegistroCita()">Registrar cita</button>
        <h3 class="viewTitle">Citas agendadas</h3>
        <!-- <div v-for="fecha in fechas" :key="fecha"> -->
            <!-- <p style="margin-left:1rem">{{fecha}}</p> -->
            <ul class="componentList citasList">
                <!-- <li  v-for="cita in citas" :key="cita" v-show="fecha===cita.fecha"> -->
                <li  v-for="cita in citas" :key="cita">
                    <div class="citaItem" >
                        <p class="itemTitle">{{cita.id}}</p>
                        <p>{{cita.turnoId.horaInicio}} - {{format(cita.turnoId.horaInicio)}}</p>
                        <p>Cliente: {{cita.clienteCedula.persona.nombre}} {{cita.clienteCedula.persona.apellido}}</p>
                        <p>Especialista: {{cita.turnoId.diaAgendaId.agendaId.especialistaCedula.persona.nombre}} {{cita.turnoId.diaAgendaId.agendaId.especialistaCedula.persona.apellido}} </p>
                    </div>
                </li>
            </ul>
        <!-- </div> -->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
    name: 'Citas',
    computed:{
       ...mapGetters({
        citas: "citas/getCitas"
      }),
      ...mapActions({
        fetchCitas: 'citas/fetchCitas'
      })
    },
    data() {
        return {
            fechas:['Jueves 1 de Noviembre' , 'Viernes 3 de Noviembre']
        }
    },
    methods:{
        abrirRegistroCita(){ 
            this.$router.push({ name:'RegistroCita' })
        },
        format(hora){
            return Number(hora)+30
        }
    },
    created(){
      this.fetchCitas
    }
    }
</script>