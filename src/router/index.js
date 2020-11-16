import Vue from 'vue'
import VueRouter from 'vue-router'
import SideMenu from '../components/SideMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/especialistas',
    name: 'Especialistas',
    components:{
      default: () => import(/* webpackChunkName: "citas" */ '../views/Especialistas.vue'),
      sideMenu: SideMenu
    }
  },
  {
    path: '/resgitro/especialista',
    name: 'RegistroEspecialista',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/RegistroEspecialista.vue'),
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
    path: '/resgitro/cliente',
    name: 'RegistroCliente',
    components:{
      default: () => import(/* webpackChunkName: "servicios" */ '../views/RegistroCliente.vue'),
      sideMenu: SideMenu
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
