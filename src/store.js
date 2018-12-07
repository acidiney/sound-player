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
      playng: new Audio()
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
    startStream: function ({ state }) {
      if (state.currentMusic.singer.length > 0) {
        state.streamState = true

        window.storage.child(state.currentMusic.url).getDownloadURL().then((url) => {
          state.currentMusic.playng.src = url
          state.currentMusic.playng.play()
        })
      } else if (state.currentMusic.singer.length < 0) {}
    },
    stopStream: function ({ state }) {
      state.streamState = false
      state.currentMusic.playng.pause()
    }
  }
})
