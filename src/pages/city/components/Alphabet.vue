<template>
    <div class="alphabet">
      <div class="item"
           v-for="item of letters"
           :key="item"
           :ref="item"
           @click="handleClick"
           @touchstart="handleStart"
           @touchmove="handleMove"
           @touchend="handleEnd"
      >{{item}}</div>

    </div>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object,

    },
    data: function () {
      return {
        touch: false,
        startY: 0,
        actualY: 0,
        timer: null,
      }
    },
    computed: {
      letters: function () {
        let letters = [];
        for(let letter in this.cities) {
          letters.push(letter);
        }
        return letters;
      }
    },
    updated: function () {
      this.startY = this.$refs['A'][0].offsetTop;
    },
    methods:{
      handleClick: function (e) {
        this.$emit('change', e.target.innerText);
      },
      handleStart: function () {
        this.touch = true
      },
      handleMove:  function (e) {
        if(this.touch) {
          this.actualY = e.touches[0].clientY;
          const num = Math.floor((this.actualY - this.startY - 75) / 20);
          if (num >= 0 && num < 27){
            this.$emit('change', this.letters[num]);
          }
        }
      },
      handleEnd: function () {
        this.touch = false
      }
    },
    mounted: function () {

    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/varible.styl"
  .alphabet
    position: absolute
    color: $bgColor
    top: 1.5rem
    overflow: hidden
    right: 0
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    .item
      text-align: center
      width: .4rem
      height: .4rem
      line-height: .4rem
</style>
