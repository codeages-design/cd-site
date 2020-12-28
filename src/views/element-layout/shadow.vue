<template>
  <div>
    <div class="el-content-title">Shadow 阴影</div>
    <div class="hr"></div>
    <div class="el-content-des">
      阴影用来塑造空间层级关系，从而使用户更好地理解其结构与内容。此外，阴影也能提升界面的品质感。
    </div>
    <div class="el-content-subtitle">1.界面层级</div>
    <div class="el-content-subdes">
      阴影可以用来描绘界面元素之间的相对高度。
      我们将界面元素的相对高度（Z 轴位置）由下至上定义为 5 个层级：底层背景、界面元素、小阴影 （S1）、中阴影（S2）、大阴影（S3 ）
    </div>
    <img src="/static/img/pc-element-layout/shadow01.png" alt="" class="cd-responsive shadow1">

    <div class="el-content-subtitle">2.阴影类型</div>
    <div class="el-content-subdes">
      PC端我们会应用3种类型：
    </div>
    <img src="/static/img/pc-element-layout/shadow02.png" alt="" class="cd-responsive shadow2">
    <div class="el-content-subtitle">3.阴影状态与色值</div>
    <div class="cd-clearfix">
      <div class="shadow-box">
        <div class="el-content-subdes shadow-box-subdes">中性阴影</div>
        <img src="/static/img/pc-element-layout/shadow03.png" alt="" class="cd-responsive shadow3" style="margin-right: 208px">
      </div>
      <div class="shadow-box">
        <div class="el-content-subdes shadow-box-subdes">彩色阴影</div>
        <img src="/static/img/pc-element-layout/shadow04.png" alt="" class="cd-responsive shadow3">
      </div>
    </div>
    <img src="/static/img/pc-element-layout/shadow05.png" alt="" class="cd-responsive shadow4">
  </div>
</template>
<style scoped>
.shadow1{
  width: 1170px;
  height: 604px;
  margin: 40px 0px;
}
.shadow2{
  width: 700px;
  height: 360px;
  margin: 40px 0px;
}
.shadow3{
  width: 508px;
  height: 664px;
  margin-left: -24px;
}
.shadow4{
  width: 1116px;
  height: 476px;
   margin: 40px 0px;
}
.shadow-box{
  float: left;
}
.shadow-box-subdes{
  margin: 24px 0;
}
</style>