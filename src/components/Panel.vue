<template>
  <div class="cd-panel cd-panel-sm" :class="{'active': isShowCode}">
    <div class="cd-panel-heading">
      <div class="cd-panel-title">
        <slot name="title"></slot>
      </div>
      <div class="cd-panel-action">
        <i class="cd-icon cd-icon-copy js-copy-code" @click="copy" data-toggle="code-tooltip" data-title="复制代码" :data-clipboard-text="code" v-if="isShowCode"></i>
        <i class="cd-icon cd-icon-close active" data-toggle="code-tooltip" data-title="隐藏代码" @click="toggleCode" v-show="isShowCode"></i>
        <i class="cd-icon cd-icon-code" data-toggle="code-tooltip" data-title="显示代码" @click="toggleCode"  v-show="!isShowCode"></i>
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
    copy() {
      const clipboard = new Clipboard('.js-copy-code');
      clipboard.on('success', function(e) {
        cd.message({
          type: 'success',
          message: '复制成功'
        });

        clipboard.destroy();
      })
    }
  },
  created() {
    cd.tooltip({
      el: '[data-toggle="code-tooltip"]'
    });
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
