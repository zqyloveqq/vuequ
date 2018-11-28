<template>
    <div class="list"  ref="wrapper">
      <div class="">
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-wrapper">
            <div class="button">
              <div class="button-inner">{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-wrapper" >
            <div class="button" v-for="item of hotCities" :key="item.id" @click="handleCity(item.name)">
              <div class="button-inner">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(items, key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="city-list" v-for="item of items" :key="item.id">
            <div class="list-inner border-bottom" @click="handleCity(item.name)">{{item.name}}</div>
          </div>
        </div>

      </div>

    </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'CityList',
    props: {
      hotCities: Array,
      cities: Object,
      letter: String,
    },
    methods: {
      handleCity :function (city) {
        this.$store.dispatch('cityChange', city);
        this.$router.push('/')

      }
    },
    mounted: function () {
      this.scroll = new BScroll(this.$refs.wrapper);
    },
    watch: {
      letter: function (e) {
        const ele = this.$refs[this.letter][0];
        this.scroll.scrollToElement(ele);
      }
    }
  }
</script>

<style scoped lang="stylus">
  .border-bottom
    &:after
      color: #cccccc
  .border-topbottom
    &:before
      color: #ccc
      :after
        color: #ccc
  .list
    position:absolute
    top: 1.5rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .title
      height: .54rem
      line-height: .54rem
      padding-left: .2rem
      background-color: #eee
    .button-wrapper
      padding: .1rem .6rem .1rem .1rem
      overflow:hidden
      .button
        box-sizing:border-box
        float: left
        width: 33.33%
        .button-inner
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
          width: 1.5rem
          padding: .1rem
          margin: .1rem
          display: inline-block
    .city-list
      .list-inner
        padding-left: .2rem
        height:.6rem
        line-height :.6rem
</style>
