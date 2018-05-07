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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: #34883a;
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
