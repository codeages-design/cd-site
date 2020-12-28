<template>
  <div>
    <div class="el-content-title">框架</div>
    <div class="hr"></div>
    <div class="el-content-des">
      按照用户行为及场景搭建符合用户认知及操作习惯的信息框架。框架指导信息分层及内容分布。
    </div>

    <div class="el-content-subtitle">01.结构及模块</div>
    <div class="el-content-subdes">
      采用从左至右的竖向结构，依次分别为：主导航区（Z1、Z2）、内容区（功能导航、内容区）、帮助区。每个区域顶部分别分布自身标题区且吸顶。
    </div>
    <div class="greyBg">
      <img src="/static/img/pc-element-layout/frame01.jpg" alt="" class="cd-responsive ">
    </div>
    <div class="greyBg">
      <img src="/static/img/pc-element-layout/frame02.jpg" alt="" class="cd-responsive ">
    </div>
    
    <div class="el-content-subtitle">02.常用结构的模块尺寸</div>

    <div class="greyBg">
      <div class="title">1.一级上下结构</div>
      <div class="el-content-subdes">
        导航只有一级固定在顶部，下面结构为响应式内容区域。
      </div>
      <img src="/static/img/pc-element-layout/frame03.jpg" alt="" class="cd-responsive img-margin">
      <div class="container">
        <i class="cd-icon cd-icon-star blue"></i>
        <span class="el-content-subdes">
          这种框架结构适用于中前台和后台首页
        </span>
      </div>
    </div>

    <div class="greyBg">
      <div class="title">2.二级左右结构</div>
      <div class="el-content-subdes">
        导航有二级且固定在左面，右面结构为响应式内容区域。
      </div>
      <img src="/static/img/pc-element-layout/frame04.jpg" alt="" class="cd-responsive img-margin">
      <div class="container">
        <i class="cd-icon cd-icon-star blue"></i>
        <span class="el-content-subdes">
          这种框架结构适用于中后台
        </span>
      </div>
    </div>

    <div class="greyBg">
      <div class="title">3.三级左中右结构</div>
      <div class="el-content-subdes">
        导航有三级且固定在左面，中间结构为响应式内容区域，右侧结构为帮助中心固定在右边。
      </div>
      <img src="/static/img/pc-element-layout/frame05.jpg" alt="" class="cd-responsive img-margin">
      <div class="container">
        <i class="cd-icon cd-icon-star blue"></i>
        <span class="el-content-subdes">
          这种框架结构适用于后台首页。
        </span>
      </div>
      <img src="/static/img/pc-element-layout/frame06.jpg" alt="" class="cd-responsive img-margin">
      <div class="container">
        <i class="cd-icon cd-icon-star blue"></i>
        <span class="el-content-subdes">
          这种框架结构适用于后台管理页面（点击一级导航会触发二级和三级导航）。
        </span>
      </div>
    </div>
    
    
  </div>
</template>
<style scoped>
.greyBg {
  margin-top: 32px;
  padding: 40px;
  background: #F9F9F9;
  max-width: 940px;
}
.title {
  font-family: PingFangSC-Medium;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  margin: -8px 0px 12px -8px;
}
.img-margin {
  margin-top: 24px;
}
.container {
  margin-top: 24px;
}
.blue{
  color: #31A1FF;
}
</style>