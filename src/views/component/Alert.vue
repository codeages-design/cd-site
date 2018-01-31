<template>
  <div>
    <div class="site-content-title">提示框</div>
    <div class="site-content-des">提示框的作用是在页面级别的交互反馈中用以给用户展示场景信息，大部分情况下，提示框都应该是固定在某个具体位置不主动消失。</div>
    <div class="cd-row">
      <div class="cd-xs-12">
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
      <div class="cd-xs-12">
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
    <x-api-table 
      :code="code.alert_api" 
      :attrData="attrData" 
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './alert';
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
];

const hookData = [
  {
    name: 'close',
    dec: '关闭后触发的钩子',
    callback: '--',
    args: 'args1: $alert，被绑定的Dom元素的jquery对象'
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
  mounted() {
    cd.alert({
      el: '.js-cd-alert',
    }).on('close', () => {
      console.log('这是关闭后的回调函数');
    })
  }
}
</script>
