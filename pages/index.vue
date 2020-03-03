<template>
  <div>
    <Major>
      <Row :gutter="20">
        <Col :xs="24" :sm="24" :md="24" :lg="16">
        <Carouselcom :carouselData="recommend" />
        </Col>
        <Col :xs="24" :sm="24" :md="24" :lg="8">
        <Row :gutter="20">
          <Col
            v-for="item in SidebarData"
            :xs="12"
            :sm="12"
            :md="12"
            :lg="24"
            :key="item._id"
          >
          <Sidebar :sideritem="item" />
          </Col>
        </Row>
        </Col>
      </Row>
      <Row :gutter="20">
        <Col :xs="24" :sm="24" :md="24" :lg="16">
        <Artlist v-for="item in artlist" :key="item.aid" :artobj="item" />
        </Col>
        <Col :xs="24" :sm="24" :md="24" :lg="8">
        <Aside :recomlist="recomlist" :orderlist="orderlist" :listlabel="listlabel" />
        </Col>
      </Row>
    </Major>
  </div>
</template>

<script>
import Major from '@/components/major/index.vue'
import Carouselcom from '@/components/carousel/index.vue'
import Sidebar from '@/components/sidebar/index.vue'
import Artlist from '@/components/artlist/index.vue'
import Aside from '@/components/aside/index.vue'
import { IndexArticleList } from '@/api/mainbody'
export default {
  components: {
    Major,
    Carouselcom,
    Sidebar,
    Artlist,
    Aside
  },
  data () {
    return {
      recommend: [],
      SidebarData: [],
      artlist: [],
      recomlist: [],
      orderlist: [],
      listlabel: []
    }
  },
  async mounted () {
    const Indexret = await IndexArticleList()
    if (Indexret.code === 0) {
      // 头部推荐栏
      this.recommend = Indexret.data.LinkList.splice(0, 5)
      this.SidebarData = Indexret.data.LinkList
      // 文章列表
      this.artlist = Indexret.data.artList
      // 推荐文章
      this.recomlist = Indexret.data.RecommendList
      // 排行榜文章
      this.orderlist = Indexret.data.OrderList
      // 标签云
      this.listlabel = Indexret.data.LabelsList
    }
  }
}
</script>

<style lang='scss'>

</style>
