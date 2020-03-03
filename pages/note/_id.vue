<template>
  <Major path="note">
    <Title :aid="aid" :islabel="islabel" routername="随记" path="/note" />
    <Blogcom :aid="aid" :islabel="islabel" arttype="note" />
  </Major>
</template>

<script>
import { Base64 } from 'js-base64'
import Major from '@/components/major/index.vue'
import Title from '@/components/title/index.vue'
import Blogcom from '@/components/blogcom/index.vue'
export default {
  components: {
    Major,
    Title,
    Blogcom
  },
  data () {
    return {
      aid: '',
      islabel: false
    }
  },
  created () {
    const { id } = this.$route.params
    if (id !== undefined && id !== '') {
      const pid = Base64.decode(this.$route.params.id).toString()
      if (pid && pid.includes('Mrxhx')) {
        this.aid = pid.split(',')[0]
        this.islabel = true
      } else {
        this.aid = pid
        this.islabel = false
      }
    }
  }
}
</script>

<style lang='scss'>
</style>
