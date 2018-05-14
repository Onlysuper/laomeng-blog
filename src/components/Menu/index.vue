<template>
  <div class="mene-box">
    <div id="menu">
      <ul>
        <!-- <li class="list-item" v-for="(item,index) in menulist" :key="index" @click="movebg(item,index)" @mouseenter.self="menuHover($parent,index)" @mouseleave="menuLeave($parent,index)"> -->
        <li class="list-item" v-for="(item,index) in menulist" :key="index" @click="movebg(item,index)">
          <router-link :to="item.link">
            <div class="menu-title">
              {{item.title}}
            </div>
            <div class="menubg">{{item.title}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/sass/color.scss";
.mene-box {
  flex: 1;
  max-width: 500px;
  display: flex;
  align-items: center;
  // align-items: center;
  #menu {
    width: 100%;
    padding: 0 10%;
  }

  #menu ul {
    display: flex;
    position: relative;

    li.list-item {
      flex: 1;
      // line-height: 55px;

      font-size: 14px;
      cursor: pointer;
      text-align: center;
      position: relative;
      z-index: 2;
      overflow: hidden;
      a {
        display: inline-block;
      }
      .menu-title {
        position: relative;
        z-index: 1;
        // height: 55px;
        line-height: 100%;
        transition: all 0.3s;
        color: #fff;
      }
      .menubg {
        position: absolute;
        top: 55px;
        z-index: 1;
        transition: all 0.5s;
        left: 0;
        width: 100%;
        transform: rotateX(180deg);
        -webkit-transform: rotateX(180deg); /* Safari 和 Chrome */
        -moz-transform: rotateX(180deg);
        opacity: 0.3;
        color: #fff;
      }
      &:hover {
        color: $active-text;
        .menubg {
          top: 35px;
        }
      }
      // background: #fff;
    }
  }
}
</style>
 <script>
// import BScroll from 'better-scroll'
export default {
  components: {
  },
  data: function () {
    return {
      scroll: "",
      id: 1,

      menulist: [{
        title: '首页',
        value: 1,
        link: "/",
      }, {
        title: '技术咖',
        value: 4,
        link: "/technology",
        children: [
        ]
      }, {
        title: '生活家',
        value: 5,
        link: "/life"
      }, {
        title: '关于我',
        value: 6,
        link: "/about"
      }]
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    movebg(item, index) {
    },
    // menuHover(parent, index) {
    //   $(parent.$el).find(".list-item").find('.menubg').css({ top: "55px" });
    //   $(parent.$el).find(".list-item").eq(index).find('.menubg').animate({ top: "32px" });
    // },
    // menuLeave(parent) {
    //   $(".list-item").find('.menubg').css({ top: "55px" });
    // }
  }
}
</script>