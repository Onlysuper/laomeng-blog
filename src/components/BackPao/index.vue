<template>
  <div v-backAnimite class="back">
    <div class="">
      <h1></h1>
      <p></p>
    </div>
  </div>
</template>
<style lang="scss">
.back {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // background: url(../../assets/imgs/bg.jpg) no-repeat;
  // background-size: cover;
  height: 100vh;
  // margin-bottom: 70px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  .example {
    background: #283339;
    padding: 10px;
    margin-bottom: 50px;
  }
  .code {
    margin-left: -100px;
    font-size: 1.4em;
    font-weight: 500;
    margin-bottom: 0;
  }
  .selector,
  .brace {
    color: #849d66;
  }
  .method {
    color: #b2bbc4;
  }
  .jq {
    color: #5d8a87;
  }
  .key {
    color: #8666a3;
  }
  .comment {
    color: #96a4be;
  }
}
</style>
<script>
import "@src/common/circleMagic.js";
export default {
  directives: {
    backAnimite: {
      // 指令的定义
      inserted(el) {
        $(el).circleMagic({
          radius: 35,
          density: .1,
          color: 'rgba(255,255,255, .4)',
          clearOffset: .9
        });
      }
    }
  }
}
</script>
