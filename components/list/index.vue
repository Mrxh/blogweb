<template>
  <div class="list">
    <h2 class="title">
      {{ title }}
    </h2>
    <div class="list-content">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
  props: {
    title: {
      type: String,
      default () {
        return '标题'
      }
    }
  }
}
</script>

<style lang="scss">
.list {
  border-radius: 5px;
  background-color: $white;
  overflow: hidden;
  margin-bottom: 20px;
  .title{
      padding: 12px 20px;
      color:$white;
      background-color: $highlight-color;
  }
  .list-content{
      width: 100%;
      overflow: hidden;
  }
}
</style>
