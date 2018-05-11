<template>
  <header class="header">
    <div class="container con-box">
      <slot name="logo"></slot>
      <slot name="menu"></slot>
    </div>
  </header>
</template>
<style lang="scss">
@import "../../assets/sass/color.scss";
.header {
  background: red;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  .scrollDown {
    background: rgba(107, 190, 152, 0.9);
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.1);
  }
  .con-box {
    padding: 0 20px;
    flex: 1;
    // width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
}
</style>
<script>
import Velocity from 'velocity-animate';
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      Velocity($('.header'), { height: 100, left: 0, top: 10 }, 1000)
    }
  }
}
</script>
