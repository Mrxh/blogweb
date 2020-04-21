<template>
  <div class="camera-box">
    <viewer :images="imgData">
      <Row>
        <Col
          v-for="(item,idx) in imgData"
          :xs="12"
          :sm="12"
          :md="6"
          :lg="6"
          :key="idx"
        >
        <div class="camera-img">
          <img :src="item.imgUrl" preview="0" :alt="item.name">
        </div>
        </Col>
      </Row>
    </viewer>
  </div>
</template>

<script>
export default {
  name: 'Camera',
  props: {
    imgData: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
   .camera-box{
       margin-bottom: 20px;
       .camera-img{
           width: 100%;
           height: 200px;
           img{
               width:100%;
               height: 100%;
               display: block;
               cursor: pointer;
           }
       }
   }
</style>
