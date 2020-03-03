<template>
  <div class="listitem">
    <div class="listitem-shadow"></div>
    <div class="listitem-vtar">
      <img :src="listobj.title_page_img" alt="vtar图">
    </div>
    <div class="listitem-content">
      <p class="listitem-title">
        {{ listobj.title }}
      </p>
      <span class="listitem-tip">
        {{ listobj.updatedAt.slice(0,10) }}
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Listitem',
  props: {
    listobj: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.listitem {
      padding: 20px;
      border-bottom:1px solid $gray;
      display: flex;
      position: relative;
      .listitem-vtar{
          margin-right: 12px;
          img{
            width: 60px;
            height: 60px;
            display: block;
          }
      }
      .listitem-content{
          .listitem-title{
             color:$titleColor;
             font-size: 14px;
             font-weight: 600;
          }
          .listitem-tip{
             color:$tipColor;
          }
      }
      .listitem-shadow{
        position: absolute;
        width: 4px;
        height: 100%;
        background: $borderColor;
        left: 0;
        top: 0;
        box-shadow: 0 0 20px $borderShadowColor;
        display: none;
      }
}
.listitem:last-child{
  border:none;
}
.listitem:hover{
  .listitem-shadow{
      display: block;
  }
}
</style>
