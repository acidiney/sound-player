<template>
  <div id="player">
    <div class="thumb">
      <img src="../assets/cd.png" alt="cd" height="50" width="50">
      <p>
        <span> Music </span> <br />
        <small> Author </small>
      </p>
    </div>
    <div class="player">
      <div class="config">
        <ul>
          <li><font-awesome-icon icon="step-backward"  /></li>
          <li><font-awesome-icon icon="play-circle"  /></li>
          <li><font-awesome-icon icon="step-forward"  /></li>
        </ul>
        <div class="sound-current"></div>
      </div>
    </div>
    <div class="comp">
      <font-awesome-icon icon="volume-up"/>
      <div class="volume-current"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 div#player {
   position: fixed;
   bottom: 0;
   background: #fff;
   border-top: 1px solid #ccc;
   width: 100%;
   height: 4pc;
   display: flex;
    .thumb {
      flex:1;
      text-align: left;
      display: flex;
      align-items: center;
      justify-items: flex-end;
      padding: 0 0 0 1pc;

      p {
        padding-left: 1pc;
        color: #444;
        font-weight: 500;
        small {
          font-weight: 100;
        }
      }
    }
    .player {
      flex: 2;
      display: flex;
      align-items: center;
      justify-items: center;
      .config {
        width: 100%;
        ul {
          li {
            list-style: none;
            display: inline;
            font-size: 16pt;
            padding-left: 10px;
            cursor: pointer;
            color:#444;
          }
          margin-top: 0px;
          margin-bottom: 5px;
          margin-left: 0;
          margin-right: 0;
          padding: 0;
        }
        .sound-current {
          width: 20pc;
          border:3px solid #444;
          margin: 0 auto;
          border-radius: 10px;
        }
      }
    }
    .comp {
      flex: 1;
      display: flex;
      align-items: center;
      justify-items: center;

      svg {
        cursor:pointer;
      }
      .volume-current {
        width: 7pc;
        border:3px solid #444;
        margin-left: 12px;
        cursor: pointer;
        border-radius: 10px;
      }
    }
 }
</style>
