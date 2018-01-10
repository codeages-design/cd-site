<template>
  <div>
    <div class="site-content-title">弹出框</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="col-xs-12">
        <x-panel :code="code.popover_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.popover_base }}
            </code></pre>
          </div>
          <div class="cd-mb16 site-example-popover" slot="style" v-html="code.popover_base">
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="col-xs-12">
        <x-panel :code="code.popover_type|trim">
          <span slot="title">
            触发方式
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.popover_type }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.popover_type">
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="col-xs-12">
        <x-panel :code="code.popover_api|trim">
          <span slot="title">
            多方位
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.popover_api }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <div style="margin-left: 60px; margin-bottom: 20px">
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in top left" data-content="popover content<br>popover content" data-placement="topLeft" style="width: 120px">topLeft</button>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in top center" data-content="popover content<br>popover content" data-placement="top" style="width: 120px">top</button>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in top right" data-content="popover content<br>popover content" data-placement="topRight" style="width: 120px">topRight</button>
            </div>
            <div style="width: 100px; float: left">
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in left top" data-content="popover content<br>popover content" data-placement="leftTop" style="width: 120px; margin-bottom:20px">leftTop</button>
              <br>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in left center" data-content="popover content<br>popover content" data-placement="left" style="width: 120px; margin-bottom:20px">left</button>
              <br>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in left bottom" data-content="popover content<br>popover content" data-placement="leftBottom" style="width: 120px; margin-bottom:20px">leftBottom</button>
            </div>
            <div style="width: 100px; margin-left: 368px">
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in right top" data-content="popover content<br>popover content" data-placement="rightTop" style="width: 120px; margin-bottom:20px">rightTop</button>
              <br>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in right center" data-content="popover content<br>popover content" data-placement="right" style="width: 120px; margin-bottom:20px">right</button>
              <br>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in right bottom" data-content="popover content<br>popover content" data-placement="rightBottom" style="width: 120px; margin-bottom:20px">rightBottom</button>
            </div>
            <div style="margin-left: 60px;">
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in bottom center" data-content="popover content<br>popover content" data-placement="bottomLeft" style="width: 120px">bottomLeft</button>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in bottom center" data-content="popover content<br>popover content" data-placement="bottom" style="width: 120px">bottom</button>
              <button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-title="popover in bottom center" data-content="popover content<br>popover content" data-placement="bottomRight" style="width: 120px">bottomRight</button>
            </div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.popover_api }}
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
            <td>'[data-toggle="cd-popover"]'</td>
            <td>--</td>
          </tr>
          <tr>
            <td>trigger</td>
            <td>触发方式；可在元素上添加<code>data-trigger</code>来代替</td>
            <td>String</td>
            <td>hover</td>
            <td>hover、click</td>
          </tr>
          <tr>
            <td>title</td>
            <td>popover里的标题；可在元素上添加<code>data-title</code>来代替</td>
            <td>String | Html</td>
            <td>plase add title</td>
            <td>--</td>
          </tr>
          <tr>
            <td>content</td>
            <td>popover里的内容；可在元素上添加<code>data-content</code>来代替</td>
            <td>String | Html</td>
            <td>plase add content</td>
            <td>--</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>出现方位,当位置不够时，会出现在合适的位置；可在元素上添加<code>data-placement</code>来代替</td>
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
import * as code from './popover';
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
    cd.popover({
      el: '[data-toggle="cd-popover"]',
      type: 'popover',
      title: '123123'
    });
  },
  methods: {
  }
}
</script>

<style lang="less">
.site-example-popover {
  background: #f5f5f5;
}
.site-example-popover .cd-popover {
  position: relative;
  display: inline-block;
  margin: 10px 20px;
  opacity: 1;
}
</style>
