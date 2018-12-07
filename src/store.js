import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'

Vue.use(Vuex)

Vue.use(firebase)
Vue.prototype.$db = firebase.firestore()
Vue.prototype.$storage = firebase.storage().ref()

window.storage = firebase.storage().ref()

export default new Vuex.Store({
  state: {
    currentMusic: {
      singer: '',
      music: '',
      url: '',
      playng: null
    },
    streamState: false
  },
  mutations: {
    modifyCurrentMusic: function (state, data) {
      state.currentMusic.music = data.title
      state.currentMusic.singer = data.author
      state.currentMusic.url = data.music
    }
  },
  actions: {
    playmusic: function ({ commit }, data) {
      commit('modifyCurrentMusic', data)
    },
    toogleStreamState: function ({ state }) {
      if (state.currentMusic.singer.length > 0) {
        state.streamState = !state.streamState
        state.currentMusic.playng = window.storage.child(state.currentMusic.url).fullPath
      } else if (state.currentMusic.singer.length < 0) {}
    }
  }
})
