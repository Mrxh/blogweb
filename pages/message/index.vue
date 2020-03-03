<template>
  <Major path="message">
    <Title routername="留言" />
    <Row :gutter="20">
      <Col :xs="24" :sm="24" :md="24" :lg="16">
      <div class="message-box">
        <Formcom @createMsg="createMsg" />
        <Msglist :messageList="messageList" />
      </div>
      </Col>
      <Col :xs="24" :sm="24" :md="24" :lg="8">
      <Namecardm />
      </Col>
    </Row>
  </Major>
</template>

<script>
import { createMessage, MessageList } from '@/api/message'
import Major from '@/components/major/index.vue'
import Title from '@/components/title/index.vue'
import Namecardm from '@/components/namecard/index.vue'
import Formcom from '@/components/msgcom/formcom.vue'
import Msglist from '@/components/msgcom/msglist.vue'
export default {
  components: {
    Major,
    Title,
    Namecardm,
    Formcom,
    Msglist
  },
  data () {
    return {
      messageList: []
    }
  },
  mounted () {
    this.msgList()
  },
  methods: {
    async createMsg (data) {
      const ret = await createMessage(data)
      if (ret.code === 0) {
        this.msgList()
        this.$Message.success(ret.data.nickname + '留言提交成功！')
      } else {
        this.$Message.error('Fail!')
      }
    },
    async msgList () {
      const ret = await MessageList()
      if (ret.code === 0) {
        this.messageList = ret.data
      }
    }
  }
}
</script>

<style lang='scss'>
.message-box{
  padding: 20px;
  border-radius: 5px;
  background: $white;
}
</style>
