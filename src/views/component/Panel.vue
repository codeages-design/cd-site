<template>
  <div>
    <div class="site-content-title">面板</div>
    <div class="site-content-des">
      面板是界面布局中常用的容器，能够帮助设计师更为合理地梳理界面信息架构。你可以根据实际情况在面板中添加图片、文字及其他相关界面元素。
    </div>
    <x-panel :code="code.panel_base|trim">
      <span slot="title">
        常用面板
      </span>
      <div slot="code">
        <pre v-highlightjs><code class="html">
          {{ code.panel_base }}
        </code></pre>
      </div>
      <div class="cd-mb16" slot="style" v-html="code.panel_base"></div>
      <div class="cd-text-xs" slot="dec">
        面板必须涵盖头部和身体部分，头部右侧可以根据实际场景更改不同的图标，从而灵活增减交互点。  
      </div>
    </x-panel>
  </div>
</template>

<script>
import * as code from './panel';
import XPanel from '@/components/Panel';

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
