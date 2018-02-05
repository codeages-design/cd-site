<template>
  <div class="grid-page">
    <div class="site-content-title">栅格</div>
    <div class="site-content-des">
      
    </div>
    <x-panel :code="code.grid_base|trim">
      <span slot="title">
        基础
      </span>
      <div slot="code">
        <pre v-highlightjs><code class="html">
          {{ code.grid_base }}
        </code></pre>
      </div>
      <div class="cd-mb16" slot="style" v-html="code.grid_base">
      </div>
      <div class="" slot="dec">
       
      </div>
    </x-panel>
    <x-panel :code="code.grid_offset|trim">
      <span slot="title">
        偏移
      </span>
      <div slot="code">
        <pre v-highlightjs><code class="html">
          {{ code.grid_offset }}
        </code></pre>
      </div>
      <div class="cd-mb16" slot="style" v-html="code.grid_offset">
      </div>
      <div class="" slot="dec">
       
      </div>
    </x-panel>
    <x-panel :code="code.grid_responsive|trim">
      <span slot="title">
        响应式
      </span>
      <div slot="code">
        <pre v-highlightjs><code class="html">
          {{ code.grid_responsive }}
        </code></pre>
      </div>
      <div class="cd-mb16" slot="style" v-html="code.grid_responsive">
      </div>
      <div class="" slot="dec">
       
      </div>
    </x-panel>

    <x-panel :code="code.grid_flex|trim">
      <span slot="title">
        Flex布局
      </span>
      <div slot="code">
        <pre v-highlightjs><code class="html">
          {{ code.grid_flex }}
        </code></pre>
      </div>
      <div class="cd-mb16" slot="style" v-html="code.grid_flex">
      </div>
      <div class="" slot="dec">
       
      </div>
    </x-panel>
  </div>
</template>

<script>
import * as code from './grid';
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
.grid-page {
  .cd-bg {
    padding: 16px;
    text-align: center;
  }
  [class^="cd-md"] {
    margin-bottom: 24px;
  }
}
</style>
