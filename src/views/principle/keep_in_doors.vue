<template>
  <div class="site-principle-content">
    <div class="site-principle-content-title">足不出户</div>
    <div class="pt-28">
      <span class="brief">能在这个页面解决的问题，就不要去其它页面解决。频繁的页面刷新和跳转，会影响用户的情绪和体验。</span>
      <div class="site-principle-keep_in_doors-sm-block">
        <div class="site-principle-content-small-title pt-40">
          <span class="site-principle-content-info-name">01.覆盖层</span>
        </div>
        <div class="pt-12">
          <span>二次确认覆盖层：避免滥用 Modal 进行二次确认，应该勇敢的让用户去尝试，给用户机会「撤销」即可。</span>
        </div>
        <img class="site-principle-content-img pt-24" src="static/img/principle/zubuchuhu01.png" alt="">
        <img class="site-principle-content-img pt-40" src="static/img/principle/zubuchuhu02.png" alt="">
        <img class="site-principle-content-img pt-40" src="static/img/principle/zubuchuhu03.png" alt="">
      </div>
      <div class="site-principle-keep_in_doors-sm-block">
        <div class="site-principle-content-small-title pt-40">
          <span class="site-principle-content-info-name">02.详情覆盖层</span>
        </div>
        <div class="pt-12">
          <span>一般在列表中，通过用户「悬停」/「点击」某个区块，在当前页加载该条列表项的更多详情信息。</span>
        </div>
        <img class="site-principle-content-img pt-24" src="static/img/principle/zubuchuhu04.png" alt="">　
      </div>
      <div class="site-principle-keep_in_doors-sm-block">
        <div class="site-principle-content-small-title pt-40">
          <span class="site-principle-content-info-name">02.详情覆盖层</span>
        </div>
        <div class="pt-12">
          <span>一般在列表中，通过用户「悬停」/「点击」某个区块，在当前页加载该条列表项的更多详情信息。</span>
        </div>
        <img class="site-principle-content-img pt-24" src="static/img/principle/zubuchuhu05.png" alt="">　
      </div>
      <div class="site-principle-keep_in_doors-sm-block">
        <div class="site-principle-content-small-title pt-40">
          <span class="site-principle-content-info-name">03.嵌入层</span>
        </div>
        <div class="pt-12">
          <span>列表嵌入层：在列表中，显示某条列表项的详情信息，保持上下文不中断。</span>
        </div>
        <img class="site-principle-content-img pt-24" src="static/img/principle/zubuchuhu05.png" alt="">　
      </div>
      <div class="site-principle-keep_in_doors-sm-block">
        <div class="site-principle-content-small-title pt-40">
          <span class="site-principle-content-info-name">04.页面内切换</span>
        </div>
        <div class="pt-12">
          <span>通过用面包屑这样的组件在同一个页面内切换，避免过多的跳转页面。</span>
        </div>
        <img class="site-principle-content-img pt-24" src="static/img/principle/zubuchuhu06.png" alt="">　
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
        color: #666666;
        letter-spacing: 0;
      }
    }
  }
</style>