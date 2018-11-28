<template>
  <div>
    <detail-header></detail-header>
    <detail-banner :sightName="sightName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"></detail-banner>
    <div style="height: 20rem">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList,
    },
    data: function () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        categoryList: []
      }
    },
    methods: {
      getDetailInfo: function () {
        axios.get('/api/detail.json', {
          params : {
            id: this.$route.params.id
          }
        }).then(this.getDetailInfoSucc);
      },
      getDetailInfoSucc: function (res) {
        let data = res.data;
        if(data.ret === true && data.data) {
          this.sightName = data.data.sightName;
          this.bannerImg = data.data.bannerImg;
          this.gallaryImgs = data.data.gallaryImgs;
          this.categoryList = data.data.categoryList;
        }
      }
    },
    mounted: function () {
      this.getDetailInfo();
    },
    activated: function () {
      this.getDetailInfo();
    }
  }
</script>

<style scoped lang="stylus">

</style>
