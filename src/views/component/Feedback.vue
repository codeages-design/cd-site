<template>
  <div>
    <div class="site-content-title">反馈</div>
    <div class="site-content-des">
      反馈描述
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.feedback_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.feedback_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.feedback_base"></div>
          <div class="cd-text-xs" slot="dec">
              
          </div>
        </x-panel>
        <x-panel :code="code.feedback_size|trim">
          <span slot="title">
            大小
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.feedback_size }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.feedback_size"></div>
          <div class="cd-text-xs" slot="dec">
              
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.feedback_color|trim">
          <span slot="title">
            颜色
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.feedback_color }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.feedback_color"></div>
          <div class="cd-text-xs" slot="dec">
              
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './feedback';
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
