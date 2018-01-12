<template>
  <div>
    <div class="site-content-title">自动补全</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.autoComplete_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.autoComplete_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.autoComplete_base" style="width: 200px">
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.autocomplete_api }}
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
            <td>el</td>
            <td>要绑定的Dom元素</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>sources</td>
            <td>数据源, 如果是Function类型，则必须返回一个Promise, resolve值为数组</td>
            <td>Array | Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>selectKey</td>
            <td>如果数据源中的每一项是一个对象，则添加selectKey来筛选要匹配的key</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as code from './autocomplete';
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
  mounted() {
    cd.autocomplete({
      el: '#cd-autocomplete',
      sources: [
        {
          id: '1',
          name: '11',
        },
        {
          id: '2',
          name: '12',
        },
        {
          id: '3',
          name: '13',
        },
        {
          id: '4',
          name: '21'
        }
      ],
      selectKey: 'name'
    });
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
