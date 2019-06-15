<template>
  <div id="app">
    <app-menu/>
    <router-view/>
    <app-player/>
  </div>
</template>
<script>
import Menu from '@/components/Menu'
import Player from '@/components/Player'

export default {
  name: 'app',
  components: {
    'app-menu': Menu,
    'app-player': Player
  }
}
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Roboto");

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
