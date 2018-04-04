w<template>
  <div class="tag-page">
    <div class="site-content-title">常用工具类</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.tools_text_color|trim">
          <span slot="title">
            文字颜色类
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tools_text_color }}
            </code></pre>
          </div>
          <div slot="style">
            <span class="cd-dark-major">深色系主要文本</span><br><br>
            <span class="cd-dark-minor">深色系次要文本</span><br><br>
            <span class="cd-dark-assist">深色系辅助文本</span><br><br>
            <div style="background-color: #313131; padding: 5px; display:inline-block">
              <span class="cd-light-major">淡色系主要文本</span><br><br>
              <span class="cd-light-minor">淡色系次要文本</span><br><br>
              <span class="cd-light-assist">淡色系辅助文本</span>
            </div>
          </div>
          <div class="" slot="dec">
            
          </div>
        </x-panel>
        <x-panel :code="code.tools_spacing|trim">
          <span slot="title">
            间距类
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tools_spacing }}
            </code></pre>
          </div>
          <div slot="style" >
            <pre v-highlightjs><code class="html">
              {{ code.tools_spacing_example }}
            </code></pre>
          </div>
          <div class="" slot="dec">
            注：上面的<code class="code">*</code>可替换为
            <code class="code">0</code>
            <code class="code">8</code>
            <code class="code">16</code>
            <code class="code">24</code>
            <code class="code">32</code>
            <code class="code">40</code>，分为对应
            <code class="code">0px</code>
            <code class="code">8px</code>
            <code class="code">16px</code>
            <code class="code">24px</code>
            <code class="code">32px</code>
            <code class="code">40px</code>
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.tools_text_size|trim">
          <span slot="title">
            文字大小类
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tools_text_size }}
            </code></pre>
          </div>
          <div slot="style" >
            <span class="cd-text-xxxlg">超超超大号文本</span><br><br>
            <span class="cd-text-xxlg">超超大号文本</span><br><br>
            <span class="cd-text-xlg">超大号文本</span><br><br>
            <span class="cd-text-lg">大号文本</span><br><br>
            <span class="cd-text-md">正常文本</span><br><br>
            <span class="cd-text-sm">小号文本</span>
          </div>
          <div class="" slot="dec">
            
          </div>
        </x-panel>
        <x-panel :code="code.tools_link|trim">
          <span slot="title">
            链接类
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.tools_link }}
            </code></pre>
          </div>
          <div slot="style">
            <a href="javascript:;" class="cd-link-major">主要文本链接</a><br><br>
            <a href="javascript:;" class="cd-link-minor">次要文本链接</a><br><br>
            <a href="javascript:;" class="cd-link-assist">辅助文本链接</a>
          </div>
          <div class="" slot="dec">
            
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './tools';
import XPanel from '@/components/panel.vue';
import XApiTable from '@/components/api-table.vue';

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
