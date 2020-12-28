<template>
  <div>
    <div class="el-content-title">Line 线条&Corner 边角</div>
    <div class="hr"></div>

    <div class="el-content-subtitle">1.线条Line</div>
    <div class="el-content-subdes">
      pc端分割线和边框  设计师采用1px，且边框采用内边框。
    </div>
    <div class="line-area01">
      <div class="line-container cd-clearfix">
        <div class="el-content-subdes line-box line-box1 left">#ebebeb</div>
        <div class="line line1 left"></div>
        <div class="el-content-des describe left">PC端推荐使用(适用各种场景)</div>
      </div>
      <div class="line-container cd-clearfix">
        <div class="el-content-subdes line-box line-box2 left">#f0f0f0</div>
        <div class="line line2 left"></div>
        <div class="el-content-des describe left">适用于PC端比较少的淡化间隔场景</div>
      </div>
    </div>
      
    <div class="el-content-subtitle">2.边角Corner</div>
    <div class="el-content-subdes">
      边角是用一段与角的两边相切的圆弧替换原来的角，在界面设计中，适当的边角不仅可以反应产品的调性，还提供更友好的视觉体验。
      在组件中，使用了两种边角数值。
    </div>

    <div class="corner-container">
      <div class="el-content-subdes">
          1.无边角border-radius：0px（通常用于商务扁平大背景色块，无边框）
      </div>
      <div class="corner1"></div>
      <div class="corner2"></div>
    </div>
    <div class="corner-container">
      <div class="el-content-subdes">
          2.边角值为4px（通常用于背景色块，边框，各种框组件等）
      </div>
      <img src="/static/img/pc-element-layout/line03.png" alt="" class="cd-responsive line03">
    </div>
    <div class="corner-container">
      <div class="el-content-subdes">
          3.边角值为height的0.5倍即最大倒角(通常适用于一些幽灵框，按钮，tab选择框等)
      </div>
      <div class="cd-clearfix">
        <div class="corner3 left el-content-des corner-half">数学课程</div>
        <div class="corner4 left corner-half"></div>
      </div>
      <div class="corner5 left el-content-des corner-half">开始学习</div>
      <div class="rel left">
          <div class="corner6 left el-content-des corner-half">练习</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.left{
  float: left;
}
.el-content-subtitle{
  margin-top: 40px;
}

.line-area01{
  margin-top: 32px;
  margin-bottom: 66px;
  .line-container{
    margin: 16px 0px;
  }
  .line-box{
    width: 80px;
    height: 60px;
    text-align: center;
    padding: 16px 12px;
    margin-right: 32px;
    border-radius: 4px;
  }
  .line-box1{
    border: 1px solid #EBEBEB;
  }
  .line-box2{
    border: 1px solid #F0F0F0;
  }
  .line{
    width: 210px;
    height: 1px;
    margin: 30px 0px;
    margin-right: 32px;
  }
  .line1{
    background-color: #EBEBEB;
  }
  .line2{
    background-color: #F0F0F0;
  }
  .describe{
    color: #333333;
    line-height: 60px;
  }
}

.line03{
  margin-top: 24px;
}

.corner-container{
  margin-top: 40px;
}
.corner1{
  max-width: 440px;
  height: 120px;
  background: #F0F0F0;
  margin-top: 24px;
}
.corner2{
  max-width: 440px;
  height: 40px;
  background: #F5F5F5;
  margin-top: 24px;
}

.corner-half{
  line-height: 40px;
  margin-top: 32px;
  border-radius: 20px; 
}
.shortBtn{
  width: 160px;
  height: 40px;
  text-align: center;  
  margin-right: 40px;
}
.longBtn{
  width: 200px;
  height: 40px;

}
.corner3{
  .shortBtn();
  border: 1px solid #E1E1E1;
}
.corner4{
  .longBtn();
  border: 1px solid #E1E1E1;
}
.corner5{
  .shortBtn();
  background: #46C37B;
  color: #FFFFFF;
}
.rel{
  position: relative;
}
.corner6{
  .longBtn();
  background: #FFFFFF;
  border: 1px solid #46C37B;
  color: #46C37B;
  text-align: right;
  padding-right: 32px;

  &:before{
    content:"作业";
    display: inline-block;
    position:absolute;
    left:0;
    top:0;
    z-index:1;

    margin-top: 32px;
    width:100px;
    border-radius: 20px; 
    background: #46C37B; 
    color: #FFFFFF;
    text-align: center;  
    line-height: 40px;
  }
}

</style>