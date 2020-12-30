<template>
  <div class="site-principle-content">
    <div class="site-principle-content-title">提供邀请</div>
    <div class="pt-28">
      <span class="brief">
        很多富交互模式（例：「拖放」、「行内编辑」、「上下文工具」）都有一个共同问题，就是缺少易发现性。所以「提供邀请」是成功完成人机交互的关键所在。
        邀请就是引导用户进入下一个交互层次的提醒和暗示，表明在下一个界面可以做什么，这样的人机交互的过程往往更加自然、顺畅。
      </span>
      <div class="site-principle-offer_request-sm-block">
        <div class="site-principle-content-small-title pt-40">
          <span class="site-principle-content-info-name">01.静态邀请</span>
        </div>
        <div class="pt-12">
          <span>一般以静态说明形式出现在页面上，不过它们在视觉上也可以表现出多种不同样式。常见类型：「文本邀请」、「白板式邀请」、「未完成邀请」。</span>
        </div>
        <img class="site-principle-content-img pt-24" src="static/img/principle/offer_request01.png" alt="">
        <img class="site-principle-content-img pt-24" src="static/img/principle/offer_request02.png" alt="">
        <img class="site-principle-content-img pt-24" src="static/img/principle/offer_request03.png" alt="">
      </div>
      <div class="site-principle-offer_request-sm-block">
        <div class="site-principle-content-small-title pt-40">
          <span class="site-principle-content-info-name">02.动态邀请</span>
        </div>
        <div class="pt-12">
          <span>指以响应用户在特定位置执行特定操作的方式，提供特定的邀请。</span>
        </div>
        <img class="site-principle-content-img pt-24" src="static/img/principle/offer_request04.png" alt="">　
        <img class="site-principle-content-img pt-24" src="static/img/principle/offer_request05.png" alt="">　
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="less" scoped>
  .brief {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #666666;
    letter-spacing: 0;
  }

  .site-principle-content-info-name {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    line-height: 24px;
    font-weight: 700;
  }

  .site-principle-content-small-title {
    & + div {
      span {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #6666666;
        letter-spacing: 0;
      }
    }
  }
</style>