<template>
  <div>
    <div class="site-content-title">加载</div>
    <div class="site-content-des">
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.loading_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.loading_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.loading_base"></div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">
      API
    </div>
    <pre v-highlightjs><code class="js">
      {{ code.loading_api }}
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
            <td>isFixed</td>
            <td>是否固定显示</td>
            <td>boolean</td>
            <td>false</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as code from './loading';
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
    const $boxEl = $('#loading-box');
    const loading = cd.loading();
    $boxEl.html(loading);
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
