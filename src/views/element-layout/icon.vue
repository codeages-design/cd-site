<template>
  <div>
    <div class="el-content-title">Icon 图标</div>
    <div class="hr"></div>
    <div class="el-content-des">
      图标用以辅助用户理解界面信息，给予用户正确、友好的指引。
      拥有一套规范化的优质图标，会赋予界面更好的视觉体验，是用户体验设计中不可或缺的重要环节。
    </div>

    <div class="el-content-subtitle">设计原则</div>
    <div class="el-content-subdes">
      <span class="subtitle">01.简约：</span>
      图标的造型告别繁杂，不做过多的装饰，有较高的易读性和辨识性。
    </div>
    <img src="/static/img/pc-element-layout/icon01.png" alt="" class="cd-respnsive">
    <div class="cd-clearfix">
      <div class="correct left">
        <i class="cd-icon cd-icon-star blue"></i>
        <span class="subtitle">正确示范</span>
      </div>
      <div class="wrong left">
        <i class="cd-icon cd-icon-star red"></i>
        <span class="subtitle">错误示例</span>
      </div>
    </div>
    
    <div class="el-content-subdes">
      <span class="subtitle">02.清晰：</span>
      清晰是保证设计品质的前提，我们需保证在各个平台上图标都有着清晰的阅读性。
    </div>
    <img src="/static/img/pc-element-layout/icon02.png" alt="" class="cd-respnsive">
    <div class="cd-clearfix">
      <div class="correct left">
        <i class="cd-icon cd-icon-star blue"></i>
        <span class="subtitle">正确示范</span>
      </div>
      <div class="wrong left">
        <i class="cd-icon cd-icon-star red"></i>
        <span class="subtitle">错误示例</span>
      </div>
    </div>
    <div class="el-content-subdes">
      <span class="subtitle">03.一致性：</span>
      图标中的风格，如圆角弧度、线条宽度等都需要保持一致性。
    </div>
    <img src="/static/img/pc-element-layout/icon03.png" alt="" class="cd-respnsive">
    <div class="cd-clearfix">
      <div class="wrong left">
        <i class="cd-icon cd-icon-star red"></i>
        <span class="subtitle">两者图标风格明显不一致，一个是面性一个是线性。</span>
      </div>
    </div>
    <div class="el-content-subtitle">设计规范</div>
    <div class="el-content-subdes">
      <span class="subtitle">图标尺寸：</span>
      PC 端图标尺寸为 24*24px，包含 2px 的溢出区域。
    </div>

    <div class="el-content-subtitle">网络标格</div>
    <div class="el-content-subdes">
      预设正方形、圆形、矩形、正交线、对角线以及内容区域，去辅助图标的设计，
      以达到一致的视觉面积。在绘制图标时，元素与像素网格对齐以确保清晰。
    </div>
    <img src="/static/img/pc-element-layout/icon04.png" alt="" class="cd-respnsive">

  </div>
</template>
<style scoped>
.left{
  float: left;
}
.el-content-subdes{
  font-family: PingFangSC-Medium;
  color: #999999;
  margin-top: 24px;
}
.subtitle{
  font-family: PingFangSC-Medium;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  letter-spacing: 0;
  line-height: 20px;
}
img{
  margin: 32px 0px 24px 0px;
}

.correct{
  margin-right: 120px;
}
.blue{
  color: #31A1FF;
}
.red{
  color: #FF4631;
}
</style>