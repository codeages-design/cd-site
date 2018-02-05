<template>
  <div>
    <div class="site-content-title">弹出框</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="cd-xs-24">
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
          <div class="" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-24">
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
          <div class="" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-24">
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
          <div class="" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.popover_api" 
      :attrData="attrData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './popover';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const attrData = [
  {
    name: 'el',
    dec: '要绑定的Dom元素',
    type: 'String',
    value: '[data-toggle="cd-popover"]',
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
    dec: 'popover标题',
    type: 'String|Html',
    value: '无',
    optional: '--',
    data: 'data-title'
  },
  {
    name: 'content',
    dec: 'popover内容',
    type: 'String|Html',
    value: '无',
    optional: '--',
    data: 'data-content'
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
    dec: '偏移量，popover出现位置与触发元素之间的距离',
    type: 'Number',
    value: '10',
    optional: '--'
  },
  {
    name: 'delay',
    dec: '延迟，多少秒后出现popover',
    type: 'Number',
    value: '0',
    optional: '--'
  },
  {
    name: 'container',
    dec: `popover的父容器，可在元素上添加<code>data-container</code>来代替, <br>
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
