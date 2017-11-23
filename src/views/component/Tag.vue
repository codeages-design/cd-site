<template>
  <div>
    <div class="site-content-title">标签</div>
    <div class="site-content-des">
      标签主要用来标注某个对象在特定维度的不同属性，这种属性应该尽量脱离场景本身，通过颜色的多样性进行区分，所以在标签组件中，我们引入了更多颜色。
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
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
      <div class="col-xs-6">
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
            <span class="cd-tag cd-tag-green">绿色标签</span>
            <span class="cd-tag cd-tag-red">红色标签</span>
            <span class="cd-tag cd-tag-orange">橙色标签</span>
            <br>
            <span class="cd-tag cd-tag-blue">蓝色标签</span>
            <span class="cd-tag cd-tag-purple">紫色标签</span>
            <span class="cd-tag cd-tag-pink">粉色标签</span>
          </div>
          <div class="cd-text-xs" slot="dec">
            标签更多的是作为一种属性使用，通过颜色的区分增加多样性，尽量不要将标签的颜色作为状态场景色来使用。
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.tag_api }}
    </code></pre>
    <div class="cd-table-responsive">
      <table class="cd-table">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>closeEl</td>
            <td>要绑定的关闭Dom元素</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>close</td>
            <td>关闭标签后的回调方法</td>
            <td>Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as code from './tag';
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
  created() {
    cd.tag({
      closeEl: '#tag-close',
      close() {
        console.log('这是关闭后的回调函数');
      }
    })
  },
  methods: {
  }
}
</script>

<style lang="less">
.cd-tag {
  margin-bottom: 24px;
  + .cd-tag {
    margin-left: 24px;
  }
}
</style>
