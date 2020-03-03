<template>
  <div class="msg-list">
    <h1>留言列表</h1>
    <div class="msg-list-content">
      <ul>
        <li v-for="(item,idx) in messageList" :key="idx" class="msg-list-item">
          <div class="msg-list-avtar">
            <img :src="item.avtar">
          </div>
          <div class="msg-list-main">
            <h2 class="msg-list-nickname">
              <span>{{ item.nickname }}</span>
              <span class="msg-right">{{ item.createdAt.slice(0,10) }}</span>
            </h2>
            <p>
              {{ item.message }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Msglist',
  props: {
    messageList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">

</style>
