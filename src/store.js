import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'

Vue.use(Vuex)

Vue.use(firebase)
Vue.prototype.$db = firebase.firestore()

window.storage = Vue.prototype.$storage = firebase.storage().ref()

export default new Vuex.Store({
  state: {
    currentMusic: {
      singer: '',
      music: '',
      url: '',
      playng: new Audio(),
      info: null
    },
    currentColor: '#000',
    streamState: false
  },
  mutations: {
    MUDIFYCURRENTMUSIC: function (state, data) {
      state.currentMusic.music = data.title
      state.currentMusic.singer = data.author
      state.currentMusic.url = data.music
    }
  },
  actions: {
    playmusic: function ({ commit, dispatch }, data) {
      commit('MUDIFYCURRENTMUSIC', data)
      dispatch('startStream')
    },
    startStream: function ({ state }) {
      if (state.currentMusic.singer.length > 0) {
        state.streamState = true

        window.storage.child(state.currentMusic.url).getDownloadURL().then((url) => {
          if (!state.info) {
            state.info = state.currentMusic.url
            state.currentMusic.playng.src = url
            state.currentMusic.playng.play()
          } else {
            if (state.info === state.currentMusic.url) {
              state.currentMusic.playng.play()
            } else {
              state.info = state.currentMusic.url
              state.currentMusic.playng.src = url
              state.currentMusic.playng.play()
            }
          }
        })
      } else if (state.currentMusic.singer.length < 0) {}
    },
    stopStream: function ({ state }) {
      state.streamState = false
      state.currentMusic.playng.pause()
    },
    alterSoundVolume: function ({ state }, newVolume) {
      state.currentMusic.playng.volume = (newVolume / 100)
    },
    randomColor: function ({ state }) {
      setInterval(() => {
        let newColor = ''
        for (let i = 0; i < 6; i++) {
          newColor += Math.floor(Math.random() / 0.1)
        }
        state.currentColor = '#' + newColor
      }, 3000)
    }
  }
})
