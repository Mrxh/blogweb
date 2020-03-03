<template>
  <div class="artcom">
    <nuxt-link :to="'/'+linkpath+'/'+aid">
      <div class="artcom-img">
        <img :src="artobj.title_page_img" alt="artcom图片">
      </div>
      <div class="artcom-content">
        <h2 class="artcom-title">
          {{ artobj.title }}
        </h2>
        <p class="artcom-intro">
          {{ artobj.intro }}
        </p>
        <Arttip :artobj="artobj" :isrt="false" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import Arttip from './arttip.vue'
export default {
  name: 'Artcom',
  components: {
    Arttip
  },
  props: {
    artobj: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      aid: ''
    }
  },
  computed: {
    linkpath () {
      return this.$route.path.split('/')[1].toString()
    }
  },
  mounted () {
    const self = this
    // 加密
    this.aid = Base64.encode(self.artobj._id).toString()
  }
}
</script>

<style lang="scss">
    .artcom{
       width: 100%;
       height: 310px;
       background: $agColor;
       position: relative;
       margin-bottom: 20px;
       .artcom-img{
         overflow: hidden;
         img{
           width: 100%;
           height: 220px;
           display: block;
          -ms-trasition:-ms-transform .5s; /* IE 9 */
          -moz-transition:-moz-transform .5s;/* Firefox */
          -o-transition:-o-transform .5s;/* opera */
          -webkit-transition:-webkit-transform .5s; /* Safari */
          transition: transform .5s; /* 标准语法 */
         }
       }
       .artcom-content{
         position: absolute;
         background: $white;
         left: 10px;
         right: 10px;
         bottom:0;
         height: 130px;
         padding: 10px 15px;
         .artcom-title{
           text-align: center;
           font-size: 14px;
           margin-bottom: 6px;
           height: 21px;
           overflow: hidden;
           text-overflow:ellipsis;
           white-space: nowrap;
         }
         .artcom-intro{
           margin-bottom: 10px;
           overflow: hidden;
           display: -webkit-box;
           -webkit-box-orient: vertical;
           -webkit-line-clamp: 3;
         }
       }
       a{
         color: $fontColor;
       }
    }
    .artcom:hover{
       .artcom-title{
         color:$highlight-color;
       }
       img{
        -ms-transform: scale(1.3,1.3); /* IE 9 */
        -moz-transform: scale(1.3,1.3);/* Firefox */
        -o-transform: scale(1.3,1.3);/* opera */
        -webkit-transform: scale(1.3,1.3); /* Safari */
        transform: scale(1.3,1.3); /* 标准语法 */
       }
   }
</style>
