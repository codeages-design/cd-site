<template>
  <div>
    <div class="site-content-title">模态框</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
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
            <button class="cd-btn cd-btn-primary" type="button" @click="modal">基础模态框</button>
          </div>
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.modal_api }}
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
            <td>要绑定的Dom元素</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>ajax</td>
            <td>是否是ajax加载数据</td>
            <td>Boolean</td>
            <td>false</td>
            <td>--</td>
          </tr>
          <tr>
            <td>url</td>
            <td>如果是ajax加载数据，填充url</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>cancel</td>
            <td>关闭后的回调函数</td>
            <td>Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>ok</td>
            <td>确定后的回调函数</td>
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
import * as code from './modal';
import XPanel from '@/components/Panel';

export default {
  components: {
    XPanel,
  },
  data() {
    return {
      code,
    }
  },
  methods: {
    modal() {
      cd.modal({
        el: '#cd-modal',
        ok(event, $modal, modal) {
          modal.rmModal();
        }
      })
    }
  }
}
</script>