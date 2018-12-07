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
    <section class="banner"> BARNNER </section>
    <section class="cards">
      <h4> Descubra </h4>
      <div class="row">
        <app-card v-for="i in 2" v-bind:key="i"></app-card>
      </div>
      <div class="row">
        <app-card v-for="i in 2" v-bind:key="i"></app-card>
      </div>
      <div class="row">
        <app-card v-for="i in 2" v-bind:key="i"></app-card>
      </div>
      <div class="row">
        <app-card v-for="i in 2" v-bind:key="i"></app-card>
      </div>
      
    </section>
  </div>
</template>
<style lang="scss" scoped>

  @mixin fontActive () {
    font-weight: 900;
  }

  #home {
    position: relative;
    height: 80%;
    box-sizing: border-box;
    overflow-y: visible;
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

    .cards {
      display: flex;
      flex-direction: column;
      padding-top: 12px;

      .row {
        display: flex;
        justify-content: space-around;
        margin: 5px 0;
      }
    }
  }

  .banner {
    border: 1px solid #11111145;
    height: 150px;
    width: 90%;
    margin: auto;
    margin-top: 20px;
  }

  h4 {
    color: white;
    margin-left: 20px;
  }
  .active-item {
    @include fontActive();
  }
</style>
<script>
  import Card from '@/components/Card'

  export default {
    name: 'app-home', 
    components: {
      'app-card': Card
    }
  }
</script>