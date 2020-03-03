<template>
  <Row :gutter="20">
    <Col :xs="24" :sm="24" :md="24" :lg="16">
    <div v-if="!aid || islabel">
      <Row :gutter="20">
        <Col
          v-for="(item,idx) in artlist"
          :xs="24"
          :sm="24"
          :md="12"
          :lg="12"
          :key="idx"
        >
        <Artcom :artobj="item" />
        </Col>
        <Col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          class="page-box"
        >
        <Page :total="pages*10" @on-change="changePage" class="page" />
        </Col>
      </Row>
    </div>
    <div v-else>
      <Detail :aid="aid" :islabel="islabel" />
    </div>
    </Col>
    <Col :xs="24" :sm="24" :md="24" :lg="8">
    <Aside :recomlist="recomlist" :orderlist="orderlist" :listlabel="listlabel" />
    </Col>
  </Row>
</template>

<script>
import Aside from '@/components/aside/index.vue'
import Artcom from '@/components/artlist/artcom.vue'
import Detail from '@/components/detail/index.vue'
import { IndexArticleList, LabelsArticle, ArtList } from '@/api/mainbody'
export default {
  name: 'Blogcom',
  components: {
    Aside,
    Artcom,
    Detail
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
        return false
      }
    },
    arttype: {
      type: String,
      default: () => {
        return 'blog'
      }
    }
  },
  data () {
    return {
      artlist: [],
      recomlist: [],
      orderlist: [],
      listlabel: [],
      pages: 1,
      pageCount: 10
    }
  },
  async mounted () {
    const self = this
    const Indexret = await IndexArticleList({ pageCount: self.pageCount, arttype: self.arttype })
    if (Indexret.code === 0) {
      // 推荐文章
      this.recomlist = Indexret.data.RecommendList
      // 文章总页数
      this.pages = Indexret.data.pages
      // 排行榜文章
      this.orderlist = Indexret.data.OrderList
      // 标签云
      this.listlabel = Indexret.data.LabelsList
    }
    if (this.aid && this.islabel) {
      const Labelret = await LabelsArticle({ aid: self.aid, pageCount: self.pageCount })
      if (Labelret.code === 0) {
        // 文章列表
        this.artlist = Labelret.data.artlist
        this.pages = Labelret.data.pages
        console.log(this.artlist)
      }
    } else if (Indexret.code === 0) {
      // 文章列表
      this.artlist = Indexret.data.artList
    }
  },
  methods: {
    async changePage (page) {
      const self = this
      let Artret = {}
      if (this.aid && this.islabel) {
        Artret = await ArtList({ pageCount: self.pageCount, page, aid: self.aid, arttype: self.arttype })
      } else {
        Artret = await ArtList({ pageCount: self.pageCount, page, arttype: self.arttype })
      }
      if (Artret.code === 0) {
        // 文章列表
        this.artlist = Artret.data
      }
    }
  }
}
</script>

<style lang='scss'>

</style>
