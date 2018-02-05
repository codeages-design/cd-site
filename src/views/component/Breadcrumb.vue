<template>
  <div>
    <div class="site-content-title">面包屑</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.breadcrumb_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.breadcrumb_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.breadcrumb_base"></div>
          <div class="" slot="dec">
           
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.breadcrumb_nobg|trim">
          <span slot="title">
            无背景色
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.breadcrumb_nobg }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.breadcrumb_nobg"></div>
          <div class="" slot="dec">
           
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './breadcrumb';
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
}
</script>