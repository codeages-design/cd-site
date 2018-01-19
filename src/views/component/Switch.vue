<template>
  <div class="switch-page">
    <div class="site-content-title">开关</div>
    <div class="site-content-des">
      开关组件主要用于设置场景，用来控制某个逻辑的开启与关闭，切勿采用 Radio 来代替开关的交互角色。
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.switch_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.switch_base }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style">
            <div class="col-xs-8" v-html="code.switch_base"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.switch_disabled|trim">
          <span slot="title">
            禁用
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.switch_disabled }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style">
            <div class="col-xs-8" v-html="code.switch_disabled"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.switch_api" 
      :dataApiData="dataApiData" 
      :attrData="attrData" 
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './switch';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const dataApiData = [
  {
    name: 'data-toggle',
    dec: '触发JS的属性',
    type: 'String',
    value: 'cd-switch'
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
  mounted() {
    
  },
  methods: {
  }
}
</script>

<style lang="less">
.switch-page .cd-switch {
  margin-right: 16px;
}
</style>
