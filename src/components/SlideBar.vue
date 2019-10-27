<template>
  <div class="slidebar">
    <app-logo />

    <div class="menu"/>
  </div>
</template>
<style lang="scss" scoped>
    .slidebar {
        background-color: transparent;
        border-right: 1px solid #333;
        box-shadow: inset -1.5px -4px 3px 1px #111;
        height: 100vh;
    }
</style>
<script>
import Logo from './Logo'
export default {
  name: 'SlideBar',
  components: {
    'app-logo': Logo
  },
  data: function () {
    return {

    }
  }
}
</script>
