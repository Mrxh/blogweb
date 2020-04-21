<template>
  <Major path="photo">
    <Title routername="相册" />
    <Camera :imgData="imgData" />
    <Page :total="pages*10" @on-change="changePage" class="page" />
  </Major>
</template>

<script>
import Major from '@/components/major/index.vue'
import Title from '@/components/title/index.vue'
import Camera from '@/components/camera/index.vue'
import { imageList } from '@/api/files'

export default {
  components: {
    Major,
    Title,
    Camera
  },
  data () {
    return {
      imgData: [],
      pages: 1,
      pageCount: 20
    }
  },
  async created () {
    const ret = await imageList({ pageCount: this.pageCount, page: 1 })
    if (ret.code === 0) {
      this.imgData = ret.data.imgList
      this.pages = ret.data.pages
    }
  },
  methods: {
    async changePage (page) {
      const ret = await imageList({ pageCount: this.pageCount, page })
      if (ret.code === 0) {
        this.imgData = ret.data.imgList
      }
    }
  }
}
</script>

<style lang='scss'>
</style>
