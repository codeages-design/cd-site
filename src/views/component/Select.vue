<template>
  <div>
    <div class="site-content-title">选择器</div>
    <div class="site-content-des">
      选择器描述
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.select_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.select_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <div style="width: 200px;" v-html="code.select_base"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.select_multi|trim">
          <span slot="title">
            多选
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.select_multi }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <div style="width: 200px;" v-html="code.select_multi"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.select_api }}
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
            <td>type</td>
            <td>类型</td>
            <td>String</td>
            <td>single</td>
            <td>single、multi</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as code from './select';
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
  created() {
    
  },
  mounted() {
    cd.select({
      el: '#select-single',
    });

    cd.select({
      el: '#select-multi',
      type: 'multi'
    })
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
