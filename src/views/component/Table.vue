<template>
  <div>
    <div class="site-content-title">表格</div>
    <div class="site-content-des">
      作为中后台数据展示与处理最为常见的组件，表格承载了较为复杂的交互逻辑与业务诉求，在 Codeages Design 中，结合一系列中后台产品的经验，尽可能简化表格的交互复杂度，给使用者以更好的体验。
    </div>
    <div class="cd-row">
      <div class="cd-xs-24">
        <x-panel :code="code.table_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.table_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.table_base"></div>
          <div class="" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './table';
import XPanel from '@/components/Panel';
import '@/mock';

export default {
  components: {
    XPanel
  },
  data() {
    return {
      code,
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
