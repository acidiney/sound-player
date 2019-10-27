<template>
  <div>
    <app-header />
  </div>
</template>
<script>
import Header from '@/components/Player/Header/index.vue'
export default {
  name: 'OpennedPlayer',
  components: {
    'app-header': Header
  },
  computed: {

  }
}
</script>
<style lang="scss" scoped>
    div {
        color: #fff;
    }
</style>
