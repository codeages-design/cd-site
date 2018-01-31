<template>
  <div class="tag-page">
    <div class="site-content-title">标签</div>
    <div class="site-content-des">
      标签主要用来标注某个对象在特定维度的不同属性，这种属性应该尽量脱离场景本身，通过颜色的多样性进行区分，所以在标签组件中，我们引入了更多颜色。
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.tag_type|trim">
          <span slot="title">
            标签种类
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tag_type }}
            </code></pre>
          </div>
          <div slot="style" v-html="code.tag_type"></div>
          <div class="cd-text-xs" slot="dec">
            标签主要包含两种类型，一种是静态标签，一种是可关闭标签，酌情使用。
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.tag_color|trim">
          <span slot="title">
            标签颜色
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tag_color }}
            </code></pre>
          </div>
          <div slot="style">
            <span class="cd-tag cd-tag-default">默认标签</span><span class="cd-tag cd-tag-green">绿色标签</span><span class="cd-tag cd-tag-red">红色标签</span><span class="cd-tag cd-tag-orange">橙色标签</span>
            <br>
            <span class="cd-tag cd-tag-blue">蓝色标签</span><span class="cd-tag cd-tag-purple">紫色标签</span><span class="cd-tag cd-tag-pink">粉色标签</span><span class="cd-tag cd-tag-yellow">黄色标签</span>
          </div>
          <div class="cd-text-xs" slot="dec">
            标签更多的是作为一种属性使用，通过颜色的区分增加多样性，尽量不要将标签的颜色作为状态场景色来使用。
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table :code="code.tag_api" :attrData="attrData" :hookData="hookData"></x-api-table>
  </div>
</template>

<script>
import * as code from './tag';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const attrData = [
  {
    name: 'el',
    dec: '要绑定的Dom元素',
    type: 'String',
    value: '无',
    optional: '--'
  },
];

const hookData = [
  {
    name: 'close',
    dec: '关闭tag后触发的钩子',
    callback: '--',
    args: 'args1: $tag，被绑定的Dom元素的jquery对象'
  }
];

export default {
  components: {
    XPanel,
    XApiTable
  },
  data() {
    return {
      code,
      attrData,
      hookData
    }
  },
  created() {
    cd.tag({
      el: '#cd-tag',
    }).on('close', ($close, $tag) => {
      console.log('tag', $close, $tag);
    });
  },
  methods: {
  }
}
</script>

<style lang="less">
.tag-page .cd-tag {
  margin-bottom: 16px;
  margin-right: 16px;
}
</style>
