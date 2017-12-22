<template>
  <div>
    <div class="site-content-title">标签页</div>
    <div class="site-content-des">
      标签页是最为常见的用来对页面级别内容作信息架构分割梳理的组件。
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
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
          <div class="cd-text-xs" slot="dec">
            
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
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
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
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.tabs_api }}
    </code></pre>
    <div class="cd-table-responsive">
      <table class="cd-table">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>el</td>
            <td>要绑定的元素</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>target</td>
            <td>要存放的内容元素</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>url</td>
            <td>初始化要请求的路由</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>success</td>
            <td>请求数据成功回调函数</td>
            <td>Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>error</td>
            <td>请求数据失败回调函数</td>
            <td>Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as code from './tabs';
import XPanel from '@/components/Panel';
import '@/mock';

export default {
  components: {
    XPanel
  },
  data() {
    return {
      code,
    }
  },
  methods: {
  },
  mounted() {
    cd.tabs({
      el: '.js-tabs',
      target: '#tabs-panel',
      url: '/demo/tabs/1',
      success(res) {
        let jsonRes = JSON.parse(res);
        $('#tabs-panel').html(jsonRes.message + jsonRes.id);
      },
      error(res) {

      }
    })
  }
}
</script>

<style lang="less">

</style>
