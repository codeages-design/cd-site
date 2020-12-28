<template>
  <div>
    <div class="el-content-title">布局</div>
    <div class="hr"></div>
    <div class="el-content-des">
      由于产品线种类的丰富，为了使产品保持一致性，我们在定义模块布局系统时要保持统一。
    </div>

    <div class="el-content-subtitle">如何保持统一</div>
    <div class="el-content-subdes subdes1">
      保持产品的一致性，我们从以下 4 点出发： 
    </div>
    <div class="el-content-subdes subdes1">1.保证画布和内容块尺寸的一致</div>
    <div class="el-content-subdes subdes1">2.统一的网格单位</div>
    <div class="el-content-subdes subdes1">3.统一的栅格系统</div>
    <div class="el-content-subdes">4.视觉元素的统一</div>

    <div class="el-content-subtitle">01.画布和内容块尺寸一致</div>
    <div class="el-content-subdes">
      为了提高效率，减少理解成本，所以需要内部统一的设计尺寸。在 PC 端采用 1440x900 的设计尺寸，自适应布局的内容块宽度是1200。
    </div>
    <div class="greyBg greyBg1 cd-clearfix">
      <div class="container1 left">
        <img src="/static/img/pc-element-layout/layout01.jpg" alt="" class="cd-responsive ">
        <div class="star-box">
          <i class="cd-icon cd-icon-star blue"></i>
          <span class="el-content-subdes light">PC端设计尺寸</span>
        </div>
      </div>
      <div class="left">
        <img src="/static/img/pc-element-layout/layout02.jpg" alt="" class="cd-responsive ">
        <div class="star-box">
          <i class="cd-icon cd-icon-star blue"></i>
          <span class="el-content-subdes light">PC端内容块尺寸</span>
        </div>
      </div>
    </div>
    
    <div class="el-content-subtitle">02.统一的网格间距单位</div>
    <div class="el-content-subdes">
      采用 8 点网格系统，该网格可以确保不同布局之间的视觉一致性，同时可以灵活的适配多种尺寸的设计。
    </div>
    <div class="el-content-subdes">
      而在网格系统中应该更加注重的是间距，而间距要遵循网格系统（例如PC端常用的间距4、8、16、24、32 等和 4 具有规律的数字）。
    </div>
    <img src="/static/img/pc-element-layout/unit02.jpg" alt="" class="cd-responsive unit02">

    <div class="el-content-subtitle">03.统一的栅格系统</div>
    <div class="el-content-subdes">
      根据不同产品对各类页面提供不同的布局结构。而在不同栅格结构中栅格区域也会有所不同，固定区域会存在于响应式网格之外，不随着页面的变化而改变大小。
    </div>
    <div class="el-content-subdes">
      同时在应用网格系统中也要考虑网格区域元素的行为，网格区域元素行为可分为固定的、流动的（随着屏幕大小而改变）、跟随的（元素宽度固定但受其他元素影响）、挤压的（随页面元素的出现而收缩）
    </div>
    <div class="greyBg greyBg2">
      <img src="/static/img/pc-element-layout/layout03.jpg" alt="" class="cd-responsive ">
    </div>

    <div class="el-content-subtitle">04.统一的视觉元素</div>
    <div class="el-content-subdes">
      所有的视觉元素尺寸都是统一的（如要调整元素大小可用增量来改变元素的大小和位置等），无论是 PC 端还是移动端的视觉元素。
    </div>
    <div class="el-content-subdes">
      视觉元素的统一包括：Icon 的尺寸大小的统一、图片尺寸比例的统一、基本视觉元素的统一。
    </div>
    <div class="el-content-subtitle small">1.icon 尺寸大小的统一</div>
    <div class="el-content-subdes">
      产品中使用的 icon 需要按照已定规则进行设计。
    </div>
    <div class="greyBg greyBg3">
      <img src="/static/img/pc-element-layout/layout04.jpg" alt="" class="cd-responsive ">
    </div>
    <div class="el-content-subtitle small">2.图片尺寸比例的统一</div>
    <div class="el-content-subdes">
      PC 和移动端图片显示的比例一致，保持布局的一致性，在图像、曲面和屏幕大小等元素上使用一致的宽高比。
    </div>
    <div class="el-content-subtitle small">3.元素摆放的统一</div>
    <div class="el-content-subdes">
      在设计体系下，基本视觉元素尺寸是保持统一的，同时也要保持元素摆放的一致性，不可将元素凌乱的摆放来扰乱用户的操作感知。
    </div>

    <div class="greyBg greyBg4 cd-clearfix">
      <div class="container2 left">
        <img src="/static/img/pc-element-layout/layout05.jpg" alt="" class="cd-responsive ">
        <div class="star-box">
          <i class="cd-icon cd-icon-star blue"></i>
          <span class="el-content-subtitle small">在页面中各类元素合理摆放</span>
        </div>
      </div>
      <div class="left">
        <img src="/static/img/pc-element-layout/layout06.jpg" alt="" class="cd-responsive ">
        <div class="star-box">
          <i class="cd-icon cd-icon-star red"></i>
          <span class="el-content-subtitle small">页面选中元素摆放错乱</span>
        </div>
      </div>
    </div>


  </div>
</template>
<style scoped>
.left {
  float: left;
}
.small {
  font-size: 14px;
}
.light {
  color: #333333;
}
.greyBg {
  margin-top: 32px;
  padding: 40px;
  background: #F9F9F9;
}
.greyBg1 {
  width: 848px;
}
.greyBg2 {
  width: 464px;
}
.greyBg3 {
  width: 642px;
  padding: 32px;
}
.greyBg4 {
  width: 588px;
}
.blue{
  color: #31A1FF;
}
.red{
  color: #FF4631;
}
.star-box {
  margin-top: 24px;
}
.container1 {
  margin-right: 112px;
}
.container2 {
  margin-right: 80px;
}
.subdes1 {
  margin-bottom: 12px;
}
</style>