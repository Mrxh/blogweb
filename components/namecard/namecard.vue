<template>
  <div class="namecard-box">
    <div class="namecard-img">
      <img src="img/namecard/avar.png" alt="avar图">
    </div>
    <div class="namecard-content">
      <h2 class="namecard-name">
        肖航
      </h2>
      <p class="namecard-vocation">
        前端工程师
      </p>
      <p class="namecard-intro">
        一个刚入行3年的前端开发者，一直致力于对前端技术的学习与专研，希望能从学习中不断提升自己。活到老，学到老。
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Namecard'
}
</script>

<style lang="scss">
.namecard-box{
    background: #fff url('../../static/img/namecard/cardbg.jpg') no-repeat;
    background-size:100%;
    padding: 20px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
    .namecard-img{
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 50%;
        margin:60px auto 10px;
    }
    .namecard-content{
        color: $fontColor;
        p{
            margin-bottom: 10px;
            font-size: 16px;
        }
        .namecard-vocation{
            text-align: center;
        }
        .namecard-name{
            text-align: center;
            color: $titleColor;
            margin-bottom: 10px;
        }
    }
}
</style>
