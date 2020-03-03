<template>
  <div class="formcom">
    <h2 class="formcom-title">
      欢迎评论
    </h2>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="昵称：" prop="nickname">
        <Input v-model="formValidate.nickname" placeholder="请输入你的昵称" />
      </FormItem>
      <FormItem label="邮箱：" prop="email">
        <Input v-model="formValidate.email" placeholder="请输入你的邮箱（非必填）" />
      </FormItem>
      <FormItem label="内容：" prop="content">
        <Input v-model="formValidate.content" :autosize="{minRows: 5,maxRows: 10}" :rows="rows" type="textarea" placeholder="请随意吐槽^_^" />
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit('formValidate')" type="primary">
          提交
        </Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">
          重置
        </Button>
      </FormItem>
    </Form>
    <h2 class="formcom-title">
      评论列表
    </h2>
    <div v-if="commentList.length>0">
      <Comments v-for="(item,idx) in commentList" :comitem="item" :key="idx" />
    </div>
    <div v-else>
      <div class="no-com">
        暂时还没有人评论,快来抢沙发...
      </div>
    </div>
  </div>
</template>

<script>
import Comments from '@/components/detail/comments.vue'
import { comCreate } from '@/api/artinterface'
export default {
  name: 'Formcom',
  components: {
    Comments
  },
  props: {
    aid: {
      type: String,
      default: () => {
        return ''
      }
    },
    commentList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      formValidate: {
        nickname: '',
        email: '',
        content: ''
      },
      ruleValidate: {
        nickname: [
          { required: true, message: '请输入你的昵称', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入你的内容', trigger: 'blur' }
        ]
      },
      rows: 5
    }
  },
  methods: {
    handleSubmit (name) {
      const self = this
      self.$refs[name].validate(async (valid) => {
        if (valid) {
          const data = Object.assign(self.formValidate, { articleId: self.aid })
          const ret = await comCreate(data)
          if (ret.code === 0) {
            self.$emit('getComment', { id: self.aid })
            self.handleReset('formValidate')
            self.$Message.success(ret.data.nickname + '评论提交成功！')
          }
        } else {
          self.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style lang='scss'>
  .formcom{
      font-size: 16px;
    .formcom-title{
        margin: 20px 0;
    }
    .no-com{
        text-align: center;
    }
  }
</style>
