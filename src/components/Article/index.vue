<template>
  <div>
    <div class="article-list" v-for="(item,index) in articleList" :key="index">
      <h2>{{item.title}}</h2>
      <div class="content-box">
        <div class="img-back">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="text-back">
          {{item.content}}
        </div>
      </div>
      <div class="trends">
        <div>
          <span>{{item.tip}}</span>
          <span>{{item.time}}</span>
          <span>{{item.viewNum}}</span>
        </div>
        <div>
          <span>{{item.butText}}>></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.article-list {
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
  // background: rgba(250, 250, 250, 0.5);
  h2 {
    font-size: 16px;
    padding: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
  }
  .content-box {
    display: flex;
    flex-direction: row;
    .img-back {
      flex: 1;
      width: 200px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .text-back {
      flex: 3;
      padding: 0 10px;
      line-height: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      // height: 200px;
    }
  }
  .trends {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>

<script>
export default {
  data: function () {
    return {
      articleList: [
        {
          title: "我想出去走一走，看看这个大世界",
          content: "网页设计和做人一样，需要少一些套路，多一些真诚。那么下面就为大家揭穿那些看似好用，但用户体验并不好的设计模式。另外再附上解决办法，避免网页设计中出现这些问题。",
          imgUrl: "http://seopic.699pic.com/photo/50049/2298.jpg_wh1200.jpg",
          tip: "",
          time: "2018-09-12",
          viewNum: 100,
          butText: "阅读全文"
        },
        {
          title: "我想出去走一走，看看这个大世界",
          content: "网页设计和做人一样，需要少一些套路，多一些真诚。那么下面就为大家揭穿那些看似好用，但用户体验并不好的设计模式。另外再附上解决办法，避免网页设计中出现这些问题。",
          imgUrl: "http://seopic.699pic.com/photo/50049/2298.jpg_wh1200.jpg",
          tip: "",
          time: "2018-09-12",
          viewNum: 100,
          butText: "阅读全文"
        },
        {
          title: "我想出去走一走，看看这个大世界",
          content: "网页设计和做人一样，需要少一些套路，多一些真诚。那么下面就为大家揭穿那些看似好用，但用户体验并不好的设计模式。另外再附上解决办法，避免网页设计中出现这些问题。",
          imgUrl: "http://seopic.699pic.com/photo/50049/2298.jpg_wh1200.jpg",
          tip: "",
          time: "2018-09-12",
          viewNum: 100,
          butText: "阅读全文"
        },
        {
          title: "我想出去走一走，看看这个大世界",
          content: "网页设计和做人一样，需要少一些套路，多一些真诚。那么下面就为大家揭穿那些看似好用，但用户体验并不好的设计模式。另外再附上解决办法，避免网页设计中出现这些问题。",
          imgUrl: "http://seopic.699pic.com/photo/50049/2298.jpg_wh1200.jpg",
          tip: "",
          time: "2018-09-12",
          viewNum: 100,
          butText: "阅读全文"
        }
      ]
    }
  }
}
</script>
