<template>
  <div>
    <div class="site-content-title">开关</div>
    <div class="site-content-des">
      开关描述
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.switch_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.switch_base }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style">
            <div class="col-xs-8" v-html="code.switch_base"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.switch_disabled|trim">
          <span slot="title">
            禁用
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.switch_disabled }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style">
            <div class="col-xs-8" v-html="code.switch_disabled"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.switch_api }}
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
            <td>要绑定的Dom元素（第一个Object参数中）</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>callback</td>
            <td>点击后的回调函数（第二个参数）</td>
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
import * as code from './switch';
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
