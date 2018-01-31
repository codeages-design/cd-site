<template>
  <div>
    <div class="site-content-title">步骤条</div>
    <div class="site-content-des">
    </div>
    <x-panel :code="code.steps_base|trim">
      <span slot="title">
        基础
      </span>
      <div slot="code">
        <pre v-highlightjs><code class="html">
          {{ code.steps_base }}
        </code></pre>
      </div>
      <div class="cd-mb16" slot="style" v-html="code.steps_base"></div>
      <div class="cd-text-xs" slot="dec">
      </div>
    </x-panel>
  </div>
</template>

<script>
import * as code from './steps';
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
