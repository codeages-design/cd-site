<template>
  <div>
    <div class="el-content-title">栅格</div>
    <div class="hr"></div>
    <div class="el-content-des">
      合理的栅格系统可以通过调整布局网格以满足产品和各种设备尺寸的需求。
    </div>

    <div class="el-content-subtitle">01.栅格说明</div>
    <div class="el-content-subdes">
      在栅格系统中，我们基于行（Row）和列（Col）来定义信息框架，其中使用较多是行。
    </div>
    <div class="greyBg">
      <img src="/static/img/pc-element-layout/grid01.png" alt="" class="cd-responsive ">

      <div class="container">
        <i class="cd-icon cd-icon-star blue"></i>
        <span class="el-content-subdes">
          布局的栅格化系统，基于行（Row）和列（Col）来定义信息区块的外部框架，以保证页面的每个模块能够清晰地排布起来且保证统一性。所有的信息都存在于 Col 中，Row 的唯一元素为 Col。
        </span>
      </div>
      
    </div>
    

    <div class="el-content-subtitle">02.建立PC端栅格</div>
    <div class="el-content-subdes">
      越大的屏幕尺寸适合更大的间距，越多的内容适合更多数量的栅格。基于 8 点网格法和框架布局结构的统一，我们采用24栅格体系。
    </div>
    <div class="el-content-subdes">
      以上下布局的结构为例，对内容区域进行 24 栅格的划分设置。
    </div>
    <div class="el-content-subdes subdes1">
      如下图所示，栅格的总宽度是 23 列+ 1 小列=总宽度，而页面中的列会随着页面尺寸的变化而变化，唯一不变的是页面中的间隙。
    </div>
    <div class="greyBg">
      <img src="/static/img/pc-element-layout/grid02.png" alt="" class="cd-responsive ">
    </div>
    <div class="el-content-subdes subdes2">
      确保各个产品层级的统一，我们在产品上使用 24 列栅格系统可以满足大部分的业务场景，我们建议在系统中最多设立 4 个独立模块，最少设立 1 个独立模块。
    </div>
    <div class="greyBg">
      <img src="/static/img/pc-element-layout/grid03.png" alt="" class="cd-responsive ">
    </div>

  </div>
</template>
<style scoped>
.greyBg {
  margin-top: 32px;
  padding: 40px;
  background: #F9F9F9;
  max-width: 748px;
}
.container {
  margin-top: 32px;
}
.blue{
  color: #31A1FF;
}
.subdes1 {
  margin-top: 16px;
}
.subdes2 {
  margin-top: 32px;
}
</style>