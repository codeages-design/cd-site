<template>
  <p
    v-if="isMainText"
    :class="[isMainText ? 'main-text' : 'sub-text']"
    :text="text"
    :style="style">{{ text }}</p>
  <span
    v-else
    :class="[isMainText ? 'main-text' : 'sub-text']"
    :text="text"
    :style="style">{{ text }}</span>
</template>

<script>
export default {
  data() {
    return {
      style: `padding-top: ${this.paddingTop}px;`
    }
  },
  props: {
    text: {
      type: String,
      reuqire: true
    },
    isMainText: {
      type: Boolean,
      default: true
    },
    paddingTop: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>
  .main-text {
    font-size: 16px;
    color: #666666;
    letter-spacing: 0;
  }
  
  .sub-text {
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
  }
</style>