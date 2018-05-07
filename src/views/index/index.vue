<template>
  <div>
    <!-- <my-back-pao></my-back-pao> -->
    <div class="container-box">
      <div class="top-header">
        <!-- <div class="container"> -->
        <my-header>
          <my-logo slot="logo"></my-logo>
          <my-menu slot="menu"></my-menu>
        </my-header>
        <!-- </div> -->
      </div>
      <my-banner></my-banner>
      <router-view></router-view>

    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/sass/color.scss";
.container-box {
  position: relative;
  z-index: 20;
  // background: red;
  .top-header {
    z-index: 11;
    // background: $header-back;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>

<script>
import Menu from "@/components/Menu"
import Header from "@/components/Header"
import Logo from "@/components/Logo"
import BackPao from "@/components/BackPao"
import Banner from "@/components/Banner"

export default {
  name: "MyIndex",
  components:
    {
      "MyMenu": Menu,
      "MyHeader": Header,
      "MyLogo": Logo,
      "MyBanner": Banner,
      "MyBackPao": BackPao
    }
  ,
}
</script>
