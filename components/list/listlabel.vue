<template>
  <div class="listlabel">
    <nuxt-link v-for="(item,idx) in listlabel" :key="idx" :to="path+jm(item.typename+',Mrxhx')">
      <span :style="{backgroundColor: 'rgba('+parseInt(Math.random() * 180 + 70)+','+parseInt(Math.random() * 180 + 70)+','+parseInt(Math.random() * 180 + 70)+',.8)'}" class="listlabel-item">
        {{ item.typename }}
      </span>
    </nuxt-link>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
export default {
  name: 'Listlabel',
  props: {
    listlabel: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      path: ''
    }
  },
  mounted () {
    this.path = '/' + (this.$route.path.split('/')[1] === '' ? 'art' : this.$route.path.split('/')[1]) + '/'
  },
  methods: {
    jm (str) {
      return Base64.encode(str)
    }
  }
}
</script>

<style lang="scss">
   .listlabel{
       padding: 20px;
       overflow: hidden;
       .listlabel-item{
           padding: 6px 15px;
           color: $white;
           display: block;
           float: left;
           margin: 6px;
           border-radius: 5px;
           font-size:16px;
       }
   }
</style>
