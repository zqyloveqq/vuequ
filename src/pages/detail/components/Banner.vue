<template>
  <div>
    <div class="banner" @click="handleOpen">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-icon">
          <i class="iconfont icon-right">&#xe6dd;&nbsp;</i>39
        </div>
      </div>

    </div>
    <common-gallery :gallaryImgs="gallaryImgs" @change="handleClose" v-if="showSwiper"></common-gallery>
  </div>
</template>

<script>
  import CommonGallery from 'common/gallery/Gallery'
  export default {
    name: 'DetailBanner',
    components: {
      CommonGallery,
    },
    data: function(){
      return {
        showSwiper: false,
      }
    },
    props: {
      sightName: String,
      bannerImg:String,
      gallaryImgs: Array,
      categoryList: Array
    },
    methods: {
      handleOpen : function () {
        this.showSwiper = true;
      },
      handleClose: function () {
        this.showSwiper = false;
      }
    }
  }
</script>

<style scoped lang="stylus">
  .banner
    width: 100%
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      width: 100%
      height: .48rem
      line-height: .48rem
      position:absolute
      color: #ffffff
      left: 0
      bottom: 0
      display: flex
      background-image: -webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        padding-left: .3rem
        flex: 1
      .banner-icon
        font-size: .2rem
        text-align: center
        width: 1.6rem
        margin: .05rem .2rem .05rem 0
        hgight: .38rem
        line-height: .38rem
        border-radius: .1rem
        background-color: rgba(0, 0 , 0, 0.8);
        color: #ffffff
        .icon-right
          font-size: .2rem
</style>
