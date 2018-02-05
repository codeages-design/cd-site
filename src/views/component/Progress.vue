<template>
  <div>
    <div class="site-content-title">进度条</div>
    <div class="site-content-des">
      进度条主要用来动态呈现数据进度，目前使用到的以线性进度条最为常见。
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
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
          <div class="" slot="dec">
            基础进度条只采用主色调，并不包含不同数据进度的场景色变化，但是有成功和失败两种状态。
          </div>
        </x-panel>
        <x-panel :code="code.progress_active|trim">
          <span slot="title">
            动态进度条
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.progress_active }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.progress_active"></div>
          <div class="" slot="dec">
            动态进度条可以给用户以实时反馈，酌情使用。
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.progress_size|trim">
          <span slot="title">
            进度条尺寸
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.progress_size }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.progress_size"></div>
          <div class="" slot="dec">
            通过引入不同的进度条尺寸来适配不同使用场景。
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
