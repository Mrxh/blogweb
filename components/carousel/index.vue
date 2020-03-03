<template>
  <Carousel
    v-model="val"
    :autoplay-speed="5000"
    :radius-dot="true"
    autoplay
    loop
  >
    <CarouselItem v-for="item in carouselData" :key="item._id">
      <div ref="itemCarousel" class="item-carousel">
        <nuxt-link :to="item.linkUrl">
          <img :src="item.linkImg" alt="推荐文章图">
          <div class="item-intro">
            <p>{{ item.title }}</p>
            <p>{{ item.updatedAt.slice(0,10) }}</p>
          </div>
        </nuxt-link>
      </div>
    </CarouselItem>
  </Carousel>
</template>

<script>

export default {
  name: 'Carouselcom',
  props: {
    carouselData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      val: 0
    }
  }
}
</script>

<style lang="scss">
.ivu-carousel{
    width: 100%;
    margin-bottom:20px;
    font-size: 14px;
    .item-carousel{
        width: 100%;
        height: 400px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
        .item-intro{
            height: 80px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: $transColor;
            color: $white;
            padding: 15px;
        }
    }
    @media screen and (max-width:769px){
      .item-carousel{
        height: auto;
      }
    }
}
</style>
