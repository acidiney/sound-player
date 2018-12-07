<template>
  <div class="card" @click="startPlay(data)">
    <header>
      <img src="../assets/music.png" alt="music" height="75" width="75">
    </header>
    <div class="bottom-info">
      <p>
        <span>{{data.title}}</span> <br>
        <small> {{data.author}} </small>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .card {
    width: 122px;
    height: 80px;
    color: white;
    display: flex;
    border: 1px solid #11111145;
    padding: 5px 9px;
  }
</style>
<script>
export default {
  name: 'app-card',
  props: [
    'data'
  ],
  methods: {
    startPlay: function (data) {
      this.$store.dispatch('playmusic', data)
    }
  }
}
</script>
