<template>
  <div id="player-root" v-bind:style="{ 'box-shadow': `8px 2px 6px 3px ${currentColor}` }">
    <div class="thumb">
      <!-- img src="../assets/cd.png" alt="cd" height="50" width="50" -->
      <p>
        <span><font-awesome-icon v-bind:icon="nextState" v-on:click="toogleStreamState()"  /></span>
      </p>
      <p>
        <span> {{ singer.tracks[0].name }} </span> <br />
        <small> {{ singer.name }} </small>
      </p>
    </div>
    <div class="player">
      <div class="config">
        <div class="sound-current"></div>
      </div>
    </div>
    <div class="comp">
      <font-awesome-icon icon="volume-up" v-on:click="toogleSlider()"/>
      <div class="volume-current" :hidden="!sliderRange">
        <input type="range" min="1" max="100" value="50">
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
</style>
<script>
  export default {
    name: 'app-player',
    data: function () {
      return {
        singer: {
          tracks: [
            { name: 'New UI' }
          ],
          name: 'Abacate'
        },
        currentColor: "000",
        streamState: false,
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
        setInterval(() => {
          let newColor = ''
            for(let i = 0; i < 6; i++) {
              newColor += Math.floor(Math.random() / 0.1)
            }
            this.currentColor = "#" + newColor
            newColor = ''
        }, 3000);
      },
      toogleStreamState: function () {
        setTimeout(() => {
          this.streamState = !this.streamState 
        }, 2000)
      },
      toogleSlider: function () {
        this.sliderRange = !this.sliderRange
      }
    },
    computed: {
      nextState: function () {
        return !this.streamState ? 'play-circle' : 'pause-circle'
      }
    }
  }
</script>