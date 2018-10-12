<template>
  <div class="input-group">
    <span>
      <font-awesome-icon icon="search"  />
    </span>
    <input type="search" name="search" id="search">
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
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    border-radius: 4px;
    vertical-align: middle;
    }
  }
</style>
