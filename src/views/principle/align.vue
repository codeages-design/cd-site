<template>
  <div class="site-principle-content">
    <div class="site-principle-content-title">对齐</div>
    <div class="pt-28">
      <span class="brief">在界面设计中，将元素进行对齐，既符合用户的认知特性，也能引导视觉流向，让用户更流畅地接收信息。</span>
      <div class="wrapper">
        <div class="site-principle-content-small-title pt-40">
          <span class="site-principle-content-info-name">1.文字类对齐</span>
        </div>
        <div class="pt-12">
          <span>如果页面段落很多，字段又长短不一、比较散时，需要确定一个统一的视觉起点。</span>
        </div>
        <img
          class="site-principle-content-img pt-24"
          src="static/img/principle/duiqi_01.png"
          alt=""
        >
      </div>
      <div class="pt-40">
        <div class="site-principle-content-small-title">
          <span class="site-principle-content-info-name">2.表单类对齐</span>
        </div>
        <div class="pt-12">
          <span>冒号对齐（或文字右对齐）能让内容锁定在一定范围内，让用户眼球顺着冒号的视觉流，就能找到所有填写项，从而提高填写效率。</span>
        </div>
        <img
          class="site-principle-content-img pt-24"
          src="static/img/principle/duiqi_02.png"
          alt=""
        >
      </div>
      <div class="friendly-content-info pt-40">
        <div class="site-principle-content-small-title">
          <span class="site-principle-content-info-name">3.数字类对齐</span>
        </div>
        <div class="pt-12">
          <span>为了快速对比数值大小，建议所有数值取相同有效位数，并且右对齐</span>
        </div>
        <img
          class="site-principle-content-img pt-32"
          src="static/img/principle/duiqi_03.png"
          alt=""
        >
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
  .brief {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #666666;
    letter-spacing: 0;
  }

  .site-principle-content-info-name {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 700;
  }

  .site-principle-content-small-title {
    & + div {
      span {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
      }
    }
  }
</style>