<template>
  <div>
    <div class="site-content-title">设置</div>
    <div class="site-content-des">
      设置描述
    </div>
    <x-panel :code="code.setting_base|trim">
      <span slot="title">
        基础
      </span>
      <div slot="code">
        <pre v-highlightjs><code class="html">
          {{ code.setting_base }}
        </code></pre>
      </div>
      <div class="cd-row cd-mb16" slot="style">
        <div class="col-xs-8" v-html="code.setting_base"></div>
      </div>
      <div class="cd-text-xs" slot="dec">
      </div>
    </x-panel>
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
