<template>
  <div class="compontent-alert">
    <div class="site-content-title">卡片</div>
    <div class="site-content-des">
      你可以把卡片理解成一张空白的容器，在这里你可以装入任何你想要装入的界面元素，卡片并没有严格意义上内容与容器的间距限制。
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.card_base|trim">
          <span slot="title">
            图文卡片
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.card_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.card_base"></div>
          <div class="cd-text-xs" slot="dec">
            卡片内容并没有规定固定的结构，通过不同的内容布局可以达到各种灵活的业务诉求。  
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.card_cover|trim">
          <span slot="title">
            文字覆盖图片卡片
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.card_cover }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.card_cover"></div>
          <div class="cd-text-xs" slot="dec">
            卡片内容并没有规定固定的结构，通过不同的图文混排可以达到各种灵活的业务诉求。
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './card';
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
.cd-card {
  max-width: 320px;
}
</style>
