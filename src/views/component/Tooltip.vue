<template>
  <div>
    <div class="site-content-title">文字提示</div>
    <div class="site-content-des">
    </div>
    <div class="cd-row">
      <div class="cd-xs-24">
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
      <div class="cd-xs-24">
        <x-panel :code="code.tooltip_api|trim">
          <span slot="title">
            多方位
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tooltip_api }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <div style="margin-left: 60px; margin-bottom: 20px">
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in top left" data-placement="topLeft" style="width: 120px">topLeft</button>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in top center" data-placement="top" style="width: 120px">top</button>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in top right" data-placement="topRight" style="width: 120px">topRight</button>
            </div>
            <div style="width: 100px; float: left">
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in left top" data-placement="leftTop" style="width: 120px; margin-bottom:20px">leftTop</button>
              <br>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in left center" data-placement="left" style="width: 120px; margin-bottom:20px">left</button>
              <br>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in left bottom" data-placement="leftBottom" style="width: 120px; margin-bottom:20px">leftBottom</button>
            </div>
            <div style="width: 100px; margin-left: 368px">
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in right top" data-placement="rightTop" style="width: 120px; margin-bottom:20px">rightTop</button>
              <br>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in right center" data-placement="right" style="width: 120px; margin-bottom:20px">right</button>
              <br>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in right bottom" data-placement="rightBottom" style="width: 120px; margin-bottom:20px">rightBottom</button>
            </div>
            <div style="margin-left: 60px;">
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in bottom center" data-placement="bottomLeft" style="width: 120px">bottomLeft</button>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in bottom center" data-placement="bottom" style="width: 120px">bottom</button>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in bottom center" data-placement="bottomRight" style="width: 120px">bottomRight</button>
            </div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.tooltip_api" 
      :attrData="attrData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './tooltip';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const attrData = [
  {
    name: 'el',
    dec: '要绑定的Dom元素',
    type: 'String',
    value: '[data-toggle="cd-tooltip"]',
    optional: '--'
  },
  {
    name: 'trigger',
    dec: '触发方式',
    type: 'String',
    value: 'hover',
    optional: '<code>hover</code> <code>click</code>',
    data: 'data-trigger'
  },
  {
    name: 'title',
    dec: 'tooltip内容',
    type: 'String|Html',
    value: '无',
    optional: '--',
    data: 'data-title'
  },
  {
    name: 'placement',
    dec: '出现方位,当位置不够时，会出现在合适的位置',
    type: 'String',
    value: 'top',
    optional: `<code>top</code> <code>bottom</code> <code>left</code> <code>right</code> <code>topLeft</code> <code>topRight</code> <code>bottomLeft</code>
      <br><code>bottomRight</code> <code>leftTop</code> <code>leftBottom</code> <code>rightTop</code> <code>rightBottom</code>`,
    data: 'data-placement'
  },
  {
    name: 'offset',
    dec: '偏移量，tooltip出现位置与触发元素之间的距离',
    type: 'Number',
    value: '10',
    optional: '--'
  },
  {
    name: 'delay',
    dec: '延迟，多少秒后出现tooltip',
    type: 'Number',
    value: '0',
    optional: '--'
  },
  {
    name: 'container',
    dec: `tooltip的父容器，可在元素上添加<code>data-container</code>来代替, <br>
      如果值为<code>false</code>，则父容器为该元素`,
    type: 'false | String',
    value: 'docment.body',
    optional: '--'
  },
];

export default {
  components: {
    XPanel,
    XApiTable
  },
  data() {
    return {
      code,
      attrData
    }
  },
  mounted() {
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
