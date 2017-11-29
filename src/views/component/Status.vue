<template>
  <div>
    <div class="site-content-title">状态</div>
    <div class="site-content-des">
      状态描述
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.status_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.status_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.status_base"></div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './status';
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
