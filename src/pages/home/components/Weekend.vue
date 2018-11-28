<template>
  <div>
    <div class="title border-bottom">
      周末去哪儿
    </div>
    <div class="recommend border-bottom" v-for="item of weekendList" :key="item.id">
      <div class="recommend-img">
        <img class="recommend-img-inner" :src="item.imgUrl" alt="">
      </div>

      <div class="recommend-info">
        <p class="recommend-title">{{item.title}}</p>
        <p class="recommend-desc">{{item.desc}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props: {
      weekendList: Array
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
  .recommend
    .recommend-img
      height: 0
      padding-bottom: 38%
      overflow； hidden
      .recommend-img-inner
        width: 100%
    .recommend-info
      margin-left: .2rem
      min-width: 0
      .recommend-title
        height: .6rem
        line-height: .6rem
        ellipse()
      .recommend-desc
        height: .4rem
        font-size: .2rem
        color: #ccc
        ellipse()
</style>
