<template>
  <div class="contenido contenido--registroLayout">
    <v-form class='card form form--cita' @submit.prevent='regisrarCita()'>
      <h2 class="form__title form__title--cita">Registrar Cita de Emergencia</h2>
      <v-alert class="form__alert form__alert--cita" v-model="error" type="error" dense dismissible>{{errorMessage}}</v-alert>
      <div class="form__fields form__fields--cita">
        <v-text-field label="Documento del cliente" type="text" :rules="fieldRules" v-model="user" outlined  required></v-text-field>
        <v-combobox label="Especialista" :rules="fieldRules"  @change="setAgendaEspecialista(especialista.persona.cedula)"  :item-text="getNombreEspecialista" :items="getEspecialistas()" v-model="especialista" outlined  required></v-combobox>
        <v-combobox label="Turno" :rules="fieldRules" :item-text="formatedTurno" :items="getTurnos()"  v-model="turno" outlined required></v-combobox>
      </div> 
      <v-date-picker class="form__date form__date--cita" @change="setTurnos(fecha)" v-model="fecha" elevation="3" color="primary" locale="es" :allowed-dates="getFechasPermitidas"></v-date-picker>
      <button class='button button--primary button--block form__button form__button--cita'>Registrar</button>
    </v-form>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    name: 'RegistroCitaEmergencia',

    computed:{
      ...mapGetters({
        // especialistas: "especialistas/getEspecialistas",
        servicios: "servicios/getServicios"
      }),
      ...mapActions({
        fetchAreas: 'areas/fetchAreas',
        fetchServicios: 'servicios/fetchServicios',
      }),
    },

    data(){
      return{
        user: '',
        especialista: '',
        servicio: '',
        turno:'',
        fecha: '',
        fieldRules: [v => !!v || 'Campo requerido'],
        especialistas:[],
        agendas:[],
        turnosFecha:[],
        turnos:[],
        fechasPermitidas:[],
        error:false,
        errorMessage:''
      }
    },
    methods:{                

      async regisrarCita(){
        let datos={
          clienteCedula: this.user,
          servicioId: 26,
          turnoId: this.turno.id
        }
        try {
          await this.$http.post('cita', datos).then((response)=>{
            if(response.data.message=='success'){
              this.$router.push({ name:'Citas' })
            }else if(response.data.message!='succes'){
              this.error=true
              this.errorMessage = response.data.error
            }else{
              this.error=true
              this.errorMessage = 'Error desconocido'
            }
          })
        } catch (error) {
          this.error=true
          this.errorMessage = error
        }
      },

      getServiciosActivos(){
        let servicios = []

        this.servicios.forEach(element => {
          if(element.estado==true){
            servicios.push(element)
          }
        });

        return servicios
      },

      async setEspecialistasServicio(){
        try {
          await this.$http.get('/especialista').then((response)=>{
            if(response.data.message=='failed'){
              this.error=true
              this.errorMessage = response.data.error;
              this.resetFields()
            }else{
              this.especialistas = response.data
              this.resetFields()
            }
            
          })
        } catch (error) {
          this.error=true
          this.errorMessage = error;
        }
      },

      resetFields(){
        this.especialista =''
        this.fechasPermitidas = []
      },

      async setAgendaEspecialista(especialista){
        try {
          await this.$http.get('especialista/'+especialista+'/agenda').then((response)=>{
            if(response.data.message=='failed'){
              this.error=true
              this.errorMessage = response.data.error;
            }else{
              this.agendas = response.data
              this.setFechasPermitida(response.data)
            }
            
          })
        } catch (error) {
          this.error=true
          this.errorMessage = error;
        }
      },

      setFechasPermitida(agendas){
        let fechas = []
        agendas.forEach(agenda => {
          agenda.diaAgendaList.forEach(dia => {
            var fecha = agenda.anio+'-'+agenda.mes+'-'+dia.dia
            let turnoFecha={
              fecha:fecha,
              turnos:dia.turnoList
            }
            this.addTurnoFecha(turnoFecha)
            fechas.push(fecha)
          });
        });
        this.fechasPermitidas = fechas
      },

      getFechasPermitidas(val){
        var valido = false
        this.fechasPermitidas.forEach(element => {
          if(val===element){
            valido = true
          }
        });
        return valido
      },

      getNombreEspecialista(val){
        var nombre = val.persona.nombre+" "+ val.persona.apellido
        return nombre
      },

      addTurnoFecha(turnoFecha){
        this.turnosFecha.push(turnoFecha)
      },

      setTurnos(fecha){
        let turnos = []
        this.turno = ''
        this.turnosFecha.forEach(turnoFecha =>{
          if(turnoFecha.fecha===fecha ){
            turnoFecha.turnos.forEach(turno=>{
              if(turno.disponible && (this.servicio.duracion<turno.tiempoDisponible)){
                turnos.push(turno)
              }
            })
            turnos = turnoFecha.turnos
          }
        })
        this.turnos = turnos
      },
      
      formatedTurno(val){
        let horaInicio = this.$moment(val.horaInicio, "hhmm").format('hh:mm a')
        let horaFin = this.$moment((Number( val.horaInicio)+200), "hhmm").format('hh:mm a')
        let turno = horaInicio+" - "+ horaFin
        return turno
      },

      getEspecialistas(){
        return this.especialistas
      },

      getTurnos(){
        return this.turnos
      }

    },

    created(){
      this.fetchServicios
      this.setEspecialistasServicio()
    }
  }
</script>