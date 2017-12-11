<template>
  <div>
    <div class="site-content-title">单选框</div>
    <div class="site-content-des">
      单选框主要用于单项设置逻辑的选择，一次只能选择一个值，切勿将单选框用于是非逻辑的切换。
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.radio_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.radio_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.radio_base"></div>
          <div class="cd-text-xs" slot="dec">
            单选框同组可以根据实际业务需求设定个数，但一次只能选中一个值。
          </div>
        </x-panel>
        <x-panel :code="code.radio_size|trim">
          <span slot="title">
            大小
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.radio_size }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.radio_size"></div>
          <div class="cd-text-xs" slot="dec">
            小尺寸单选框在一些特定的对空间有较大要求的场景下可以选择性使用。
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.radio_disabled|trim">
          <span slot="title">
            禁用
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.radio_disabled }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.radio_disabled"></div>
          <div class="cd-text-xs" slot="dec">
            在禁用单选框的情况下，不应该产生任何样式上的交互反馈。
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.radio_api }}
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
import * as code from './radio';
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
