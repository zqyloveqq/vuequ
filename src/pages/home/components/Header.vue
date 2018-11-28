<template>
    <div class="head">
      <div class="head-left">
        <i class="iconfont">&#xe624;</i>
      </div>
      <div class="head-input">
        <i class="iconfont">&#xe632;</i>输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="head-right">
          {{this.$store.state.city}}<i class="iconfont icon-right">&#xe600;</i>
        </div>
      </router-link>

    </div>
</template>

<script>
  export default {
      name: 'home-header'
  }
</script>

<style scoped lang="stylus">
  @import "~style/varible.styl"
  .head
    height:$Height
    display: flex
    background-color: $bgColor
    color: #ffffff
    text-align:center
    overflow:hidden
    .head-left
      /*background-color: red*/
      line-height: $Height
      width: .66rem
      float:left
    .head-input
      flex: 1
      margin: .12rem 0 .10rem .1rem
      background-color: #fff
      line-height: .64rem
      text-align:left
      padding-left: .12rem
      color: #ccc
      border-radius: .12rem
    .head-right
      float:right
      color: white
      line-height: .86rem
      min-width:1.04rem
      padding: 0 .1rem 0 .1rem
      .icon-right
        padding-left: .06rem
        font-size: .1rem
      /*background-color: blue*/
</style>
