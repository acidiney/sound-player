<template>
  <div class="home">
    <div class="list">
      <app-card v-for="(i, index) in 6" :key="index"/>
    </div>
    <div class="list">
      <app-card v-for="(i, index) in 6" :key="index"/>
    </div>
    <div class="list">
      <app-card v-for="(i, index) in 6" :key="index"/>
    </div>
    <div class="list">
      <app-card v-for="(i, index) in 6" :key="index"/>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Card from '@/components/Card'
export default {
  name: 'home',
  components: {
    'app-card': Card
  }
}
</script>
<style scoped>
div.home {
  padding: 12px;
}

div.list {
    display: flex;
    justify-content: space-between;
  }
</style>
