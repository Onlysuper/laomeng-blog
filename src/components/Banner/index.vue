<template>
  <div class="banner-box">
    <div class="container user-box">

      <div class="header-img">
        <img src="http://seopic.699pic.com/photo/50049/2298.jpg_wh1200.jpg" alt="">
      </div>
      <div class="user-text">
        <h2>享受就是快乐</h2>
        <p>我付出的是真诚，做的是情怀。</p>
        <p>我付出的是真诚，做的是情怀。</p>
        <p>我付出的是真诚，做的是情怀。</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.banner-box {
  height: 80vh;
  width: 100%;
  /* background: rgba(255, 255, 255, 0.5); */
  color: #fff;
  margin-top: 55px;
  margin-bottom: 10px;
  position: relative;
  z-index: 10;
  .user-box {
    text-align: center;
    .header-img {
      width: 150px;
      height: 150px;
      text-align: center;
      display: inline-block;
      overflow: hidden;
      border-radius: 100%;
      margin: 15vh 20px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .user-text {
      padding: 10px 0;
      margin-top: 10px;
      text-align: center;
      width: 100%;
      // background: rgba(255, 255, 255, 0.5);
      z-index: 20;
      position: relative;
      // background: rgba(0, 0, 0, 0.3);
      h2 {
        margin: 20px 0;
        font-size: 30px;
        font-weight: 300;
      }
    }
  }
}
</style>
