<template>
  <div>
    <Row :gutter="20">
      <Col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="24"
      >
      <Namecard />
      </Col>
      <Col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="24"
      >
      <List title="微信">
        <div class="contact-img">
          <img src="img/namecard/mmqrcode1570636853247.png" alt="weixin图">
        </div>
      </List>
      </Col>
    </Row>
  </div>
</template>

<script>
import Namecard from './namecard.vue'
import List from '@/components/list/index.vue'
export default {
  name: 'Namecardm',
  components: {
    Namecard,
    List
  }
}
</script>

<style lang="scss">
   .contact-img{
       padding: 20px;
       width: 100%;
       img{
           width: 100%;
           display: block;
       }
   }
</style>
