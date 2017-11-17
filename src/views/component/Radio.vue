<template>
  <div class="compontent-alert">
    <div class="site-content-title">单选框</div>
    <div class="site-content-des">
      单选框描述
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.radio_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.radio_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.radio_base"></div>
          <div class="cd-text-xs" slot="dec">
            在大部分场景下，我们采用通用按钮的样式，而且在同一按钮组中，能且只能存在一个主要按钮，从而与默认按钮区分交互权重。
          </div>
        </x-panel>
        <x-panel :code="code.radio_disabled|trim">
          <span slot="title">
            禁用
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.radio_disabled }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.radio_disabled"></div>
          <div class="cd-text-xs" slot="dec">
            在大部分场景下，我们采用通用按钮的样式，而且在同一按钮组中，能且只能存在一个主要按钮，从而与默认按钮区分交互权重。
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './radio';
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
