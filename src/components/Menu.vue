<template>
  <header>
    <app-logo></app-logo>
    <div class="search">
      <app-input icon="search" placehold="O que procura..." type="search"></app-input>
    </div>
    <nav>
      <ul>
        <li>Descubrir</li>
        <li>PodCast</li>
        <li class="my-account">Account</li>
      </ul>
    </nav>
  </header>
</template>
<script>
import Logo from './Logo'
import Input from './Input'
export default {
  name: 'Menu',
  data: function () {
    return {}
  },
  components: {
    'app-logo': Logo,
    'app-input': Input
  }
}
</script>
<style scoped>
header {
  height: 4pc;
  width: 100%;
  padding: 0.5pc 4pc;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  display: flex;
}
div.search {
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}
nav {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
div.logo,
div.search,
nav {
  box-sizing: border-box;
  padding: 5px;
}

.my-account {
  color: #f0f0f0;
  background-color: #f06206;
  border-radius: 10px;
  padding: 3px 10px;
}

 li {
    list-style: none;
    display: inline;
    justify-content: space-between;
    padding: 0 10px;
    cursor: pointer;
  }
</style>
