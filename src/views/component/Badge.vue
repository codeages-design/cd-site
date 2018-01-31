<template>
  <div>
    <div class="site-content-title">徽标数</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.badge_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.badge_base }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style">
            <div class="col-xs-8" v-html="code.badge_base"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './badge';
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
