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
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-tooltip" data-title="tooltip in top left" data-placement="topLeft1" style="width: 120px">topLeft</button>
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
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.tooltip_api }}
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
            <td>'[data-toggle="cd-tooltip"]'</td>
            <td>--</td>
          </tr>
          <tr>
            <td>title</td>
            <td>tooltip里的内容，可在元素上添加<code>data-title</code>来代替</td>
            <td>String | Html</td>
            <td>Plase add title</td>
            <td>--</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>出现方位,当位置不够时，会出现在合适的位置</td>
            <td>String</td>
            <td>top</td>
            <td><code>top</code><code>bottom</code><code>left</code><code>right</code><code>topLeft</code><code>topRight</code><code>bottomLeft</code>
              <br>
              <code>bottomRight</code><code>leftTop</code><code>leftBottom</code><code>rightTop</code><code>rightBottom</code></td>
          </tr>
          <tr>
            <td>offset</td>
            <td>偏移量，tooltip距离元素的距离</td>
            <td>Number</td>
            <td>10</td>
            <td>--</td>
          </tr>
          <tr>
            <td>delay</td>
            <td>延迟消失时间</td>
            <td>Number</td>
            <td>0</td>
            <td>--</td>
          </tr>
          <tr>
            <td>container</td>
            <td>
              tooltip的父容器，可在元素上添加<code>data-container</code>来代替, <br>
              如果值为<code>false</code>，则父容器为该元素
            </td>
            <td>false | String</td>
            <td>docment.body</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
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
