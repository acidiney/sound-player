<template>
  <div id="root">
    <app-menu />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'app-root',
  components: {
    'app-menu': Menu
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
    background: linear-gradient(to bottom, #333, #111);
  }
</style>
