<template>
  <div>
    <div class="site-content-title">模态框</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.modal_base|trim">
          <span slot="title">
            基础模态框
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.modal_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-ghost-default" type="button" @click="modal">基础模态框</button>
          </div>
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.modal_api" 
      :attrData="attrData"
      :eventData="eventData"
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './modal';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const attrData = [
  {
    name: 'el',
    dec: '要绑定的Dom元素',
    type: 'String',
    value: '无',
    optional: '--'
  },
  {
    name: 'ajax',
    dec: '是否用ajax渲染模态框内容',
    type: 'Boolean',
    value: 'false',
    optional: '--'
  },
  {
    name: 'url',
    dec: '如果用ajax渲染模态框内容，则添加请求的路由',
    type: 'String',
    value: '无',
    optional: '--'
  },
  {
    name: 'maskClosable',
    dec: '是否可以通过点击遮罩关闭模态框',
    type: 'Boolean',
    value: 'true',
    optional: '--'
  },
];

const hookData = [
  {
    name: 'ok',
    dec: '点击确定按钮后触发的钩子',
    callback: '--',
    args: 'args1: $modal，当前模态框的jquery对象，args2: this，当前组件的上下文'
  },
  {
    name: 'cancel',
    dec: '点击取消按钮后触发的钩子',
    callback: '--',
    args: 'args1: $modal，当前模态框的jquery对象，args2: this，当前组件的上下文'
  },
];

const eventData = [
  {
    name: 'close',
    dec: '关闭模态框',
    callback: '无',
    args: '无',
  }
]

export default {
  components: {
    XPanel,
    XApiTable
  },
  data() {
    return {
      code,
      attrData,
      hookData,
      eventData
    }
  },
  methods: {
    modal() {
      cd.modal({
        el: '#cd-modal',
        ajax: false,
        url: '',
        maskClosable: true,
      }).on('ok', ($modal, modal) => {
        console.log('确定后的回调');
        modal.trigger('close');
      }).on('cancel', ($modal, modal) => {
        console.log('关闭后的回调');
      })
    }
  }
}
</script>