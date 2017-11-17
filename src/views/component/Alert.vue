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
          <div class="cd-mb16" slot="style" v-html="code.alert_close"></div>
          <div class="cd-text-xs" slot="dec">
            针对可关闭的提示框的描述
          </div>
        </x-panel>
      </div>
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
  }
}
</script>
