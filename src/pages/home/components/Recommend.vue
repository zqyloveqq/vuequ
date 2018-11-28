<template>
  <div>
    <div class="title border-bottom">
      热门景点
    </div>

    <router-link tag="div" class="recommend border-bottom" v-for="item of recommendList" :key="item.id" :to="'/detail/' + item.id">
      <img class="recommend-img" :src="item.imgUrl" alt="">
      <div class="recommend-info">
        <p class="recommend-title">{{item.title}}</p>
        <p class="recommend-desc">{{item.desc}}</p>
        <p class="recommend-btn">查看详情</p>
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommendList: Array
    },
    data: function () {
      return {

      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/mixin.styl"
  .title
    text-indent: .2rem
    height: .62rem
    line-height: .6rem
    background-color: #eee
    margin-top: .1rem
  .recommend
    display: flex
    padding: .1rem
    .recommend-img
      width: 1.7rem
      height: 1.7rem
      margin-right: .2rem
    .recommend-info
      flex: 1
      min-width: 0

      .recommend-title
        height: .6rem
        line-height: .6rem
        ellipse()
      .recommend-desc
        color: #ccc
        margin-bottom: .2rem
        ellipse()
      .recommend-btn
        background-color: #ffbe0a
        color: #fff
        border-radius: .12rem
        text-align: center
        height: .4rem
        line-height:.4rem
        width: 1.6rem
</style>
