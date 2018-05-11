<template>
  <div class="footer-back">
    <div class="container">
      <slot></slot>
    </div>
    <img :src="require('@/assets/imgs/footer.png')" alt="">
  </div>
</template>
<style lang="scss">
.footer-back {
  background: rgba(107, 190, 152, 1);
  color: #fff;
  text-align: center;
}
</style>
