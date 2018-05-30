import Vue from 'vue'
import Router from 'vue-router'
import VModal from 'vue-js-modal'

import Home from '../components/Home'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

/* import Module from '../components/module.vue'

Vue.component('app-button', Module) */


/* Vue.use(VueModalTor) */
Vue.use(Router)
/* Vue.use(VModal) */



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})