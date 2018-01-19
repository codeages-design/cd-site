<template>
  <div>
    <div class="site-content-title">多选框</div>
    <div class="site-content-des">
      多选框主要用于多项设置逻辑的选择，一次可以选择多个值。
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.checkbox_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.checkbox_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.checkbox_base">
          </div>
          <div class="cd-text-xs" slot="dec">
            最基础的 Checkbox 样式。
          </div>
        </x-panel>
        <x-panel :code="code.checkbox_disabled|trim">
          <span slot="title">
            禁用
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.checkbox_disabled }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.checkbox_disabled">
          </div>
          <div class="cd-text-xs" slot="dec">
            Checkbox 的禁用样式。
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.checkbox_group|trim">
          <span slot="title">
            组合
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.checkbox_group }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.checkbox_group">
          </div>
          <div class="cd-text-xs" slot="dec">
            多个 Checkbox 组合使用。
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.checkbox_api" 
      :dataApiData="dataApiData" 
      :attrData="attrData" 
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './checkbox';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const dataApiData = [
  {
    name: 'data-toggle',
    dec: '触发JS的属性',
    type: 'String',
    value: 'cd-checkbox'
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
    name: 'change',
    dec: '修改后触发的钩子',
    callback: '--',
    args: 'args1: value，选中的值'
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
