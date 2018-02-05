<template>
  <div class="message-page">
    <div class="site-content-title">信息框</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.message_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="js">
              {{ code.message_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-ghost-default" @click="oninfoType">普通信息</button>
          </div>
          <div class="" slot="dec">
          </div>
        </x-panel>
        <x-panel :code="code.message_action|trim">
          <span slot="title">
            带操作的
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="js">
              {{ code.message_action }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-ghost-default" @click="onAction">带操作的</button>
          </div>
          <div class="" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.message_type|trim">
          <span slot="title">
            信息框类型
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="js">
              {{ code.message_type }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-ghost-default" @click="onSuccessType">成功信息</button><button class="cd-btn cd-btn-ghost-default" @click="onWarningType">警告信息</button><button class="cd-btn cd-btn-ghost-default" @click="onDangerType">危险信息</button>
          </div>
          <div class="" slot="dec">
          </div>
        </x-panel>
        <x-panel :code="code.message_delay|trim">
          <span slot="title">
            修改延迟
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="js">
              {{ code.message_delay }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-ghost-default" @click="onDelay">延迟10秒</button>
          </div>
          <div class="" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.message_api" 
      :attrData="attrData" 
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './message';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const attrData = [
  {
    name: 'type',
    dec: '信息类型',
    type: 'String',
    value: '无',
    optional: '<code>danger</code> <code>success</code> <code>info</code> <code>warning</code>'
  },
  {
    name: 'message',
    dec: '信息主体',
    type: 'String',
    value: '无',
    optional: '--'
  },
  {
    name: 'action',
    dec: `操作，属数有：<code>title</code> <code>url</code> <code>template</code>；
      可通过<code>template</code>自定义html操作模版，也可以通过<code>title</code> <code>url</code>添加要链接文本及链接地址`,
    type: 'Object',
    value: '无',
    optional: '--'
  },
  {
    name: 'action.title',
    dec: `链接文本`,
    type: 'String',
    value: '无',
    optional: '--'
  },
  {
    name: 'action.url',
    dec: `链接地址`,
    type: 'String',
    value: '无',
    optional: '--'
  },
  {
    name: 'action.template',
    dec: `自定义模版`,
    type: 'String|Html',
    value: '无',
    optional: '--'
  },
  {
    name: 'delay',
    dec: '延迟，默认延迟3秒后关闭',
    type: 'Number',
    value: '3000',
    optional: '--'
  },
  {
    name: 'offset',
    dec: '偏移，信息框出现的位置距离顶部的距离',
    type: 'Number',
    value: '80',
    optional: '--'
  },
  {
    name: 'zIndex',
    dec: 'z轴层级',
    type: 'Number',
    value: '9999',
    optional: '--'
  },
  { 
    name: 'animate',
    dec: '动画',
    type: 'Object',
    value: '',
    optional: '--'
  },
  { 
    name: 'animate.enter',
    dec: '入场动画',
    type: 'String',
    value: '<code>cd-animated cd-fadeInDownSmall</code>',
    optional: '--'
  },
  { 
    name: 'animate.exit',
    dec: '退场动画',
    type: 'String',
    value: '<code>cd-animated cd-fadeOutUp</code>',
    optional: '--'
  }
];

const hookData = [
  {
    name: 'close',
    dec: '关闭后触发的钩子',
    callback: '--',
    args: '无'
  }
];

export default {
  components: {
    XPanel,
    XApiTable
  },
  data() {
    return {
      code,
      attrData,
      hookData
    }
  },
  methods: {
    oninfoType() {
      cd.message({
        type: 'info',
        message: '这是普通信息。'
      });
    },
    onDangerType() {
      cd.message({
        type: 'danger',
        message: '这是危险信息。',
      })
    },
    onSuccessType() {
      cd.message({
        type: 'success',
        message: '这是成功信息。',
      })
    },
    onWarningType() {
      cd.message({
        type: 'warning',
        message: '这是警告信息。',
      })
    },
    onAction() {
      cd.message({
        type: 'info',
        message: '这是普通信息。',
        action: {
          title: '操作',
          href: '#'
        }
      });
    },
    onDelay() {
      cd.message({
        type: 'info',
        message: '这是延迟10秒的信息。',
        delay: '10000'
      });
    }
  }
}
</script>

<style lang="less">
.message-page .cd-btn {
  margin-right: 16px;
}
</style>
