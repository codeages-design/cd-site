<template>
  <div>
    <div class="el-content-title">单位和间距</div>
    <div class="hr"></div>
    <div class="el-content-des">
      单位是页面空间间距的标尺，间距是页面空间的重要组成。
    </div>
    <div class="el-content-subtitle">01.单位：8点网格系统</div>
    <div class="el-content-subdes">
      基于 8 点网格法来制定产品中的间距，建立 8 点为一个单位的网格，所有的元素与间距尺寸都是 8 的倍数。使用 8 的倍数来定义模块的间距与元素的尺寸。
      使用 8 点网格法可以保证更统一的界面，更少的时间成本，更好的适应性从而规范自己的设计和开发。
    </div>

    <div class="greyBg">
      <div class="el-content-subtitle clear-margin">为什么是 8点？</div>
      <div class="el-content-subdes light subdes1">
        为什么是基于8点去定义网格，而不是6点或者10点？引用下Quora上一个提问的回答：
      </div>
      <div class="el-centent-subdes light">
        If you use 8, you can easily resize without ending up with half or quarter pixels. 8/2=4, 4/2=2 and 2/2=1. 
      </div>
      <div class="el-centent-subdes light">
        If you start with 10 you'll end up with 2.5 pixels, and then 1.25 (10, 5, 2.5, 1.25 …) 
      </div>
      <div class="el-centent-subdes light">
        you get the idea. 8 gives you more flexibility than 10. /Sjur O. Sundin, Senior UX Architect / Design Manager – San Diego, CA/
      </div>
      <div class="el-content-subdes light subdes2">
        意思是：如果你用8作为设计的最小单位，你可以很方便的缩小的你的设计尺寸，8/2=4,4/2=2,2/2=1。
        如果你从10开始，你缩小到的网格单位可能是2.5像素，在往下是1.25像素。
      </div>
      <img src="/static/img/pc-element-layout/unit01.jpg" alt="" class="cd-responsive unit">
    </div>
    

    <div class="el-content-subtitle">02.间距：PC端最小单位和间距使用规范</div>
    <div class="el-content-subdes">
      PC端我们以 4 作为最小单位，可以确保不同布局之间的视觉一致性，同时可以灵活的适配多种尺寸的设计。在网格系统中应该更加注重的是间距，
      而间距要遵循网格系统（例如使用 4、8、16、24、32 等和 4 具有规律的数字）同时在产品中的各类元素也要遵循这类原则（例如图标大小、组件大小等）。
    </div>
    <div class="el-content-subtitle">以下是PC端常用间距范围值：</div>
    <img src="/static/img/pc-element-layout/unit02.jpg" alt="" class="cd-responsive unit">

  </div>
</template>
<style scoped>
.greyBg {
  margin-top: 32px;
  padding: 32px 0px 32px 40px;
  background: #F9F9F9;
  max-width: 912px;
  min-height: 637px;
}
.unit {
  margin-top: 32px;
}
.clear-margin {
  margin-top: 0;
}
.subdes1 {
  margin-top: 4px;
  margin-bottom: 32px;
}
.subdes2 {
  margin-top: 32px;
}
</style>