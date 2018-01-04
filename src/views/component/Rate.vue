<template>
  <div>
    <div class="site-content-title">评分</div>
    <div class="site-content-des">
      单选框主要用于单项设置逻辑的选择，一次只能选择一个值，切勿将单选框用于是非逻辑的切换。
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.rate_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.rate_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.rate_base"></div>
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.rate_static|trim">
          <span slot="title">
            静态的
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.rate_static }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.rate_static"></div>
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <!-- <pre v-highlightjs><code class="js">
      {{ code.rate_api }}
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
    </div> -->
  </div>
</template>

<script>
import * as code from './rate';
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
    cd.rate({
      el: '[data-toggle="cd-rate"]',
      score: 2,
    }, (score) => {
      console.log(score);
    })
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
