<template>
  <div class="site-principle-content">
    <div class="site-principle-content-title">设计价值观</div>
    <div class="site-principle-content-inner pt-48">
      <p class="pb-88">
        Codeages Design 设计价值观为设计者提供评价设计好坏的内在标准，启示并激发了 Codeages Design 设计原则和设计模式，进而为具体设计问题提供向导和一般解决方案。
      </p>
      <div class="site-principle-content-img">
        <ul class="clearfix pb-58">
          <li>
            <img src="static/img/principle/shejijiazhiguan.png" alt="">
            <h4>设计价值观</h4>
            <p>判断设计好坏的内在标准</p>
          </li>
          <li><img src="static/img/principle/yuanze.png" alt="">
            <h4>设计原则</h4>
            <p>根据设计价值观做行之有效的
              向导或提示。</p>
          </li>
          <li><img src="static/img/principle/shejimoshi.png" alt="">
            <h4>设计模式</h4>
            <p>具体问题的一般解决方案</p>
          </li>
        </ul>
      </div>
      <section class="site-principle-content-section pb-56"> 
        <h4>符合自然人机交互规律</h4> 
        <div class="site-principle-content-small-section clearfix">
          <div class="fl">感知自然：</div>
          <div class="ml-80">
            认知心理学所述，约 80% 外界信息通过视觉通道获取。界面设计中最重要的视觉要素，包括布局、色彩、插画、图标等，应充分汲取自然界规律，从而降低用户认知成本，带来真实流畅的感受。
            在一些场景下，适时加入听觉、触觉等其它感知通道，能创造更丰富自然的产品体验。
          </div>
        </div>
        <div class="site-principle-content-small-section clearfix">
          <div class="fl">行为自然：</div>
          <div class="ml-80">
            在与系统的互动中，设计者应充分理解用户、系统角色、任务目标间的关系，场景化组织系统功能和服务。同时辅以行为分析、人工智能、传感器、元数据等策略，提供主动式服务，帮助用户决策、减少操作，
            从而节约用户脑力和体力，让人机交互行为更自然。
          </div>
        </div>
      </section>
      <section class="site-principle-content-section clearfix">
        <h4 class="pb-16">可生长，有价值</h4>
        <span class="inline-block pb-24">设计者应为自己创造的产品负责，保证产品对用户是有价值的。用发展的眼光做设计，充分考虑人、机两端的共同生长。</span>
        <div class="site-principle-content-small-section clearfix pt-0">
          <div class="fl">价值连接：</div>
          <div class="ml-80">
            产品的增长依赖于用户的群体扩大和深度使用，而用户的成长又依赖于产品功能的壮大。设计者应建立系统设计思维，洞悉产品功能的价值，探索用户在不同场景下的需求，在价值和需求间建立连接。让产品
            价值被发现，帮助用户建立更有效、更高效的工作方式。
          </div>
        </div>
        <div class="site-principle-content-small-section clearfix">
          <div class="fl">人机共生：</div>
          <div class="ml-80">
            产品功能和用户需求的更多连接，让人机互动更加紧密，用户和系统共生。产品设计时，不应将用户和系统独立开来，应作为一个动态发展的共同体来思考，确保其足够的灵活、包容，充满生命力。
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="less" scoped>
  .site-principle-content-inner {
    & > p { 
      font-size: 16px;
      color: #333333;
      letter-spacing: 0;
      line-height: 24px;
      font-weight: 700;
    } 
  }

  .site-principle-content-img ul li {
    float: left;
    width: 140px;
    text-align: center;
    font-size: 0;
    box-sizing: content-box;

    &:nth-child(1) {
      padding-left: 6.7%;
      width: 154px;
    }

    &:nth-child(2) {
      padding-left: 17.3%;
    }

    &:nth-child(3) {
      padding-left: 18.1%;
      width: 154px;
    }

    img { 
      margin-left: 50%;
      transform: translateX(-50%);
      margin-bottom: 16px;
    }

    h4 {
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      color: #999999;
      letter-spacing: 0;
    }

    @media (max-width: 1163px) {
      padding-left: 0 !important;
      width: 33% !important;
    }

    @media (max-width: 786px) {
      padding-top: 20px;
      padding-left: 0 !important;
      width: 100% !important;
    }
  }

  .site-principle-content-section {
    h4 {
      display: inline-block;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #333333;
      letter-spacing: 0;
      text-align: center;
      line-height: 28px;  
      font-weight: 700;
    }

    p {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      letter-spacing: 0;
      line-height: 20px;

      span {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #666666;
        letter-spacing: 0;
        line-height: 20px;
        font-weight: 700;
      }
    }

    span {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #666666;
      letter-spacing: 0;
      text-align: center;
      line-height: 24px;
    }
  }

  .site-principle-content-small-section {
    padding-top: 24px;

    div {
      &:nth-child(1) {
        color: #333333;
        font-weight: 700;
      }

      &:nth-child(2) {
        color: #666666;
        font-family: PingFangSC-Regular;
        font-size: 14px; 
        letter-spacing: 0;
        line-height: 20px;
      }
    }
  }
</style>