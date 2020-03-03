<template>
  <div class="header">
    <Menu ref="menu" :active-name="pathName" @on-select="selchange" mode="horizontal" theme="light">
      <MenuItem class="layout-logo" name="home" to="/">
        <img src="@/assets/img/logo.png">
      </MenuItem>
      <div @click="toggle" :class="['layout-btn',toggleClassb]">
        <Icon type="ios-menu" />
      </div>
      <div :class="['layout-nav',toggleClass]">
        <div class="layout-nav-box">
          <MenuItem name="home" to="/">
            <Icon type="ios-home" />
            主页
          </MenuItem>
          <MenuItem name="art" to="/art">
            <Icon type="ios-book" />
            博文
          </MenuItem>
          <MenuItem name="note" to="/note">
            <Icon type="ios-brush" />
            随记
          </MenuItem>
          <MenuItem name="message" to="/message">
            <Icon type="ios-chatbubbles" />
            留言
          </MenuItem>
          <MenuItem name="photo" to="/photo">
            <Icon type="ios-images" />
            相册
          </MenuItem>
          <MenuItem name="my" to="/my">
            <Icon type="ios-contact" />
            关于我
          </MenuItem>
        </div>
      </div>
    </Menu>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      toggleClass: '',
      toggleClassb: ''
    }
  },
  computed: {
    // 路由路径
    pathName () {
      return this.$store.state.page.pathName
    }
  },
  methods: {
    toggle () {
      this.toggleClass = this.toggleClass === '' ? 'layout-nav-open' : ''
      this.toggleClassb = this.toggleClassb === '' ? 'layout-btn-open' : ''
    },
    selchange () {
      this.toggleClass = ''
      this.toggleClassb = ''
    }
  }
}
</script>

<style lang='scss'>
  .header{
    box-shadow:0 0 10px rgba(0,0,0,.3);
    position: relative;
    .layout-logo{
      float: left;
      position: relative;
      left: 20px;
      border-bottom: none !important;
      img{
        vertical-align: middle;
      }
    }
    .layout-nav{
      width: 600px;
      margin: 0 auto;
      margin-right: 20px;
      background-color: $white;
    }
    .layout-btn{
      width: 60px;
      height: 50px;
      line-height: 40px;
      position: absolute;
      top:5px;
      right: 0px;
      margin: 0 auto;
      margin-right: 20px;
      font-size: 40px;
      border: 2px solid $gray;
      text-align: center;
      border-radius: 6px;
      display: none;
    }
    @media screen and (max-width: 769px){
      .layout-btn{
        display: block;
      }
      .layout-btn-open{
        border-color: $highlight-color;
      }
      .layout-nav{
        width: 100%;
        height: 0;
        transition: height .5s;
        overflow: hidden;
        .layout-nav-box{
          height: 370px;
          .ivu-menu-item{
            width:100%;
            height: 61px;
          }
        }
      }
      .layout-nav-open{
        height: 370px;
      }
    }
  }
</style>
