<template>
  <div>
    <Row :gutter="20">
      <Col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="24"
      >
      <List title="博文推荐">
        <nuxt-link v-for="(item,idx) in recomlist" :to="'/'+linkpath+'/' + jm(item._id)" :key="idx">
          <Listitem :listobj="item" />
        </nuxt-link>
      </list>
      </Col>
      <Col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="24"
      >
      <List title="点击排行">
        <nuxt-link v-for="(item,idx) in orderlist" :to="'/'+linkpath+'/' + jm(item._id)" :key="idx">
          <Listitem :listobj="item" />
        </nuxt-link>
      </List>
      </Col>
    </Row>
    <Row :gutter="20">
      <Col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="24"
      >
      <List title="联系我">
        <Listitems v-for="(item,idx) in contactlist" :listobj="item" :key="idx" />
      </list>
      </Col>
      <Col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="24"
      >
      <List title="标签云">
        <Listlabel :listlabel="listlabel" />
      </List>
      </Col>
    </Row>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import List from '@/components/list/index.vue'
import Listitem from '@/components/list/listitem.vue'
import Listitems from '@/components/list/listitems.vue'
import Listlabel from '@/components/list/listlabel.vue'
export default {
  name: 'Aside',
  components: {
    List,
    Listitem,
    Listitems,
    Listlabel
  },
  props: {
    recomlist: {
      type: Array,
      default: () => {
        return []
      }
    },
    orderlist: {
      type: Array,
      default: () => {
        return []
      }
    },
    listlabel: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      contactlist: [
        {
          cid: '1',
          icon: 'icon-qq',
          val: '2929314899',
          name: 'qq'
        },
        {
          cid: '2',
          icon: 'icon-weixin',
          val: '2929314899',
          name: 'weixin'
        },
        {
          cid: '3',
          icon: 'icon-youxiang',
          val: 'wlgmhdmt@163.com',
          name: 'youxiang'
        },
        {
          cid: '1',
          icon: 'icon-dianhua',
          val: '18381306530',
          name: 'dianhua'
        }
      ]
    }
  },
  computed: {
    linkpath () {
      return this.$route.path.split('/')[1].toString()
    }
  },
  methods: {
    jm (str) {
      return Base64.encode(str)
    }
  }
}
</script>

<style lang="scss">

</style>
