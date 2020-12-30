<template>
  <div>
    <div class="el-content-title">Font 字体</div>
    <div class="hr"></div>
    <div class="el-content-des">
      字体是体系化界面设计中最基本的构成之一。字体是设计系统中的重要基石。字体系统的搭建将遵循一致、灵活、纵深的原则，
      为用户创造良好的阅读体验。
    </div>
    <div class="el-content-des dark">
      对于字体的设计规范，我们建议从4个角度出发:    
    </div>
    <div class="el-content-subdes">1.字体家族</div>
    <div class="el-content-subdes">2.主字体</div>
    <div class="el-content-subdes">3.字阶和行高</div>
    <div class="el-content-subdes">4.字重</div>
    
    <div class="el-content-subtitle">01.字体家族</div>
    <div class="el-content-subdes">
      字体家族优先使用系统默认的字体。对于不同环境显示条件，则提供了一套满足易读性的备用字体。
    </div>
    <img src="/static/img/pc-element-layout/font01.png" alt="" class="cd-responsive font-img1">

    <div class="el-content-subtitle">02.主字体</div>
    <div class="el-content-subdes">
      我们基于电脑显示器阅读距离（50 cm）以及最佳阅读角度（0.3），主字体从原先的几年前流行的 12 上升至 14，
      以保证在多数常用显示器上的用户阅读效率最佳。
    </div>
    <img src="/static/img/pc-element-layout/font02.png" alt="" class="cd-responsive font-img2">

    <div class="el-content-subtitle">03.字阶与行高</div>
    <div class="el-content-subdes">
      合理的字阶和行高使得界面层次清晰、重点突出。字阶拉开了页面的信息层级，行高可以理解为一个包裹在字体外面的无形的盒子。
    </div>
    <img src="/static/img/pc-element-layout/font03.png" alt="" class="cd-responsive font-img2">

    <div class="el-content-subdes">
      在设计体系中，主字号 14 建议的行高为 20。我们根据实际的使用情况定义了对应字号的不同行高，
      字阶根据具体情况进行选择。移动端字阶和 PC 保持一致，行高借鉴苹方字体系统默认行高来设定，
      在此不做赘述。以下为 PC 端字阶和行高示例：
    </div>
    <img src="/static/img/pc-element-layout/font04.png" alt="" class="cd-responsive font-img3">
    <div class="el-content-subtitle">04.字重</div>
    <div class="el-content-subdes">
      我们建议标题类使用 Medium，以突出层级关系，让信息更清晰。相对 Semibold，Medium 兼容性更强，在用微软雅黑等字体时也能较好地显示；
      正文和辅助字号建议使用 Regular 字重；当需要强调时，建议使用 Medium；
      另外考虑到数字和西文字体本身面积较小，建议使用 Semibold，使得中西文混排时更适当。
    </div>
    <img src="/static/img/pc-element-layout/font05.png" alt="" class="cd-responsive font-img4">
  </div>
</template>
<style scoped>
.dark {
  color: #666666;
}
.font-img1{
  margin-top: 24px;
}
.font-img2{
  margin: 64px 0px 64px 92px;
}
.font-img3{
  margin-top: 40px;
}
.font-img4{
  margin: 48px 0px 0px 92px;
}
</style>