import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faPlayCircle,
  faPauseCircle,
  faStepBackward,
  faStepForward,
  faVolumeUp,
  faArrowLeft,
  faBars
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/global.css'
import './registerServiceWorker'

library.add([
  faSearch,
  faPlayCircle,
  faPauseCircle,
  faStepBackward,
  faStepForward,
  faVolumeUp,
  faArrowLeft,
  faBars
])
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
