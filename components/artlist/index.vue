<template>
  <div class="artlist">
    <nuxt-link :to="'/'+linkpath(artobj.arttype)+'/'+aid">
      <h2 class="title">
        {{ artobj.title }}
      </h2>
      <div class="artlist-content">
        <Row :gutter="20">
          <Col :xs="24" :sm="24" :md="8" :lg="8">
          <img :src="artobj.title_page_img" alt="文章小图">
          </Col>
          <Col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="artlist-detail">
            <p class="artlist-intro">
              {{ artobj.intro }}
            </p>
            <Arttip :artobj="artobj" />
          </div>
          </Col>
        </Row>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import Arttip from './arttip.vue'
export default {
  name: 'Artlist',
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
  mounted () {
    const self = this
    // 加密
    this.aid = Base64.encode(self.artobj._id).toString()
  },
  methods: {
    linkpath (arttype) {
      return arttype === 'blog' ? 'art' : 'note'
    }
  }
}
</script>

<style lang="scss">
    .artlist{
        padding: 16px;
        background-color: $white;
        color: $fontColor;
        margin-bottom: 16px;
        font-size: 16px;
        border-radius: 5px;
        .title{
            font-weight: 700;
            padding: 12px;
            margin-bottom: 12px;
            border-left: 4px solid $highlight-color;
            color: $fontColor;
        }
        .artlist-content{
            img{
                width: 100%;
                height: 150px;
            }
            .artlist-detail{
              .artlist-intro{
                  color:$titleColor;
                  margin-bottom: 20px;
              }
              .artlist-tip{
                  float: right;
                  color:$tipColor;
                  span{
                      margin-right:16px;
                      .ivu-icon{
                          margin-right:8px;
                      }
                  }
              }
            }
        }
    }
    .artlist:hover{
        .title{
            color:$highlight-color;
        }
    }
</style>
