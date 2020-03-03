<template>
  <div class="listitems">
    <div class="listitems-vtar">
      <i :class="['iconfont',listobj.icon,listobj.name]" />
    </div>
    <div class="listitems-content">
      <p class="listitems-title">
        {{ listobj.val }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Listitems',
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
.listitems {
      padding: 20px;
      border-bottom:1px solid $gray;
      display: flex;
      .listitems-vtar{
          margin-right: 12px;
          width: 60px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          border-radius: 50%;
          border:1px solid $grayDeep;
          i{
            font-size: 35px;
          }
      }
      .listitems-content{
          .listitems-title{
             color:$titleColor;
             font-size: 16px;
             line-height: 60px;
             font-weight: 600;
          }
      }
}
.listitems:last-child{
  border:none;
}
.qq{
  color: $qqColor;
}
.weixin{
  color: $weiXinColor;
}
.youxiang{
  color: $emailColor;
}
.dianhua{
  color: $phoneColor;
}
</style>
