<template>
  <div class="form-box">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="昵称" prop="nickname">
        <Input v-model="formValidate.nickname" placeholder="请输入您的昵称"></Input>
      </FormItem>
      <FormItem label="选择头像" prop="avtar">
        <ul class="b-avtar">
          <li
            v-for="(item,idx) in avtarArr"
            :key="idx"
            :class="{'active':item.ischoose}"
            @click="chooseAvtar(item.icon,item.id)"
          >
            <img :src="item.icon">
          </li>
        </ul>
      </FormItem>
      <FormItem label="留言内容" prop="message">
        <Input v-model="formValidate.message" :autosize="{minRows: 5,maxRows: 5}" type="textarea" placeholder="请输入您的留言内容">
        </Input>
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
  </div>
</template>

<script>
export default {
  name: 'Formcom',
  data () {
    return {
      formValidate: {
        nickname: '',
        avtar: '',
        message: ''
      },
      ruleValidate: {
        nickname: [
          { required: true, message: '昵称不能为空', trigger: 'blur' }
        ],
        avtar: [
          { required: true, message: '请选择一个头像', trigger: 'blur' }
        ],
        message: [
          { required: true, message: '请输入您的留言内容', trigger: 'change' }
        ]
      },
      avtarArr: [
        {
          id: 1,
          icon: 'tx1.jpg',
          ischoose: false
        },
        {
          id: 2,
          icon: 'tx2.jpg',
          ischoose: false
        },
        {
          id: 3,
          icon: 'tx3.jpg',
          ischoose: false
        },
        {
          id: 4,
          icon: 'tx4.jpg',
          ischoose: false
        },
        {
          id: 5,
          icon: 'tx5.jpg',
          ischoose: false
        },
        {
          id: 6,
          icon: 'tx6.jpg',
          ischoose: false
        },
        {
          id: 7,
          icon: 'tx7.jpg',
          ischoose: false
        },
        {
          id: 8,
          icon: 'tx8.jpg',
          ischoose: false
        }
      ]
    }
  },
  methods: {
    handleSubmit (name) {
      const self = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          const data = {
            nickname: self.formValidate.nickname,
            avtar: self.formValidate.avtar,
            message: self.formValidate.message
          }
          self.$emit('createMsg', data)
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.formValidate.avtar = ''
      this.avtarArr = this.avtarArr.map((item) => {
        item.ischoose = false
        return item
      })
      this.$refs[name].resetFields()
    },
    chooseAvtar (icon, id) {
      this.formValidate.avtar = icon
      this.avtarArr = this.avtarArr.map((item) => {
        if (item.id === id) {
          item.ischoose = true
        } else {
          item.ischoose = false
        }
        return item
      })
    }
  }
}
</script>

<style lang="scss">
.form-box{
        .b-avtar{
           overflow: hidden;
           li{
             float: left;
             margin-right: 8px;
             width: 54px;
             height: 54px;
             border-radius: 50%;
             border: 2px solid transparent;
             position: relative;
             cursor: pointer;
             overflow: hidden;
           }
           .active{
             border: 2px solid #ff0000;
           }
        }
      }
      .b-controll{
        float: right;
      }
      .msg-list{
        margin-top: 100px;
        h2{
          padding: 0 10px 10px 10px;
        }
        .msg-list-item{
          padding: 15px;
          display: flex;
          border-bottom: 1px solid $gray;
          .msg-list-main{
            word-wrap:break-word;
            word-break: break-all;
            margin-left: 20px;
            width: 100%;
            .msg-list-nickname{
              width: 100%;
            }
            .msg-right{
              float: right;
              font-weight:100;
              font-size: 12px;
            }
            p{
              padding-left:10px;
              font-size: 16px;
            }
          }
        }
      }
</style>
