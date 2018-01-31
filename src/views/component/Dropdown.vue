<template>
  <div class="dropdown-page">
    <div class="site-content-title">下拉菜单</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.dropdown_base|trim">
          <span slot="title">
           基础下拉
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.dropdown_base }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style" >
            <div class="col-xs-8" v-html="code.dropdown_base"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
        <x-panel :code="code.dropdown_placement|trim">
          <span slot="title">
            对齐方位
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.dropdown_placement }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style" >
            <div class="col-xs-8" v-html="code.dropdown_placement"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.dropdown_click|trim">
          <span slot="title">
            点击下拉
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.dropdown_click }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style" >
            <div class="col-xs-8" v-html="code.dropdown_click"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.dropdown_api" 
      :dataApiData="dataApiData" 
      :attrData="attrData" 
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './dropdown';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const dataApiData = [
  {
    name: 'data-toggle',
    dec: '触发JS的属性',
    type: 'String',
    value: 'cd-dropdown'
  },
  {
    name: 'data-trigger',
    dec: '触发方式',
    type: 'click',
    value: '<code>click</code> <code>hover</code>'
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
  {
    name: 'trigger',
    dec: '触发方式',
    type: 'String',
    value: 'click',
    optional: '--'
  },
];

const hookData = [
  {
    name: 'show',
    dec: '显示下拉菜单后触发的钩子',
    callback: '--',
    args: '无'
  },
  {
    name: 'hide',
    dec: '隐藏下拉菜单后触发的钩子',
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
      dataApiData,
      attrData,
      hookData
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="less">
.dropdown-page {
  .cd-dropdown {
    margin-right: 16px;
  }
}
</style>
