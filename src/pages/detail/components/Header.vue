<template>
    <div>
      <div class="header-abs">
        <router-link to="/">
          <i class="iconfont">&#xe624;</i>
        </router-link>

      </div>
      <div class="header-fixed" v-if="showFixed" :style="styleFixed">
          景点详情
          <router-link to="/">
            <i class="iconfont iconfont-left">&#xe624;</i>
          </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    data: function () {
      return {
        showFixed: false,
        styleFixed: {
          opacity: 1
        }
      }
    },
    methods: {
      handleScroll: function () {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 60){
          this.showFixed = true;
          let opacity = scrollTop / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.styleFixed = {
            opacity: opacity,
          };
        } else {
          this.showFixed = false;
        }
      }
    },
    activated: function (){
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated: function () {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style scoped lang="stylus">
  @import "~style/varible.styl"
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height:  .8rem
    border-radius: 50%
    background-color: rgba(0,0,0,.8)
    z-index: 2
    line-height: .8rem
    text-align: center
    .iconfont
      color: #ffffff
  .header-fixed
    width: 100%
    z-index: 10
    position: fixed
    top: 0
    left: 0
    right: 0
    background-color: $bgColor
    height: $Height
    line-height: $Height
    text-align: center
    font-size: .32rem
    color: white
    .iconfont-left
      display: block
      position: absolute
      top: 0
      left: 0
      width: .6rem
      color: white
      height: $Height
      text-align: center
</style>
