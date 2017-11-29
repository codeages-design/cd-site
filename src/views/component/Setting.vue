<template>
  <div>
    <div class="site-content-title">设置</div>
    <div class="site-content-des">
      设置描述
    </div>
    <div class="cd-row">
      <div class="col-xs-8">
        <x-panel :code="code.setting_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.setting_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.setting_base">
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="col-xs-4">
        <x-panel :code="code.setting_status|trim">
          <span slot="title">
            设置状态
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.setting_status }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.setting_status">
          </div>
          <div class="cd-text-xs" slot="dec">
            设置状态可单独使用
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './setting';
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

</style>
