<template>
  <div  class="sideBar">
    <div class="sideBarHeader">
      <a href="#"><div class="userImg"></div></a>
      <a href="#"><h3>{{user}}</h3></a>
    </div>
    <div class="sideBarNav">
      <div class="sideBarNavItems">
        <router-link to="/citas"><span><i class="far fa-clock" style="margin-left:1rem; margin-right:1rem;"></i>Citas</span><i class="fas fa-chevron-right"></i></router-link>
        <router-link to="/servicios"><span><i class="fas fa-shopping-bag" style="height=1.5rem; margin-left:1rem; margin-right:1rem;"></i>Servicios</span><i class="fas fa-chevron-right"></i></router-link>
        <router-link to="/especialistas"><span><i class="fas fa-user-md" style="margin-left:1rem; margin-right:1rem;"></i>Especialistas</span><i class="fas fa-chevron-right"></i></router-link>
        <router-link to="/clientes"><span><i class="fas fa-smile" style="margin-left:1rem; margin-right:1rem;"></i>Clientes</span><i class="fas fa-chevron-right"></i></router-link>
      </div>
      <button class="buttonStyle2" v-on:click="logout()"><i class="fas fa-sign-out-alt"></i> <span>Cerrar sesion</span></button>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'SideMenu',
    computed:{
       ...mapGetters({
        user: "authentication/getLogedUser"
      })
    },
    methods:{
      logout(){ 
        this.$router.push({ name: 'Login' })
      }
    }
  }
</script>