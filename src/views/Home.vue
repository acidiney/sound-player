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
    <section
      class="banner"
      :style="{'background': `url(${banner})`}"/>
    <section class="cards">
      <h4> Descubra </h4>
      <div class="row">
        <app-card
          v-for="(item,i) in recommends"
          :key="i"
          :data="item"
        />
      </div>
    </section>
  </div>
</template>
<script>
import Card from '@/components/Card'

export default {
  name: 'AppHome',
  components: {
    'app-card': Card
  },
  data: function () {
    return {
      banner: 'https://2.bp.blogspot.com/-YpLefM2pgkA/W9LS1sRULTI/AAAAAAAAK-4/gIKl41eqEN4GXqxl2548M5nH9GDK6XLhgCLcBGAs/s1600/Matias%2BDam%25C3%25A1sio%2B-%2BAugusta%2B%2528%25C3%2581lbum%2529.jpg',
      recommends: []
    }
  },
  created: function () {
    this.$db.collection('recommends').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        this.recommends.push(doc.data())
      })
    })
  }
}
</script>
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
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    border-radius: 20px;
  }

  h4 {
    color: white;
    margin-left: 20px;
  }
  .active-item {
    @include fontActive();
  }
</style>
