<template>
  <div id="root">
    <app-slide-bar class="desktop" />
    <div class="content">
      <app-menu class="mobile" />
      <router-view />
    </div>
    <app-player/>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Player from './components/Player'
import SlideBar from './components/SlideBar'
export default {
  name: 'app-root',
  components: {
    'app-menu': Menu,
    'app-player': Player,
    'app-slide-bar': SlideBar
  },
  data: function () {
    return {}
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
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  @media screen and (min-width: 828px) {
    #root {
      display: flex;
    }

    .desktop {
      display: block;
      flex: 1;
    }

    .mobile {
      display: none !important;
    }

    .content {
      flex: 4;
      box-sizing: border-box;
      padding-top: 15px;
    }
  }
</style>
