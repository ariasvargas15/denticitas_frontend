<template>
  <div  class="sideMenu">
    <div class="sideMenu__header">
      <a class="link--noDecoration text--white" href="#"><img class="roundImg roundImg--big" src="../assets/img/user.jpg"></a>
      <a class="menuHeader__link" href="#"><h3 class="text--white">{{admin}}</h3></a>
      <a class="menuHeader__link" href="#"><h3 class="text--white">{{user}}</h3></a>
    </div>
    <div class="sideMenu__nav">
      <div class="navItems">
        <router-link to="/citas" class="navItems__item black--text link--noDecoration"><span><i class="far fa-clock" style="margin-left:1rem; margin-right:1rem;"></i>Citas</span><i class="fas fa-chevron-right"></i></router-link>
        <router-link to="/servicios" class="navItems__item black--text link--noDecoration"><span><i class="fas fa-shopping-bag" style="height=1.5rem; margin-left:1rem; margin-right:1rem;"></i>Servicios</span><i class="fas fa-chevron-right"></i></router-link>
        <router-link to="/especialistas" class="navItems__item black--text link--noDecoration"><span><i class="fas fa-user-md" style="margin-left:1rem; margin-right:1rem;"></i>Especialistas</span><i class="fas fa-chevron-right"></i></router-link>
        <router-link to="/clientes" class="navItems__item black--text link--noDecoration"><span><i class="fas fa-smile" style="margin-left:1rem; margin-right:1rem;"></i>Clientes</span><i class="fas fa-chevron-right"></i></router-link>
      </div>
      <button class="button button--secondary button--fat" v-on:click="logout()"><em class="fas fa-sign-out-alt"></em><span>Cerrar sesion</span></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SideMenu',
   
    data() {
      return {
        admin:"Admin",
        user:sessionStorage.user

      }
    },
    methods:{
      logout(){ 
        sessionStorage.clear()
        this.$router.push({ name: 'Login' })
      }
    }
  }
</script>