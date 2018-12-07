<template>
  <div id="home">
    <nav class="border-bottom categories">
      <ul>
        <li>POP</li>
        <li>Dance</li>
        <li>Rock</li>
        <li>Classic</li>
      </ul>
    </nav>
  </div>
</template>
<style lang="scss" scoped>

  @mixin fontActive () {
    font-weight: 900;
  }

  #home {
    .categories {
      width: 100%;
      text-align: center;
      box-sizing: border-box;
      height: auto;
      padding: 5px;
      ul {
        li {
          color: white;
          padding-left: 10px;
          transition: .26s all ease-in-out;
          &:hover {
            @include fontActive();
          }
        }
      }
    }
  }

  .active-item {
    @include fontActive();
  }
</style>
