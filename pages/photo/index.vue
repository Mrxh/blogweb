<template>
  <Major path="photo">
    <Title routername="相册" />
    <Camera :imgData="imgData" />
    <Page :total="100" />
  </Major>
</template>

<script>
import Major from '@/components/major/index.vue'
import Title from '@/components/title/index.vue'
import Camera from '@/components/camera/index.vue'
export default {
  components: {
    Major,
    Title,
    Camera
  },
  data () {
    return {
      imgData: [
        {
          title: '1',
          url: 'img/img/1.jpg'
        },
        {
          title: '2',
          url: 'img/img/2.jpg'
        },
        {
          title: '3',
          url: 'img/img/3.jpg'
        },
        {
          title: '4',
          url: 'img/img/4.jpg'
        },
        {
          title: '5',
          url: 'img/img/5.jpg'
        },
        {
          title: '6',
          url: 'img/img/6.jpg'
        },
        {
          title: '7',
          url: 'img/img/7.jpg'
        },
        {
          title: '8',
          url: 'img/img/8.jpg'
        },
        {
          title: '9',
          url: 'img/img/9.jpg'
        },
        {
          title: '10',
          url: 'img/img/10.jpg'
        },
        {
          title: '11',
          url: 'img/img/11.jpg'
        },
        {
          title: '12',
          url: 'img/img/12.jpg'
        },
        {
          title: '13',
          url: 'img/img/13.jpg'
        },
        {
          title: '14',
          url: 'img/img/14.jpg'
        },
        {
          title: '15',
          url: 'img/img/15.jpg'
        },
        {
          title: '16',
          url: 'img/img/16.jpg'
        },
        {
          title: '17',
          url: 'img/img/17.jpg'
        },
        {
          title: '18',
          url: 'img/img/18.jpg'
        },
        {
          title: '19',
          url: 'img/img/19.jpg'
        },
        {
          title: '20',
          url: 'img/img/20.jpg'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
</style>
