<template>
    <div class="contenido contenido--marginLeft">
        <h2 class="text--weightBold text--margin1">Citas</h2>
        <button class="button button--primary" v-on:click="abrirRegistroCita()">Registrar cita</button>
        <button class="button button--primary" v-on:click="abrirRegistroCitaEmergencia()">Registrar cita de emergencia</button>
        <h3 class="text--margin1">Citas agendadas</h3>
        <div v-if="citas.length>0">
            <!-- {{turno}} -->
            <div class="itemsList">
                <div v-for="cita in citas" :key="cita.id" class="citaItem">
                    <div class="buttonsGroup buttonsGroup--left">
                        <button class="button button--tiny button--outlined" v-on:click="eliminarCitas(cita.id)">Eliminar</button>
                    </div>
                    <p>
                        <span class="text--weightBold">{{cita.servicioId.nombre}}</span><br>
                        Cliente: {{cita.clienteCedula.persona.nombre}} {{cita.clienteCedula.persona.apellido}}<br>
                        Especialista: {{cita.turnoId.diaAgendaId.agendaId.especialistaCedula.persona.nombre}} {{cita.turnoId.diaAgendaId.agendaId.especialistaCedula.persona.apellido}}<br>
                        Franja: {{formatedTurno(cita.turnoId)}}<br>
                        <!-- {{turno[citas.indexOf(cita)].data}}<br> -->
                        <!-- {{cita.turno=getCitaTurno(cita)}}<br>
                        {{getCitaTurno(cita)}}<br> -->
                        <!-- {{cita.turno}}<br> -->
                        Fecha: {{cita.turnoId.diaAgendaId.dia}}/{{cita.turnoId.diaAgendaId.agendaId.mes}}/{{cita.turnoId.diaAgendaId.agendaId.anio}}<br>
                    </p>
                </div>
            </div>
        </div>
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
                fechas:['Jueves 1 de Noviembre' , 'Viernes 3 de Noviembre'],
                dialog: false,
                turno:[]
            }
        },
        methods:{

            abrirRegistroCita(){ 
                this.$router.push({ name:'RegistroCita' })
            },

            abrirRegistroCitaEmergencia(){
                this.$router.push({ name:'RegistroCitaEmergencia' })
            },

            async eliminarCitas(cita){
                try {
                    await this.$http.delete('cita/'+cita).then((response)=>{
                        console.error(response.data);
                        if(response.data.message == 'success'){
                            let pos = this.citas.indexOf(cita)
                            console.log(pos)
                            this.citas.splice(pos, 1)
                        }else{
                            //mostrar mensaje de error
                        }
                    })
                } catch (error) {
                    console.error(error);
                }
            },

            setCitaTurno(){
                this.citas.forEach(async element => {
                    this.turno.push( await this.$http.get('cita/'+element.id+'/turno'))
                })
            },

            // async fetchCitaTurno(cita){
            //     let response = await this.$http.get('cita/'+cita.id+'/turno')
            //     return response.data
            //     // .then(response=>{
            //     //     this.turno.push(response.data)
            //     // })
            // },

            formatedTurno(val){
                let horaInicio = this.$moment(val.horaInicio, "hhmm").format('hh:mm a')
                let horaFin = this.$moment((Number( val.horaInicio)+200), "hhmm").format('hh:mm a')
                let turno = horaInicio+" - "+ horaFin
                return turno
            },
        },
        
        created(){
            this.fetchCitas
            // this.setCitaTurno()
        }
    }
</script>