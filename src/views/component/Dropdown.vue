<template>
  <div class="dropdown-page">
    <div class="site-content-title">下拉菜单</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
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
      <div class="col-xs-6">
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
    <div class="site-content-subtitle">
      API
    </div>
    <pre v-highlightjs><code class="js">
      {{ code.dropdown_api }}
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
            <td>要绑定的dom元素</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>trigger</td>
            <td>触发方式</td>
            <td>String</td>
            <td>hover</td>
            <td><code>hover</code>、<code>click</code></td>
          </tr>
          <tr>
            <td>show</td>
            <td>下拉展开后的回调</td>
            <td>Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>hide</td>
            <td>下拉收起后的回调</td>
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
import * as code from './dropdown';
import XPanel from '@/components/Panel';

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
