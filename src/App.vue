<template>
  <div id="root">
    <!-- app-slide-bar class="desktop" / -->
    <router-view />
    <!--- div class="content">
      <!- app-menu class="mobile" / ->
    </div -->
    <!-- app-player -->
  </div>
</template>

<script>
import Menu from './components/Menu'
import SlideBar from './components/SlideBar'
// import Player from './components/Shared/Player'

export default {
  name: 'AppRoot',
  components: {
    'app-menu': Menu,
    // 'app-player': Player,
    'app-slide-bar': SlideBar
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
