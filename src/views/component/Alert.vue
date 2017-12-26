<template>
  <div>
    <div class="site-content-title">提示框</div>
    <div class="site-content-des">提示框的作用是在页面级别的交互反馈中用以给用户展示场景信息，大部分情况下，提示框都应该是固定在某个具体位置不主动消失。</div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.alert_color|trim">
          <div slot="title">
            场景提示框
          </div>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.alert_color }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.alert_color"></div>
          <div class="cd-text-xs" slot="dec">
            我们将场景色引入了提示框中，为的是让用户通过场景色能够快速感知提示框可能带来的内容定义。通过成功提示框、错误提示框、警告提示框、信息提示框来区分不同场景下的信息提示。
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.alert_close|trim">
          <div slot="title">
            可关闭提示框
          </div>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.alert_close }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.alert_close">
          </div>
          <div class="cd-text-xs" slot="dec">
            在一些偏向营销的提示框场景下，我们应该给用户以关闭“碍眼的提示信息”的权利。
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.alert_api }}
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
          <tr>
            <td>close</td>
            <td>关闭提示框后的回调方法</td>
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
      closeEl: '#alert-close',
      close() {
        console.log('这是关闭后的回调函数');
      }
    })
  }
}
</script>
