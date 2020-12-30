<template>
  <div class="site-principle-content">
    <div class="site-principle-content-title">消息与反馈</div>
    <span class="brief pt-28 es-block">
      用于在必要时向用户反馈操作结果或传达消息，在不同事件下用户都能感知与操作场景和紧急程度匹配的结果反馈或消息提示，做到合理有效的信息传达。
    </span>
    <div class="site-principle-content-sm-block">
      <div class="site-principle-content-small-title pt-40">
        <span class="site-principle-content-info-name">01.反馈方式</span>
      </div>
      <div class="pt-16"> 
        <span>在设计时需要考虑用户试图完成的任务以及需要引起注意的方式，采用何种反馈方式。反馈方式列举如下图：</span>
      </div>
      <img 
        class="site-principle-content-img pt-24"
        src="static/img/principle/messages_01.png" 
        alt=""
      > 
    </div>
    <div class="site-principle-content-sm-block">
      <div class="site-principle-content-small-title pt-40">
        <span class="site-principle-content-info-name">02.何时使用</span>
      </div>
      <div class="pt-16"> 
        <span>如果某个操作不那么重要，或者保持“实时可见”过于干扰会影响用户阅读时，可以在悬停在该对象上时展示操作项。</span>
      </div>
      <img 
        class="site-principle-content-img pt-40"
        src="static/img/principle/messages_02.png" 
        alt=""
      > 
      <img 
        class="site-principle-content-img pt-40"
        src="static/img/principle/messages_03.png" 
        alt=""
      > 
      <img 
        class="site-principle-content-img pt-40"
        src="static/img/principle/messages_04.png" 
        alt=""
      > 
      <img 
        class="site-principle-content-img pt-40"
        src="static/img/principle/messages_05.png" 
        alt=""
      > 
      <img 
        class="site-principle-content-img pt-40"
        src="static/img/principle/messages_06.png" 
        alt=""
      > 
      <img 
        class="site-principle-content-img pt-40"
        src="static/img/principle/messages_07.png" 
        alt=""
      > 
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
    & ~ div {
      span {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
      }
    }
  }
</style>