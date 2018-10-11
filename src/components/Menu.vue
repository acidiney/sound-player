<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <vs-navbar-title>
        🔊 Sound Player
      </vs-navbar-title>
      <vs-spacer></vs-spacer>
      <vs-input vs-icon="search" placeholder="Search" vs-size="normal" v-model="search"/>
      <vs-spacer></vs-spacer>
      <vs-navbar-item index="0">
        <a href="#">Discovery</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">PodCast</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Account</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data: function () {
    return {
      activeItem: 0,
      search: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .nabarx {
    height: 5pc;
    padding: 0 6pc;
    color: #fff !important;
    background:#0f0f0f !important;
  }
  .vs-navbar-title {
    color: #1f74ff !important;
  }
  .vs-inputx {
    border:0 !important;
  }
  .vs-navbar-item {
    font-size: 12pt;
    color: inherit !important;
    a {
      font-size: inherit !important;
      color: inherit !important;
      &:hover{
        color: #1f74ff !important;
      }
    }
  }
</style>
