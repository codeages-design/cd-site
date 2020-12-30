<template>
  <div>
    <div class="site-principle-content">
      <div class="site-principle-content-title">可视化</div>
      <div class="pt-28">
        <span class="brief">
          可视化语言是基于EduSoho衍生的一套具有数据可视化特性的设计指导原则，让数据表达更符合用户心理，以帮助『设计者』孵化出更具业务特性的数据可视化解决方案，屏蔽不必要的设计差异和实现成本，从而解放『设计者』和前端的生产力，实现数据图表的研发效能全面提高。
        </span>
        <div class="pt-40">
          <div class="site-principle-content-small-title">
            <span class="site-principle-content-info-name">01.如何设计</span>
          </div>
          <div class="pt-12">
            <span class="sm-block-brief">
              用户是谁？他们要从可视化作品上获取什么信息？在企业级产品中，用户可能是公司高层、BI 分析师、运营、数据开发等不同角色，不一样的角色在使用可视化作品时，其目的以及使用路径会有所不同。建议在设计开始前对使用者进行充分剖析，以便完整地讲述你的数据故事，准确呈现你的数据见解。
            </span>
          </div>
          <div class="data-safety-block pt-24" style="width:100%;">
            <div class="left-block" style="width:100%;">
              <span class="es-block block-title mb-12">设计原则</span> 
              <div class="sub-title">
                <span class="key-words">准确：</span>
                <span>
                  从数据转化到可视表达时不歪曲，不误导，不遗漏，忠实反映数据里包含的信息；
                </span>
              </div>
              <div class="sub-title">
                <span class="key-words">有效：</span>
                <span>
                  信息传达有重点，克制不冗余，避免信息过载，用最适量的数据-油墨比（Data-ink Ratio）表达对用户最有用的信息；
                </span>
              </div>
              <div class="sub-title">
                <span class="key-words">清晰：</span>
                <span>
                  表现方式清楚易读，具条理性，可以帮助用户快速达成目标，在最少的时间内获取更多的信息；
                </span>
              </div>
              <div class="sub-title">
                <span class="key-words">美：</span>
                <span>
                  对数据的完美表达，合理利用视觉元素进行艺术创作，不过度修饰，给用户优雅的体验。
                </span>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div class="pt-40">
        <span class="site-principle-content-info-name">02.图表用法</span>
        <div class="pt-12">
          <span class="sm-block-brief">
            我们提供了完整的图表用法说明，帮助您更正确地选择图表类型。
          </span>
        </div>
        <img class="site-principle-content-img pt-40" src="static/img/principle/visualization_01.png" alt="">
        <img class="site-principle-content-img pt-40" src="static/img/principle/visualization_02.png" alt="">
        <img class="site-principle-content-img pt-40" src="static/img/principle/visualization_03.png" alt="">
        <img class="site-principle-content-img pt-40" src="static/img/principle/visualization_04.png" alt="">
        <img class="site-principle-content-img pt-40" src="static/img/principle/visualization_05.png" alt=""> 
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

  .sm-block-brief {
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;

    & + span {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      letter-spacing: 0;
      line-height: 20px;
    }
  }

  .block-title {
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 700;
  }

  .site-principle-content-info-name {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 700;
  }

  .data-safety-block {
    .left-block,
    .right-block {
      padding: 24px;
      min-height: 120px;
      background: #F9F9F9;
    }

    .left-block {
      width: 41%; 
    }

    .right-block {
      width: 54%; 
    }

    @media (max-width: 821px) { 
      .left-block {
        width: 100%;
        min-width: 180px;
      }

      .right-block {
        margin-left: 0 !important;
        margin-top: 20px;
        width: 100%;
        min-height: 180px;
      }
    }
  } 

  .safety-content-info-span {
    color: #333333;
  }
  
  .sub-title {
    margin-bottom: 8px;
  }
</style>