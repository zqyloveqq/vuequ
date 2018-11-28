<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

  export default {
    //name 必须对应
    name: 'HomeSwiper',
    props: {
      swiperList: Array
    },
    data: function () {
      return {
        swiperOption: {
          loop: true,
          pagination: '.swiper-pagination',
        }
      }
    },
    computed: {
      showSwiper: function () {
        return this.swiperList.length
      }
    }
  }
</script>

<style scoped lang="stylus">
 .wrapper >>> .swiper-pagination-bullet-active
    background-color: #ffffff !important
 .wrapper
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>
