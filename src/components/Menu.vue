<template>
  <header>
    <app-logo/>
    <nav>
      <ul class="border-bottom">
        <li> Descubrir </li>
        <li> PodCast </li>
        <li class="my-account"> Account </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import Logo from './Logo'
export default {
  name: 'Menu',
  data: function () {
    return {}
  },
  components: {
    'app-logo': Logo
  }
}
</script>
<style lang="scss" scoped>

nav{
  text-align: center;
  ul {
    li {
      color: white;
      font-weight: 900;
    }
  }
}

.my-account {
  color: #f06206;
}

@media screen and (min-width: 828px) {
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f069;

    nav {
      flex: 0.5;
    }
  }

  .border-bottom {
    border-bottom-width: 0;
  }
}
</style>
