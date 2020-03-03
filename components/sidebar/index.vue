<template>
  <div class="sidebar">
    <nuxt-link :to="sideritem.linkUrl">
      <img :src="sideritem.linkImg" alt="sidebar图片">
      <div class="title">
        <span>
          {{ sideritem.title }}
        </span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  props: {
    sideritem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
   .sidebar{
       position: relative;
       width: 100%;
       height: 190px;
       margin-bottom: 20px;
       overflow: hidden;
       img{
           width:100%;
           height: 100%;
           display: block;
          -ms-trasition:-ms-transform .5s; /* IE 9 */
          -moz-transition:-moz-transform .5s;/* Firefox */
          -o-transition:-o-transform .5s;/* opera */
          -webkit-transition:-webkit-transform .5s; /* Safari */
          transition: transform .5s; /* 标准语法 */
       }
       .title{
            height: 50px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: $transColor;
            color: $white;
            padding: 14px;
            font-size: 20px;
       }
   }
   .sidebar:hover{
       img{
        -ms-transform: scale(1.3,1.3); /* IE 9 */
        -moz-transform: scale(1.3,1.3);/* Firefox */
        -o-transform: scale(1.3,1.3);/* opera */
        -webkit-transform: scale(1.3,1.3); /* Safari */
        transform: scale(1.3,1.3); /* 标准语法 */
       }
   }
   @media screen and (max-width:768px){
      .sidebar{
        height: auto;
        .title{
            height: 24px;
            padding: 3px;
            font-size: 14px;
       }
      }
    }
</style>
