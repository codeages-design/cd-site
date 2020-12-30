<template>
  <div class="site-principle-content">
    <div class="site-principle-content-title">空状态</div>
    <span class="brief pt-28 es-block">
      任何内容区域（页面、区块、组件、单数据）没有内容/数据显示给用户时，就会出现空状态（我也通常称之为缺省状态）。
    </span>
    <div class="site-principle-content-sm-block">
      <div class="site-principle-content-small-title pt-40">
        <span class="site-principle-content-info-name">设计目标</span>
      </div>
      <div class="pt-24"> 
        <span>1.空状态应给予提示，帮助让用户了解空状态原因，避免产生误解与迷失；</span>
      </div>
      <div class="pt-16"> 
        <span>2.给予用户推荐操作提示，帮助用户摆脱空状态。</span>
      </div> 
    </div>
    <div class="site-principle-content-sm-block">
      <div class="site-principle-content-small-title pt-40">
        <span class="site-principle-content-info-name">设计原则</span>
      </div>
      <div class="pt-24"> 
        <strong class="key-words">明确：</strong>
        <span>通过使用清晰明了的语言、插画等形式告知用户空状态的具体原因。</span>
      </div>
      <div class="pt-16"> 
        <strong class="key-words">提供邀请：</strong>
        <span>提供帮助文案、建议操作等解决方案，表明在下一个界面可以做什么，引导用户进行操作。</span>
      </div> 
      <img
        class="site-principle-content-img pt-32"
        src="static/img/principle/dummy_status_01.png"
        alt=""
      > 
    </div>
    <div class="site-principle-content-sm-block">
      <div class="site-principle-content-small-title pt-40">
        <span class="site-principle-content-info-name">使用场景</span>
      </div>
      <div class="site-principle-content-small-section clearfix pt-24 fz-14 lh-20">
        <div class="fl key-words">01.新手引导：</div>
        <div class="ml-88 fc-gray">
          一般来说，新用户希望空状态具有帮助说明和推荐操作。首次使用应用或功能场景的空状态非常有用，因为它向用户展示了该功能和流程，并且可以帮助用户快速上手。为了帮助首次使用新用户，空状态可以使用功能引导、帮助文档等方式填充原本为空的页面。
        </div>
      </div>
      <img
        class="site-principle-content-img pt-32"
        src="static/img/principle/dummy_status_02.png"
        alt=""
      > 
      <div class="site-principle-content-small-section clearfix pt-40 fz-14 lh-20">
        <div class="fl key-words">02.使用引导变形：</div>
        <div class="ml-88 fc-gray">
          使用引导由状态提示、帮助引导、建议操作三个部分组成，设计时可根据业务流程选择模块来构成页面和变形。针对处于复杂流程中某一环的空状态页面，也可提供流程引导模块帮助用户全局理解操作流程，同时可提供文字按钮进行流程相关的快捷操作。
        </div>
      </div>
      <img
        class="site-principle-content-img pt-32"
        src="static/img/principle/dummy_status_03.png"
        alt=""
      > 
      <div class="site-principle-content-small-section clearfix pt-40 fz-14 lh-20">
        <div class="fl key-words">03.完成或清空：</div>
        <div class="ml-88 fc-gray">
          这种空状态是用户自愿从功能上删除数据的情况。例如，客户完成了任务清单上的所有项目，阅读了所有通知。一般此类场景不需要进行操作引导，只需要用图形元素或提示信息进行空状态说明。
        </div>
      </div>
      <img
        class="site-principle-content-img pt-32"
        src="static/img/principle/dummy_status_04.png"
        alt=""
      > 
      <div class="site-principle-content-small-section clearfix pt-40 fz-14 lh-20">
        <div class="fl key-words">04.无数据：</div>
        <div class="ml-88 fc-gray">
          内容区域无数据的场景使用，由图形元素、提示信息、建议操作三类元素组合展示，根据使用场景决定是否提供建议操作。
        </div>
      </div>
      <img
        class="site-principle-content-img pt-32"
        src="static/img/principle/dummy_status_05.png"
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