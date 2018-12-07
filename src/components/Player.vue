<template>
  <div id="player-root" v-bind:style="{ 'box-shadow': `8px 2px 6px 3px ${currentColor}` }">
    <div class="thumb">
      <img src="../assets/cd.png" alt="cd" height="50" width="50">
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
      <font-awesome-icon icon="volume-up"/>
      <div class="volume-current"></div>
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
  }
}

p {
  margin: 0;
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
        currentColor: "000"
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
      }
    }
  }
</script>