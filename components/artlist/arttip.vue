<template>
  <div :class="['artlist-tip',isrt?'rt':'cen']">
    <span>
      <Icon type="md-brush" />{{ artobj.author }}
    </span>
    <span>
      <Icon type="md-time" />{{ artobj.createdAt ? artobj.createdAt.slice(0,10) : '2020-01-01' }}
    </span>
    <span>
      <Icon type="md-eye" />{{ artobj.views }}
    </span>
    <span>
      <Icon type="md-heart" />{{ artobj.carenum }}
    </span>
  </div>
</template>

<script>

export default {
  name: 'Arttip',
  props: {
    artobj: {
      type: Object,
      default () {
        return {}
      }
    },
    isrt: {
      type: Boolean,
      default () {
        return true
      }
    }
  }
}
</script>

<style lang="scss">
        .artlist-tip{
            color:$tipColor;
            span{
                margin-right:16px;
                .ivu-icon{
                    margin-right:8px;
                }
            }
        }
        .rt{
            float: right;
        }
        .cen{
            text-align: center;
        }
</style>
