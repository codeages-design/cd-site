<template>
  <div>
    <div class="el-content-title">Picture 图片</div>
    <div class="hr"></div>
    <div class="el-content-des">
      在界面设计中使用合理的图片比例能让界面层次更清晰，内容定位更准确。
    </div>
    <div class="el-content-subtitle">在UI设计中图片主要有3: 2、4 : 3、1 : 1、16 : 9这四种比例。</div>
    <img src="/static/img/pc-element-layout/picture01.png" alt="" class="cd-responsive picture1">
    <div class="el-content-subtitle small">
      3:2 由于他是由专业的相机拍摄而成，对设计的要求也相对较高，因此一般用于相对较专业的APP中，同时在产品定位上以内容为主的APP，图片相对占比较小，可承载更多的内容。
    </div>
    <div class="el-content-subtitle small">
      4:3 是由小型相机拍摄而成，这类相机用户群体较大，因此目前还是有很多APP在使用，同时其图片占比较3:2大，因此这一比例主要是产品以图片为主的APP。
    </div>
    <div class="el-content-subtitle small">
      1:1 利用此比例更容易将构图归整得简单，突出主被摄体的存在感。因此多用于电商类，需要用图片引导用户购买等情况，以及产品图和头像的设计。
    </div>
    <div class="el-content-subtitle small">
      16:9 原本是电脑显示器的宽度比，但随着移动设备的发展，16:9也越来越普及，目前多运用在视频的比例设计上。
    </div>
    <div class="el-content-subtitle">PC端场景图片比例的应用。</div>
    <div class="el-content-subdes">01.课程和班级的图片建议统一为16：9</div>
    <img src="/static/img/pc-element-layout/picture02.png" alt="" class="cd-responsive picture2">
    <div class="el-content-subdes">02.头像的图片建议统一为1：1</div>
    <img src="/static/img/pc-element-layout/picture03.png" alt="" class="cd-responsiveb left picture3">
    <img src="/static/img/pc-element-layout/picture04.png" alt="" class="cd-responsive left picture3">
    <div class="cd-clearfix"></div>
  </div>
</template>
<style scoped>
.left{
  float: left;
}
.el-content-subtitle{
  margin-top: 40px;
}
.small{
  font-size: 14px;
}
.picture1{
  margin-top: 24px;
  margin-bottom: 40px;
  width: 475px;
  height: 100px;
}
.picture2{
  margin: 8px 0px 32px -16px;
  width: 264px;
  height: 260px;
}
.picture3{
  margin-top: 48px;
  margin-right: 64px;
}
</style>