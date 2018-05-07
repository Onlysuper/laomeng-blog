<template>
  <div class="main-box container">
    <div class="left-box">
      <my-article></my-article>
    </div>
    <div class="right-box">
      <my-about></my-about>
      <my-article></my-article>
    </div>
  </div>
</template>
<style lang="scss">
.main-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .left-box {
    flex: 1;
    margin-right: 5px;
    // background: #ccc;
  }
  .right-box {
    width: 250px;
    margin-left: 5px;
    // background: #ccc;
  }
}
</style>

<script>
import Article from "@/components/Article"
import About from "@/components/About"
export default {
  components:
    {
      "MyArticle": Article,
      "MyAbout": About,
    }
}
</script>
