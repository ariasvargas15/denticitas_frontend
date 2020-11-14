<template>
    <div class="contenido">
        <h2 class="viewTitle">Citas</h2>
        <button class="buttonStyle1" v-on:click="abrirRegistroCita()">Registrar cita</button>
        <h3 class="viewTitle">Citas agendadas</h3>

        <div v-for="fecha in fechas" :key="fecha">
        <p style="margin-left:1rem">{{fecha}}</p>
        <ul class="componentList citasList">
            <li  v-for="cita in citas" :key="cita" v-show="fecha===cita.fecha">
                <div class="citaItem" >
                    <p class="itemTitle">{{cita.asunto}}</p>
                    <p>{{cita.horaInicio}} - {{cita.horaFin}}</p>
                    <p>Cliente: {{cita.cliente}}</p>
                    <p>Especialista: {{cita.especialista}}</p>
                </div>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Citas',
    data() {
        return {
            fechas:['Jueves 1 de Noviembre' , 'Viernes 3 de Noviembre'],
            citas: {
                1: {
                    asunto:'Ortodoncia',
                    horaInicio:'03:00',
                    horaFin:'03:30',
                    cliente:'Pedro Perez', 
                    especialista:'Pedro Pedrales',
                    fecha: 'Jueves 1 de Noviembre'},
                2: {
                    asunto:'Ortodoncia',
                    horaInicio:'03:00',
                    horaFin:'03:30',
                    cliente:'Pedro Perez', 
                    especialista:'Pedro Pedrales',
                    fecha: 'Jueves 1 de Noviembre'},
                3: {
                    asunto:'Ortodoncia',
                    horaInicio:'03:00',
                    horaFin:'03:30',
                    cliente:'Pedro Perez', 
                    especialista:'Pedro Pedrales',
                    fecha: 'Viernes 3 de Noviembre'},
                4: {
                    asunto:'Ortodoncia',
                    horaInicio:'03:00',
                    horaFin:'03:30',
                    cliente:'Pedro Perez', 
                    especialista:'Pedro Pedrales', 
                    fecha: 'Viernes 3 de Noviembre'},
                5: {
                    asunto:'Ortodoncia',
                    horaInicio:'03:00',
                    horaFin:'03:30',
                    cliente:'Pedro Perez', 
                    especialista:'Pedro Pedrales',
                    fecha: 'Jueves 1 de Noviembre'},
                6: {
                    asunto:'Ortodoncia',
                    horaInicio:'03:00',
                    horaFin:'03:30',
                    cliente:'Pedro Perez', 
                    especialista:'Pedro Pedrales Morales',
                    fecha: 'Jueves 1 de Noviembre'},
                7: {
                    asunto:'Ortodoncia',
                    horaInicio:'03:00',
                    horaFin:'03:30',
                    cliente:'Pedro Perez', 
                    especialista:'Pedro Pedrales',
                    fecha: 'Jueves 1 de Noviembre'},
                    8: {
                    asunto:'Ortodoncia',
                    horaInicio:'03:00',
                    horaFin:'03:30',
                    cliente:'Pedro Perez', 
                    especialista:'Pedro Pedrales',
                    fecha: 'Viernes 3 de Noviembre'},
                    9: {
                    asunto:'Ortodoncia',
                    horaInicio:'03:00',
                    horaFin:'03:30',
                    cliente:'Pedro Perez', 
                    especialista:'Pedro Pedrales',
                    fecha: 'Jueves 1 de Noviembre Morales'}
        }
        }
    },
    methods:{
        abrirRegistroCita(){ 
        this.$router.push({ name:'RegistroCita' })
        }
    }
    }
</script>