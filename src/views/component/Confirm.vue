<template>
  <div>
    <div class="site-content-title">确认框</div>
    <div class="site-content-des">确认框的描述</div>
    <x-panel :code="code.confirm_api|trim">
      <div slot="title">
        基础
      </div>
      <div slot="code">
        <pre v-highlightjs><code class="js">
          {{ code.confirm_api }}
        </code></pre>
      </div>
      <div class="cd-mb16" slot="style">
        <button class="cd-btn cd-btn-ghost-default" id="cofirm-btn" @click="onConfirm">点击触发</button>
      </div>
      <div class="cd-text-xs" slot="dec">
        描述
      </div>
    </x-panel>

    <x-api-table 
      :code="code.confirm_api" 
      :attrData="attrData"
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './confirm';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const attrData = [
  {
    name: 'title',
    dec: '标题',
    type: 'String',
    value: '无',
    optional: '--'
  },
  {
    name: 'content',
    dec: '主体内容',
    type: 'String',
    value: '无',
    optional: '--'
  },
  {
    name: 'okText',
    dec: '确定按钮的文本',
    type: 'String',
    value: 'Confirm',
    optional: '--'
  },
  {
    name: 'cancelText',
    dec: '取消按钮的文本',
    type: 'String',
    value: 'Cancel',
    optional: '--'
  },
  {
    name: 'className',
    dec: '自定义组件的Class',
    type: 'String',
    value: '无',
    optional: '--'
  },
];

const hookData = [
  {
    name: 'ok',
    dec: '确定后触发的钩子',
    callback: '--',
    args: '无'
  },
  {
    name: 'cancel',
    dec: '取消后触发的钩子',
    callback: '--',
    args: '无'
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
      attrData,
      hookData
    }
  },
  methods: {
    onConfirm() {
      cd.confirm({
        title: '标题',
        content: '确定要这么做吗？',
        okText: '确定',
        cancelText: '取消',
        className: '',
      }).on('ok', () => {
        console.log('点击确定按钮后的回调函数');
      }).on('cancel', () => {
        console.log('点击取消按钮后的回调函数');
      })
    }
  },
  mounted() {
  }
}
</script>
