import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/simple_select',
      name: 'simple_select',
      component: () => import(/* webpackChunkName: "simple_select" */ './views/SimpleSelect.vue')
    },
    {
      path: '/modal_components',
      name: 'modal_components',
      component: () => import(/* webpackChunkName: "modal_components" */ './views/ModalComponents.vue')
    }
  ]
})
