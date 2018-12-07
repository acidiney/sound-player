<template>
  <div id="root">
    <app-menu />
    <router-view />
    <app-player/>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Player from './components/Player'
export default {
  name: 'app-root',
  components: {
    'app-menu': Menu,
    'app-player': Player
  },
  data: function () {
    return {

    }
  }
}
</script>

<style lang="scss">
  #root {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: 'Open sans', sans-serif;
    background: linear-gradient(to bottom, #333, #111);
  }
</style>
