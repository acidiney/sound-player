<template>
  <div
    id="player-root"
    :style="{ 'box-shadow': `8px 2px 6px 3px ${currentColor}` }">
    <div class="thumb">
      <!-- img src="../assets/cd.png" alt="cd" height="50" width="50" -->
      <p>
        <span><font-awesome-icon
          :icon="nextState"
          @click="toogleStreamState()" /></span>
      </p>
      <p>
        <span> {{ currentSong.music }} </span> <br >
        <small> {{ currentSong.singer }} </small>
      </p>
    </div>
    <div class="player">
      <div class="config">
        <div class="sound-current"/>
      </div>
    </div>
    <div class="comp">
      <font-awesome-icon
        icon="volume-up"
        @click="toogleSlider()"/>
      <div
        class="volume-current"
        :hidden="!sliderRange">
        <input
          type="range"
          min="0"
          max="10"
          value="5"
          @change="alterVolume($event)">
      </div>
    </div>
  </div>
  <!-- template>
    <ul>
          <li><font-awesome-icon icon="step-backward"  /></li>
          <li><font-awesome-icon icon="play-circle"  /></li>
          <li><font-awesome-icon icon="step-forward"  /></li>
        </ul>
  </template -->
</template>
<script>
export default {
  name: 'AppPlayer',
  data: function () {
    return {
      sliderRange: false
    }
  },
  watch: {
    wRandomColor: {
      handler: 'randomColor',
      immediate: true
    }
  },
  methods: {
    randomColor: function () {
      this.$store.dispatch('randomColor')
    },
    toogleStreamState: function () {
      if (this.streamState) {
        this.$store.dispatch('stopStream')
      } else {
        this.$store.dispatch('startStream')
      }
    },
    toogleSlider: function () {
      this.sliderRange = !this.sliderRange
    },
    alterVolume: function (e) {
      console.log(e.target.value)
      this.$store.dispatch('alterSoundVolume', e.target.value)
    }
  },
  computed: {
    nextState: function () {
      return !this.streamState ? 'play-circle' : 'pause-circle'
    },
    currentSong: function () {
      return this.$store.state.currentMusic
    },
    streamState: function () {
      return this.$store.state.streamState
    },
    currentColor: function () {
      return this.$store.state.currentColor
    }
  }
}
</script>
<style lang="scss" scoped>

@mixin player-display-config() {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
}

#player-root {
  position: fixed;
  background-color: #111;
  width: 100%;
  bottom: 0;
  display: flex;
  border-top: 1px solid #f0f0f069;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;
  box-shadow: 8px 2px 6px 3px #000;
  div.thumb, div.comp {
    @include player-display-config();
  }
  div.thumb {
    justify-content: space-between;
    width: 40%;

    p:first-child {
      span {
        font-size: 24pt;
        cursor: pointer;
      }
    }
  }
}

p {
  margin: 0;
}

input[type="range"] {
  border-radius: 12px;
}
@media screen and (min-width: 828px) {
  #player-root {
    height: 60px;
  }
}
</style>
