<template>
  <div class="input-group">
    <span>
      <font-awesome-icon v-bind:icon="icon"  />
    </span>
    <input v-bind:type="type" name="search" id="search" v-bind:placeholder="placehold">
  </div>
</template>
<script>
export default {
  props: ['name', 'placehold', 'type', 'icon'],
  name: 'Input'
}
</script>
<style lang="scss" scoped>
  .input-group {
    display: table;
    position: relative;
    border-collapse: separate;

    span {
    font-size: 14pt;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    border-radius: 4px;
    vertical-align: middle;
    position: absolute;
    line-height: 1;
    }
    input {
      font-size: 14pt;
      border: 0;
      padding: 0 0 0 2pc;
      line-height: 1;
      outline: none;
    }
  }
</style>
