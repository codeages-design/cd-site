<template>
  <div class="cd-panel" :class="{'active': isShowCode}">
    <div class="cd-panel-heading">
      <div class="cd-panel-title">
        <slot name="title"></slot>
      </div>
      <div class="cd-panel-action">
        <i class="cd-icon cd-icon-sad copy-code" :data-clipboard-text="code" v-if="isShowCode"></i>
        <i class="cd-icon cd-icon-sad-o" :class="{'active': isShowCode}" @click="toggleCode"></i>
      </div>
    </div>
    <div class="cd-panel-body">
      <slot name="code" v-if="isShowCode"></slot>
      <slot name="style"></slot>
      <slot name="dec"></slot>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  props: ['code'],
  data() {
    return {
      isShowCode: false
    }
  },
  methods: {
    toggleCode() {
      this.isShowCode = !this.isShowCode;
    },
  },
  mounted() {
    new Clipboard('.copy-code');
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/mixins.less';

.cd-panel {
  .site-transition();
  &:hover {
    .site-transition();
    .site-box-shadow-z(8px);
  }
  .cd-panel-action i {
    .site-transition();
    &:hover,
    &.active {
      .site-transition();
      cursor: pointer;
      opacity: 0.56;
    }
  }
}
</style>
