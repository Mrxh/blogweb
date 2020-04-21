<template>
  <div class="detail-intro">
    <h2 class="detail-title">
      {{ artDetail.title }}
    </h2>
    <Arttip :artobj="artDetail" :isrt="false" />
    <div v-html="artDetail.article_html" class="markdown-body detail-content">
    </div>
    <div class="detail-care">
      <i @click="careArt(artDetail._id)" class="iconfont icon-zan" />
    </div>
    <Formcom :aid="artDetail._id" :commentList="commentList" @getComment="getComList" />
  </div>
</template>

<script>
import Formcom from './form.vue'
import Arttip from '@/components/artlist/arttip.vue'
import { ArticleDetail, careArticle } from '@/api/mainbody'
export default {
  name: 'Detail',
  components: {
    Arttip,
    Formcom
  },
  props: {
    aid: {
      type: String,
      default: () => {
        return ''
      }
    },
    islabel: {
      type: Boolean,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {
      artDetail: {},
      commentList: []
    }
  },
  async created () {
    const self = this
    if (!self.islabel) {
      const DetailRet = await ArticleDetail(self.aid)
      if (DetailRet.code === 0) {
        this.artDetail = DetailRet.data.detail
        this.commentList = DetailRet.data.ComList
      }
    }
  },
  methods: {
    async getComList (data) {
      const DetailRet = await ArticleDetail(data.id)
      if (DetailRet.code === 0) {
        this.commentList = DetailRet.data.ComList
      }
    },
    async getDetail (id) {
      const DetailRet = await ArticleDetail(id)
      if (DetailRet.code === 0) {
        this.artDetail = DetailRet.data.detail
      }
    },
    async careArt (aid) {
      const ret = await careArticle({ id: aid })
      if (ret.code === 0) {
        this.getDetail(aid)
        this.$Message.success('点赞成功！')
      } else {
        this.$Message.error('点赞失败！')
      }
    }
  }
}
</script>

<style lang='scss'>
  .detail-intro{
    padding: 30px 40px;
    background: #fff;
    font-size: 18px;
    border-radius: 5px;
    margin-bottom: 20px;
    .detail-title{
      text-align: center;
      margin-bottom: 20px;
    }
    .detail-content{
      margin:20px 0;
    }
    .detail-care{
      text-align: center;
      color: #FFBE34;
      i{
        font-size: 50px;
        cursor: pointer;
      }
    }
  }
</style>
