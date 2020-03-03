<template>
  <div class="detail-intro">
    <h2 class="detail-title">
      {{ artDetail.title }}
    </h2>
    <Arttip :artobj="artDetail" :isrt="false" />
    <div v-html="artDetail.article_html" class="markdown-body detail-content">
    </div>
    <Formcom :aid="artDetail._id" :commentList="commentList" @getComment="getComList" />
  </div>
</template>

<script>
import Formcom from './form.vue'
import Arttip from '@/components/artlist/arttip.vue'
import { ArticleDetail } from '@/api/mainbody'
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
  }
</style>
