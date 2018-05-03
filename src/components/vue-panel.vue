<template>
  <cd-panel 
    :class="{'active': isShowCode}"
    :title="title"
    size="sm"
    :isShowAction="true"
  >
    <div slot="action">
      <i class="cd-icon cd-icon-copy js-copy-code" @click="copy" :data-clipboard-text="code" v-if="isShowCode"></i>
      <i class="cd-icon cd-icon-close active" @click="toggleCode" v-show="isShowCode"></i>
      <i class="cd-icon cd-icon-code" @click="toggleCode" v-show="!isShowCode"></i>
    </div>
    <slot name="code" v-if="isShowCode"></slot>
    <slot name="style"></slot>
    <div style="font-size:12px">
      <slot name="dec"></slot>
    </div>
  </cd-panel>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Clipboard from 'clipboard';

@Component
export default class extends Vue {
  isShowCode: boolean = false;

  @Prop()
  code: any[];

  @Prop()
  title: String;

  toggleCode() {
    this.isShowCode = !this.isShowCode;
  }

  copy() {
    const clipboard = new Clipboard('.js-copy-code');
    clipboard.on('success', (e) => {
      this.$message({
        type: 'success',
        message: '复制成功'
      })

      clipboard.destroy();
    })
  }
}
</script>

<style lang="less">
@import '~cd-vue/src/styles/variables.less';
@import '~cd-vue/src/styles/mixins/index.less';

.cd-panel {
  .transition();
  &:hover {
    .transition();
    .box-shadow-z(8px);
  }
  .cd-panel__action i {
    .transition();
    &:hover,
    &.active {
      .transition();
      cursor: pointer;
      opacity: 0.56;
    }
  }
}
</style>
