<template>
  <header>
    <app-logo></app-logo>
    <div class="search">
        <app-input></app-input>
    </div>
    <nav></nav>
  </header>
</template>
<script>
import Logo from './Logo'
import Input from './Input'
export default {
  name: 'Menu',
  data: function () {
    return {

    }
  },
  components: {
    'app-logo': Logo,
    'app-input': Input
  }
}
</script>
<style lang="scss" scoped>
  header {
    height: 4pc;
    width: 100%;
    padding: 0.5pc 4pc;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-evenly;
      div.search {
        flex: 1.5;
        border: 1px solid #ddd;
        text-align: center;
        align-content: center;
      }
      nav {
        flex: 1;
        border: 1px solid #ddd;
      }
      div.logo, div.search, nav {
        box-sizing: border-box;
        padding: 5px;
      }
  }
</style>
