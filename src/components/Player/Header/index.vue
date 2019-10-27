<template>
  <header>
    <ul>
      <li>
        <font-awesome-icon icon="arrow-left"/>
      </li>
      <li>Player aberto</li>
      <li>--</li>
    </ul>
  </header>
</template>
<script>
export default {
  name: 'PlayerOpennedHeader'
}
</script>
<style lang="scss" scoped>
header {
  height: 150px;
  width: 100vw;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;

    li {
      font-weight: bolder;
    }
  }
}
</style>
