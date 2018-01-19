<template>
  <div>
    <div class="site-content-title">选择器</div>
    <div class="site-content-des">
      选择器描述
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.select_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.select_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <div style="width: 200px;" v-html="code.select_base"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.select_multi|trim">
          <span slot="title">
            多选
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.select_multi }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <div style="width: 200px;" v-html="code.select_multi"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.select_api" 
      :attrData="attrData" 
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './select';
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
    name: 'type',
    dec: '选择器的类型',
    type: 'String',
    value: 'single',
    optional: '<code>single</code> <code>multi</code>'
  }
];

const hookData = [
  {
    name: 'change',
    dec: '修改选项后触发的钩子',
    callback: '--',
    args: 'args1: value，选择器选中的值'
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
  created() {
    
  },
  mounted() {
    cd.select({
      el: '#select-single',
    }).on('change', (value) => {
      console.log('single', value);
    });

    cd.select({
      el: '#select-multi',
      type: 'multi'
    }).on('change', (value) => {
      console.log('multi', value);
    });
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
