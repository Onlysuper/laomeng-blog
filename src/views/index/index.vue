<template>
  <div class="scroll-box" ref="scrollbox">
    <my-back-pao>
      <my-banner></my-banner>
    </my-back-pao>
    <div class="container-box">
      <div :class="'top-header '+smallHeader">
        <!-- <div class="container"> -->
        <my-header class="container">
          <my-logo slot="logo"></my-logo>
          <my-menu slot="menu"></my-menu>
        </my-header>
        <!-- </div> -->
      </div>
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<style lang="scss">
@import "../../assets/sass/color.scss";
.container-box {
  position: relative;
  z-index: 20;
  background: #f1f3f3;
  .top-header {
    z-index: 11;
    // background: $header-back;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    transition: all 0.3s;
  }
  .smallHeader {
    height: 55px;
    background: rgba(107, 190, 152, 0.9);
    .container {
      border-bottom: 0px;
    }
  }
}
</style>

<script>
import Velocity from 'velocity-animate';
import Menu from "@/components/Menu"
import Header from "@/components/Header"
import Logo from "@/components/Logo"
import BackPao from "@/components/BackPao"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"


export default {
  name: "MyIndex",
  data() {
    return {
      smallHeader: "smallHeader"
    }
  },
  components:
    {
      "MyMenu": Menu,
      "MyHeader": Header,
      "MyLogo": Logo,
      "MyBanner": Banner,
      "MyBackPao": BackPao,
      "MyFooter": Footer
    },
  methods: {
  },
  mounted() {

    this.$nextTick(() => {
      // $('.footer-back').velocity("scroll", 1000);
      var before = $(window).scrollTop();
      let self = this;
      $(window).scroll(function () {
        var after = $(window).scrollTop();
        if (before < after) {
          console.log('下');
          self.smallHeader = "smallHeader";
          before = after;
        };
        if (before > after) {
          console.log('上');
          self.smallHeader = "";
          before = after;
        };
      });
    })
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
