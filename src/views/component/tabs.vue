<template>
  <div>
    <div class="site-content-title">标签页</div>
    <div class="site-content-des">
      标签页是最为常见的用来对页面级别内容作信息架构分割梳理的组件。
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.tabs_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tabs_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.tabs_base"></div>
          <div class="" slot="dec">
            
          </div>
        </x-panel>
        <x-panel :code="code.tabs_ajax|trim">
          <span slot="title">
            异步加载
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tabs_ajax }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.tabs_ajax"></div>
          <div class="" slot="dec">
            
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.tabs_switch|trim">
          <span slot="title">
            带切换效果
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tabs_switch }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.tabs_switch"></div>
          <div class="" slot="dec">
            
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.tabs_api" 
      :dataApiData="dataApiData" 
      :attrData="attrData" 
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './tabs';
import XPanel from '@/components/panel.vue';
import XApiTable from '@/components/api-table.vue';
import '@/api/mock';

const dataApiData = [
  {
    name: 'data-toggle',
    dec: '触发JS的属性',
    type: 'String',
    value: 'cd-tabs'
  },
  {
    name: 'data-target',
    dec: '对应的dom元素',
    type: 'String',
    value: '--'
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
    name: 'url',
    dec: 'ajax请求的路由',
    type: 'String',
    value: '无',
    optional: '--'
  },
  {
    name: 'isLoading',
    dec: 'ajax时是否添加loading效果',
    type: 'Boolean',
    value: 'false',
    optional: '--'
  },
  {
    name: 'target',
    dec: 'ajax内容存放的目标Dom元素',
    type: 'String',
    value: '无',
    optional: '--'
  }
];

const hookData = [
  {
    name: 'success',
    dec: 'ajax成功后触发的钩子',
    callback: '--',
    args: 'args1: response, ajax返回的数据'
  },
  {
    name: 'error',
    dec: 'ajax失败后触发的钩子',
    callback: '--',
    args: 'args1: response, ajax返回的错误信息'
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
    cd.tabs({
      el: '#cd-tabs a',
      target: '#tabs-panel',
      url: '/demo/tabs/1',
    }).on('success', (res) => {
      let jsonRes = JSON.parse(res);
      $('#tabs-panel').html(jsonRes.message + jsonRes.id);
    }).on('error', (res) => {
      console.log('error', res);
    })
  }
}
</script>

<style lang="less">

</style>
