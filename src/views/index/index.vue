<template>
  <div class="top-header">
    <div class="container">
      <my-header>
        <my-logo slot="logo"></my-logo>
        <my-menu slot="menu"></my-menu>
      </my-header>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/sass/color.scss";
.top-header {
  background: $header-back;
}
</style>

<script>
import Menu from "@/components/Menu"
import Header from "@/components/Header"
import Logo from "@/components/Logo"
export default {
  name: "MyIndex",
  components:
    {
      "MyMenu": Menu,
      "MyHeader": Header,
      "MyLogo": Logo,
    }
  ,
}
</script>
