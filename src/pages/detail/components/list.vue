<template>
  <div class="list">
    <div v-for="(item,index) of categoryList" :key="index" class="item">
      <div  class="border-bottom">
        <span class=""></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :categoryList="item.children" class=""></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailList',
    props:{
      categoryList: Array
    }
  }
</script>

<style scoped lang="stylus">
  .list
    .item
      .border-bottom
        height: .8rem
        font-size: .28rem
        line-height: .8rem
        padding-left: .6rem
      .item-children
        padding-left: .2rem
</style>
