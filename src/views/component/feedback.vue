<template>
  <div>
    <div class="site-content-title">反馈</div>
    <div class="site-content-des">
      反馈组件大部分情况下是作为页面级的状态展示，快速告知用户某业务内容的当前状态，可以根据实际情况选择是否显示背景色。
    </div>
    <div class="cd-row">
      <div class="cd-xs-24">
        <x-panel :code="code.feedback_color|trim">
          <span slot="title">
            场景反馈
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.feedback_color }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.feedback_color"></div>
          <div class="" slot="dec">
              
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './feedback';
import XPanel from '@/components/panel.vue';

export default {
  components: {
    XPanel
  },
  data() {
    return {
      code,
    }
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
