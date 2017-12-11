<template>
  <div>
    <div class="site-content-title">选择器</div>
    <div class="site-content-des">
      选择器描述
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.select_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.select_base }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style">
            <div class="col-xs-8" v-html="code.select_base"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './select';
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
