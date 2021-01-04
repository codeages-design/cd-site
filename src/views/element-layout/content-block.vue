<template>
  <div>
    <div class="el-content-title">内容块</div>
    <div class="hr"></div>
    <div class="el-content-des">
      内容块是所有页面的最核心区域，内容块的宽度决定了整个页面横向的最大承载。
      为了满足不用屏幕的视觉感官，设置合理的内容块值是非常必要。
    </div>

    <div class="el-content-subtitle">01.响应式布局内容块的宽度</div>
    <div class="el-content-subdes mb32">基于Bootstrap框架的24栅格体系和8点网格单位间距，适配不同屏幕分辨率，我们给出响应式内容块宽度值。</div>

    <div class="content-block-img">
      <img src="/static/img/pc-element-layout/content-block.jpg" 
        srcset="/static/img/pc-element-layout/content-block@2x.png"
        class="cd-responsive ">
    </div>

    <div class="el-content-subtitle">02.自适应布局内容块的宽度</div>
    <div class="el-content-subdes">
      <div class="mb32">PC端页面自适应要结合1920、1440、1280的主流分辨率，保证1280和1280以上分辨率的内容显示。</div>
      <div class="mb32">随着近年来进入大屏时代，屏幕分辨率也随之变大。内容块宽度也由几年前1080晋升到到1200左右。</div>
      <div class="mb32">自适应布局下，EduSoho各平台页面内容块宽度统一规定：1200PX。</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contentBlock',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .mb32 {
    margin-bottom: 32px;
  }

  .content-block-img {
    width: 594px;
  }
</style>