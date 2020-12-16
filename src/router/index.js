
import Vue from 'vue'
import VueRouter from 'vue-router'
import SideMenu from '../components/SideMenu.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '../views/Login.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/resgitro/servicio',
    name: 'RegistroServicio',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/RegistroServicio.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/editar/servicio',
    name: 'EditarServicio',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/EditarServicio.vue'),
      sideMenu: SideMenu
    },
    meta:{
      logged:true
    }
  },
  {
    path: '/citas',
    name: 'Citas',
    components:{
      default: () => import(/* webpackChunkName: "citas" */ '../views/Citas.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/resgitro/cita',
    name: 'RegistroCita',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/RegistroCita.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/resgitro/emergencia',
    name: 'RegistroCitaEmergencia',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/RegistroCitaEmergencia.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/especialistas',
    name: 'Especialistas',
    components:{
      default: () => import(/* webpackChunkName: "citas" */ '../views/Especialistas.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/registro/especialista',
    name: 'RegistroEspecialista',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/RegistroEspecialista.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/editar/especialista',
    name: 'EditarEspecialista',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/EditarEspecialista.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/perfil/especialista',
    name: 'DetalleEspecialista',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/DetalleEspecialista.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/clientes',
    name: 'Clientes',
    components:{
      default: () => import(/* webpackChunkName: "clientes" */ '../views/Clientes.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/registro/cliente',
    name: 'RegistroCliente',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/RegistroCliente.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/editar/cliente',
    name: 'EditarCliente',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/EditarCliente.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/perfil/cliente',
    name: 'DetalleCliente',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/DetalleCliente.vue'),
      sideMenu: SideMenu
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let logged = false
  if(sessionStorage.logged){
    logged=true
  }
  if (to.name !== 'Login' && !logged){
    next({ name: 'Login' })
  } else if (to.name == 'Login' && logged){
    next({ name: 'Citas' })
  } else{
    next()
  } 
})

export default router
