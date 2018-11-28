<template>
  <div>
    <city-header :cities="cities"></city-header>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleChange"></city-alphabet>
  </div>

</template>

<script>
  import CityHeader from './components/Header'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import axios from 'axios'
  export default {
    name: 'city',
    components: {
      CityHeader,
      CityList,
      CityAlphabet,
    },
    data: function () {
      return {
        hotCities: [],
        cities: {},
        letter: '',
      }
    },
    methods:{
      getCityInfo: function () {
        axios.get('/api/city.json')
          .then(this.getCityInfoSucc);
      },
      getCityInfoSucc: function (res) {
        let data = res.data;
        if (data.ret && data.data) {
          this.hotCities = data.data.hotCities;
          this.cities = data.data.cities;
        }
      },
      handleChange: function (e) {
        this.letter = e;
      }
    },
    mounted: function () {
      this.getCityInfo();
    }
  }
</script>

<style scoped>

</style>
