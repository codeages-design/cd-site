<template>
  <div>
    <div class="site-content-title">进度条</div>
    <div class="site-content-des">
      进度条主要用来动态呈现数据进度，目前使用到的以线性进度条最为常见。
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.progress_base|trim">
          <span slot="title">
            基础进度条
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.progress_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.progress_base"></div>
          <div class="cd-text-xs" slot="dec">
              
          </div>
        </x-panel>
        <x-panel :code="code.progress_min|trim">
          <span slot="title">
            进度条尺寸
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.progress_min }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.progress_min"></div>
          <div class="cd-text-xs" slot="dec">
            为了防止数字看不清，可以设置最小值
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.progress_color|trim">
          <span slot="title">
            场景进度条
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.progress_color }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.progress_color"></div>
          <div class="cd-text-xs" slot="dec">
              
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './progress';
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
