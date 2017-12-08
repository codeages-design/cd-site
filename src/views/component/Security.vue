<template>
  <div class="security-page">
    <div class="site-content-title">安全性</div>
    <div class="site-content-des">
      安全性描述
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.security_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.security_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.security_base">
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './security';
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
.security-page .cd-security {
  margin-bottom: 16px;
}
</style>
