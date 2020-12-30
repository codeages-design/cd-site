<template>
  <div class="site-principle-content">
    <div class="site-principle-content-title">重复</div>
    <div class="pt-28">
      <span class="brief">相同的元素在整个界面中不断重复，不仅可以有效降低用户的学习成本，也可以帮助用户识别出这些元素之间的关联性。</span>
      <div class="site-principle-repetition-sm-block">
        <div class="site-principle-content-small-title pt-40">
          <span class="site-principle-content-info-name">重复元素</span>
        </div>
        <div class="pt-12">
          <span>重复元素可以是一条粗线、一种线框，某种相同的颜色、设计要素、设计风格，某种格式、空间关系等。</span>
        </div>
        <img
          class="site-principle-content-img pt-24"
          src="static/img/principle/chongfu_01.png"
          alt=""
        >
        <img
          class="site-principle-content-img pt-40"
          src="static/img/principle/chongfu_02.png"
          alt=""
        >
        <img
          class="site-principle-content-img pt-40"
          src="static/img/principle/chongfu_03.png"
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
    line-height: 24px;
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