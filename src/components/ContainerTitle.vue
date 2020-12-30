<template>
  <div
    :class="classList"
    :title="title">{{ title }}</div>
</template>

<script>
export default {
  data() {
    return {
      classList: []
    }
  },
  props: {
    title: {
      type: String,
      reuqire: true,
      default: '主（副）标题'
    },
    isMainTitle: {
      type: Boolean, 
      default: true
    },
    subTitleSize: {
      type: String,
      default: 'middle'
    }
  },
  created() {
    if(this.isMainTitle) {
      this.classList.push('main-title');
    }
    if(!this.isMainTitle && this.subTitleSize === "small") {
      this.classList.push('sub-title_fs_small');
    }
    if(!this.isMainTitle && this.subTitleSize === "middle") {
      this.classList.push('sub-title_fs_middle');
    }
  }
}
</script>

<style lang="less" scoped>
  .main-title {
    position: relative;
    font-size: 24px;
    color: #333333;
    line-height: 32px;
    padding-left: 14px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebebeb;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 6px;
      height: 18px;
      margin-top: -16px;
      background-color: #31a1ff;
      border-radius: 2px;
    }
  }

  .sub-title_fs_small {
    font-size: 18px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    font-weight: 700;
  }

  .sub-title_fs_middle {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    font-weight: 700;
  }
</style>