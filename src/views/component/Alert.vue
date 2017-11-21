<template>
  <div class="compontent-alert">
    <div class="site-content-title">提示框</div>
    <div class="site-content-des">提示框用于开始一个即时操作</div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.alert_color|trim">
          <div slot="title">
            提示框颜色
          </div>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.alert_color }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.alert_color"></div>
          <div class="cd-text-xs" slot="dec">
            针对提示框颜色的描述
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.alert_close|trim">
          <div slot="title">
            可关闭的提示框
          </div>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.alert_close }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <div class="cd-alert cd-alert-success">
              可关闭的提示框。
              <button type="button" class="close" id="alert-close">
                <i class="cd-icon cd-icon-close"></i>
              </button>
            </div>
          </div>
          <div class="cd-text-xs" slot="dec">
            针对可关闭的提示框的描述
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.alert_js }}
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
            <td>closeEl</td>
            <td>要绑定的关闭Dom元素</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cd-table-responsive">
      <table class="cd-table">
        <thead>
          <tr>
            <th>方法</th>
            <th>参数</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>close</td>
            <td>callback</td>
            <td>关闭alert，可添加回调</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as code from './alert';
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
  created() {
    cd.alert({
      closeEl: '#alert-close'
    }).close(() => {
      console.log('这是关闭后的回调函数');
    })
  }
}
</script>
