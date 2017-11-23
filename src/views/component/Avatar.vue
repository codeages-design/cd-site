<template>
  <div class="compontent-alert">
    <div class="site-content-title">头像</div>
    <div class="site-content-des">
      通过头像能够快速识别用户，并且给某些特定场景提供足够的丰富度。
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
            通过头像能够快速识别用户，并且给某些特定场景提供足够的丰富度。
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.avatar_square|trim">
          <span slot="title">
            矩形头像
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.avatar_square }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.avatar_square"></div>
          <div class="cd-text-xs" slot="dec">
            矩形头像一般在对排版有特殊要求的情况下才会使用，相对而言更为规整。
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
.cd-avatar + .cd-avatar {
  margin-left: 24px;
}
</style>
