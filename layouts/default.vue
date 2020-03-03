<template>
  <div>
    <BackTop :height="10" :bottom="50" />
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
html {
  font-family: 'Microsoft YaHei';
  font-size: 16px;
  word-spacing: 1px;
  .Blog-content {
    width: 100%;
    background-color: $bgColor;
    overflow: hidden;
    .Blog-content-box {
      width: 1200px;
      margin:30px auto 50px;
    }
    @media screen and (max-width: 769px){
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
}
</style>
