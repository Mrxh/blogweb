<template>
  <div class="comment">
    <div class="comment-title">
      <Icon type="md-chatbubbles" />
      <span>来自「{{ comitem.nickname }}」的评论：</span>
    </div>
    <div class="comment-com">
      {{ comitem.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    comitem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
   .comment{
     border-bottom: 1px solid $gray;
     padding:1.08rem;
     .comment-title{
       font-size: 1rem;
       color: #409eff;
       font-weight: 700;
       padding-bottom:1rem;
     }
     .comment-com{
       padding-left: 1.2rem;
       font-size: 0.9rem;
     }
   }
</style>
