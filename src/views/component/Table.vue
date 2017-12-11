<template>
  <div>
    <div class="site-content-title">表格</div>
    <div class="site-content-des">
      作为中后台数据展示与处理最为常见的组件，表格承载了较为复杂的交互逻辑与业务诉求，在 Codeages Design 中，结合一系列中后台产品的经验，尽可能简化表格的交互复杂度，给使用者以更好的体验。
    </div>
    <div class="cd-row">
      <div class="col-xs-12">
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
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="col-xs-12">
        <x-panel :code="code.table_base|trim">
          <span slot="title">
            带排序和筛选
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.table_sort_filter }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.table_sort_filter">
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.table_api }}
    </code></pre>
    <div class="cd-table-responsive">
      <table class="cd-table">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>target</td>
            <td>table数据要存放的目标元素</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>url</td>
            <td>发起数据请求的路由</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>data</td>
            <td>要传递的数据，包括sort、filter</td>
            <td>Object</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>data.sort</td>
            <td>要传递的排序数据，包括name、value属性</td>
            <td>Object</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>data.filter</td>
            <td>要传递的排序数据，包括name、value属性</td>
            <td>Object</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>success</td>
            <td>请求数据成功回调函数</td>
            <td>Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>error</td>
            <td>请求数据失败回调函数</td>
            <td>Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
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
