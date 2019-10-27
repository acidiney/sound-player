import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OpennedPlayer from './views/Player/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/player',
      name: 'openned-player',
      component: OpennedPlayer
    }
  ]
})
