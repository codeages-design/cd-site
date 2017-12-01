<template>
  <div>
    <div class="site-content-title">文字提示</div>
    <div class="site-content-des">
      文字提示描述
    </div>
    <div class="cd-row">
      <div class="col-xs-12">
        <x-panel :code="code.tooltip_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tooltip_base }}
            </code></pre>
          </div>
          <div class="cd-mb16 site-example-tooltip" slot="style" v-html="code.tooltip_base">
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="col-xs-12">
        <x-panel :code="code.tooltip_base|trim">
          <span slot="title">
            多方位触发
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tooltip_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <div style="margin-left: 60px; margin-bottom: 20px">
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="top left" data-placement="topLeft"  style="width: 120px">topLeft</button>
              <button class="cd-btn cd-btn-ghost-default" style="width: 120px">top</button>
              <button class="cd-btn cd-btn-ghost-default" style="width: 120px">topRight</button>
            </div>
            <div style="width: 100px; float: left">
              <button class="cd-btn cd-btn-ghost-default" style="width: 120px">left</button>
            </div>
            <div style="width: 100px; margin-left: 368px">
              <button class="cd-btn cd-btn-ghost-default" style="width: 120px">right</button>
            </div>
            <div style="margin-left: 60px; margin-top: 20px">
              <button class="cd-btn cd-btn-ghost-default" style="width: 120px">bottomLeft</button>
              <button class="cd-btn cd-btn-ghost-default" style="width: 120px">bottom</button>
              <button class="cd-btn cd-btn-ghost-default" style="width: 120px">bottomRight</button>
            </div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './tooltip';
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
    cd.tooltip();
  },
  methods: {
  }
}
</script>

<style lang="less">
.site-example-tooltip .cd-tooltip {
  position: relative;
  display: inline-block;
  margin: 10px 20px;
  opacity: 1;
}
</style>
