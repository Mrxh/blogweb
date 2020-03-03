<template>
  <div class="Blog-content">
    <div v-show="isShow" class="Blog-content-banner">
      <img :src="imgUrl" alt="banner图">
    </div>
    <div class="Blog-content-box">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Major',
  props: {
    path: {
      type: String,
      default () {
        return ''
      }
    }
  },
  computed: {
    imgUrl () {
      const self = this
      if (self.path === '') {
        return 'img/banner/banner_art.jpg'
      } else {
        return 'img/banner/banner_' + this.path + '.jpg'
      }
    },
    isShow () {
      const self = this
      if (self.path) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="scss">
  .Blog-content {
    width: 100%;
    background-color: $bgColor;
    overflow: hidden;
    position: relative;
    .Blog-content-banner{
      width: 100%;
      height: 300px;
      img{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .Blog-content-box {
      width: 1200px;
      margin:30px auto 50px;
    }
    @media screen and (max-width: 769px){
      .Blog-content-banner{
        height: auto;
      }
       .Blog-content-box{
         width: 96%;
         margin-left:2%;
         margin-right:2%;
       }
    }
    @media screen and (max-width: 1024px){
       .Blog-content-box{
         width: 96%;
         margin-left:2%;
         margin-right:2%;
       }
    }
  }
</style>
