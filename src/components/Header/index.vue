<template>
  <header class="header">
    <slot name="logo"></slot>
    <slot name="menu"></slot>
  </header>
</template>
<style lang="scss">
@import "../../assets/sass/color.scss";
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
</style>
