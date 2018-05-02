<template>
  <div class="mene-box">
    <div id="menu">
      <ul>
        <li v-for="(item,index) in menulist" :key="index" @click="movebg(item,index)">
          {{item.title}}
        </li>
        <div class="menubg"></div>
      </ul>
    </div>
    <!-- <div class="se">
      选中的ID为：{{id}}
    </div> -->
  </div>
</template>
<style lang="scss">
.mene-box {
  flex: 1;
  #menu {
    width: 100%;
    padding: 0 10%;
  }

  #menu ul {
    display: flex;
    position: relative;
    li {
      flex: 1;
      line-height: 40px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      position: relative;
      z-index: 2;
    }
    .menubg {
      position: absolute;
      background: #8f0000;
      height: 40px;
      top: 0;
      z-index: 1;
      transition: all 0.1s;
      left: 0;
      width: calc(100%/7);
    }
  }
}
</style>
 <script>
export default {
  data: function () {
    return {
      id: 1,
      menulist: [{
        title: '首页',
        value: 1
      }, {
        title: '输入',
        value: 2
      }, {
        title: '媒体',
        value: 3
      }, {
        title: '导航',
        value: 4
      }, {
        title: '其他',
        value: 5
      }, {
        title: '网页模板',
        value: 6
      }, {
        title: '常用代码',
        value: 7
      }]
    }
  },
  mounted() {
    //获取menu宽度
    let menuwidth = document.querySelector("#menu ul").offsetWidth
    //获取li
    let liwidth = document.querySelectorAll("#menu li")
    //背景
    let bgWidth = document.querySelector(".menubg")
  },
  methods: {
    movebg(item, index) {
      let bgWidth = document.querySelector(".menubg")
      let selfLeft = document.querySelectorAll("#menu li")[index].offsetLeft
      bgWidth.style.left = selfLeft + 'px'
    }
  }
}
</script>