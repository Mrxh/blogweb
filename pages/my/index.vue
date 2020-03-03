<template>
  <Major path="my">
    <Title routername="关于我" />
    <Row :gutter="20">
      <Col :xs="24" :sm="24" :md="24" :lg="16">
      <div class="my-intro">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;肖航。半个前端，在技术方面一直都不是很自信，这对于自己而言挺致命的，鄙人最早学前端的初心是因为接触了web端的特效，觉得技术也不一定就只是停留于枯燥的代码，它也是可以动起来的，也是可以让我们的生活充满很多乐趣的，但后来工作以后，才渐渐地发现值钱的东西并不是我最初想的那样，而是最早学校老师给我们的固有映像，后台，数据才是最重要的，前端更多的是为了用户体验，直到后来...</p>

        <p>自从了解到mvvm框架之后，前端也越来越有了自己的逻辑和一套更加完整的体系了，也越发地显得比以前重要了，不再是一个鸡肋的角色。</p>

        <p>现在前端也越来越趋向于后端化了，技术框架也日益更新，工程化的思想也深入人心，通过组件化的方式也使得前端比以前更加方便管理了，开发效率也更加迅速。</p>

        <p>我不知道自己是否真的适合这一行，人有的时候是不得已而为之，很多人都是很难就一直去做自己喜欢做的事的，是现实逼的，人不逼一下自己是不知道自己的潜力有多大的。</p>

        <p>
          人活着总要做一些有意义的事，总要向着一个方向不断前进的。我们不能停下脚步，停了就什么都没了，我们需要的可能不是坚持初心，而是不断改变自己，去适应这个多变的世界，因为我们改变不了这个世界，我们所能选择的也就是去其糟粕，纳其精华。将自己武装起来，培养出一颗阳光的心，这就够了。
        </p>

        <p><strong>About my blog &nbsp;</strong></p>

        <p>域 名：www.tianyue556.com 创建于2020年02月12日&nbsp;</p>

        <p>服务器：百度云服务器</p>
        <p>备案号：蜀ICP备11002373号-1</p>
        <p>程 序：vscode</p>
      </div>
      </Col>
      <Col :xs="24" :sm="24" :md="24" :lg="8">
      <Namecardm />
      </Col>
    </Row>
  </Major>
</template>

<script>
import Major from '@/components/major/index.vue'
import Title from '@/components/title/index.vue'
import Namecardm from '@/components/namecard/index.vue'
export default {
  components: {
    Major,
    Title,
    Namecardm
  }
}
</script>

<style lang='scss'>
  .my-intro{
    padding: 30px 40px;
    background: #fff;
    font-size: 18px;
    border-radius: 5px;
    margin-bottom: 20px;
    p{
      margin-bottom: 20px;
    }
  }
</style>
