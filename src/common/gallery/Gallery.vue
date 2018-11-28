<template>
  <div class="gallery" @click="handleClose">
    <swiper class="swiper" :options="swiperOption" >
      <!-- slides -->
        <swiper-slide  v-for="(items,index) of gallaryImgs" :key="index">
          <img class="swiper-img" :src="items">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'CommonGallery',
    data: function () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType : 'fraction',
          observer:true,
          observeParents:true,
          loop: true
        },

      }
    },
    props: {
      gallaryImgs:Array
    },
    methods: {
      handleClose: function () {
        this.$emit('change');
      }
    }
  }
</script>

<style scoped lang="stylus">
  .gallery >>> .swiper-pagination
    overflow: inherit
  .gallery
    z-index: 2
    position: fixed
    left: 0
    top: 0
    bottom: 0
    right: 0
    background-color: rgba(0,0,0,1)
    display: flex;
    justify-content: center;
    flex-direction: column
    .swiper
      overflow: inherit
      width: 100%
      height: 0
      padding-bottom: 100%
      .swiper-pagination
        color: #ffffff
        position: absolute
        bottom: -1rem

      .swiper-img
        width: 100%
</style>
