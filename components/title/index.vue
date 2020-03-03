<template>
  <div class="title-box">
    <div v-if="!aid">
      <Breadcrumb>
        <BreadcrumbItem to="/">
          主页
        </BreadcrumbItem>
        <BreadcrumbItem>
          {{ routername }}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div v-else>
      <Breadcrumb>
        <BreadcrumbItem to="/">
          主页
        </BreadcrumbItem>
        <BreadcrumbItem :to="path">
          {{ routername }}
        </BreadcrumbItem>
        <BreadcrumbItem>
          {{ islabel ? aid : '内容' }}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Title',
  props: {
    routername: {
      type: String,
      default () {
        return ''
      }
    },
    aid: {
      type: String,
      default () {
        return ''
      }
    },
    path: {
      type: String,
      default () {
        return ''
      }
    },
    islabel: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.title-box{
    border-bottom:1px solid $gray;
    padding: 10px 0;
    font-size: 16px;
    margin-bottom: 20px;
}
</style>
