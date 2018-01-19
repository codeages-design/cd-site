<template>
  <div>
    <div class="site-content-title">单选框</div>
    <div class="site-content-des">
      单选框主要用于单项设置逻辑的选择，一次只能选择一个值，切勿将单选框用于是非逻辑的切换。
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.radio_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.radio_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.radio_base"></div>
          <div class="cd-text-xs" slot="dec">
            单选框同组可以根据实际业务需求设定个数，但一次只能选中一个值。
          </div>
        </x-panel>
        <x-panel :code="code.radio_size|trim">
          <span slot="title">
            大小
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.radio_size }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.radio_size"></div>
          <div class="cd-text-xs" slot="dec">
            小尺寸单选框在一些特定的对空间有较大要求的场景下可以选择性使用。
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.radio_disabled|trim">
          <span slot="title">
            禁用
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.radio_disabled }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.radio_disabled"></div>
          <div class="cd-text-xs" slot="dec">
            在禁用单选框的情况下，不应该产生任何样式上的交互反馈。
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.radio_api" 
      :dataApiData="dataApiData" 
      :attrData="attrData" 
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './radio';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const dataApiData = [
  {
    name: 'data-toggle',
    dec: '触发JS的属性',
    type: 'String',
    value: 'cd-radio'
  }
];

const attrData = [
  {
    name: 'el',
    dec: '要绑定的Dom元素',
    type: 'String',
    value: '无',
    optional: '--'
  },
];

const hookData = [
  {
    name: 'click',
    dec: '点击后触发的钩子',
    callback: '--',
    args: 'args1: $item，被点击元素的jquery对象'
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
      dataApiData,
      attrData,
      hookData
    }
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
