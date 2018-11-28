<template>
  <div>
    <div class="header">
      城市列表
      <router-link to="/">
        <i class="iconfont iconfont-left">&#xe624;</i>
      </router-link>

    </div>
    <div class="search-wrapper">
      <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyWord">
      </div>
      <div class="search-content" v-show="keyWord" ref="search">
        <ul class="">
          <li class="item border-bottom" v-for="item of list" :key="item.id" @click="handleCity(item.name)">{{item.name}}</li>
          <li class="item border-bottom" v-show="searchShow">没有找到匹配数据</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityHeader',
    props: {
      cities: Object,
    },
    data: function () {
      return{
        keyWord: '',
        list: [],
        timer: null,
        searchShow: false,
      }
    },
    methods: {
      handleCity :function (city) {
        this.$store.dispatch('cityChange', city);
        this.$router.push('/');

      }
    },
    updated: function () {
      this.searchShow = !this.list.length;
    },
    mounted: function () {
      this.scroll = new Bscroll(this.$refs.search);
    },
    watch: {
      keyWord: function () {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          let num = [];
          for(let i in this.cities) {
            this.cities[i].forEach((val) =>{
              if (val.spell.indexOf(this.keyWord) > -1 || val.name.indexOf(this.keyWord) > -1) {
                num.push(val);
              }
              this.list = num;
            })
          }
        }, 100);
      },
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/varible.styl"
  .header
    position: relative
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
  .search-wrapper
    position: relative
    .search
      background-color: $bgColor
      height: .64rem
      text-align: center
      .search-input
        box-sizing: border-box
        width: 95%
        text-align: center
        padding: 0 .2rem
        color: #666
        height: .56rem
        border-radius: .08rem
    .search-content
      z-index: 2
      overflow: hidden
      position: fixed
      top: 1.5rem
      left: 0
      right: 0
      bottom: 0
      background-color: #ccc
      .item
        padding-left: .2rem
        height:.6rem
        line-height :.6rem
        background-color: #ffffff
</style>
