<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items,index) of pages" :key="index">
        <div class="icon" v-for="item of items" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" class="icon-img-inner">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
    </swiper-slide>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: 'home-icons',
    props: {
      iconList: Array
    },
    data: function () {
      return {
        swiperOption: {
          autoplay: false,
        },

      }
    },
    computed: {
      pages: function () {
        const pages = [];
        this.iconList.forEach((item,index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  }
</script>

<style scoped lang="stylus">
  .icons >>> .swiper-container
    height: 0
    overflow: hidden
    padding-bottom: 50%
  .icons
    height: 0
    overflow: hidden
    padding-bottom: 50%
    /*background-color: red*/
    .icon
      float: left
      position: relative
      width: 25%
      overflow: hidden
      padding-bottom: 25%
      /*background-color: blue*/
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .46rem
        padding: .1rem
        box-sizing: border-box
        .icon-img-inner
          display: block
          width: 75%
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
</style>
