<template>
  <div class="compontent-alert">
    <div class="site-content-title">头像</div>
    <div class="site-content-des">
      头像描述
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.avatar_circle|trim">
          <span slot="title">
            圆形头像
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.avatar_circle }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.avatar_circle"></div>
          <div class="cd-text-xs" slot="dec">
            在大部分场景下，我们采用通用按钮的样式，而且在同一按钮组中，能且只能存在一个主要按钮，从而与默认按钮区分交互权重。
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.avatar_square|trim">
          <span slot="title">
            方形头像
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.avatar_square }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.avatar_square"></div>
          <div class="cd-text-xs" slot="dec">
            在大部分场景下，我们采用通用按钮的样式，而且在同一按钮组中，能且只能存在一个主要按钮，从而与默认按钮区分交互权重。
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './avatar';
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
