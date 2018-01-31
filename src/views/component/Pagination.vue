<template>
  <div>
    <div class="site-content-title">分页</div>
    <div class="site-content-des">
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.page_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.page_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.page_base"></div>
          <div class="cd-text-xs" slot="dec">
              
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './pagination';
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
