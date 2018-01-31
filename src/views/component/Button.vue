<template>
  <div class="button-page">
    <div class="site-content-title">按钮</div>
    <div class="site-content-des">
      按钮是用户界面中使用最为广泛且最为让用户接受和理解的通用组件之一，我们在 Codeages Design 中引入了多种不同的按钮样式以匹配不同的交互场景使用，我们不推崇使用太多的场景色来定义按钮，而是通过默认按钮和主要按钮的权重来定义操作主次。
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.button_base|trim">
          <span slot="title">
            通用按钮（Button）
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.button_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.button_base"></div>
          <div class="cd-text-xs" slot="dec">
            在大部分场景下，我们采用通用按钮的样式，而且在同一按钮组中，能且只能存在一个主要按钮，从而与默认按钮区分交互权重。
          </div>
        </x-panel>
        <x-panel :code="code.button_link|trim">
          <div slot="title">
            链接按钮（Link Button）
          </div>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.button_link }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.button_link">
          </div>
          <div class="cd-text-xs" slot="dec">
            链接按钮相较于通用按钮而言弱化了按钮属性，可以和通用按钮结合使用用以引导用户点击通用按钮，如果两个链接按钮结合使用则可以通过颜色定义操作场景。
          </div>
        </x-panel>
        <x-panel :code="code.button_disabled|trim">
          <div slot="title">
            禁用按钮（Disabled Button）
          </div>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.button_disabled }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.button_disabled"></div>
          <div class="cd-text-xs" slot="dec">
            在按钮禁用状态下，我们不再强调按钮的颜色与场景，仅仅以不可用的形式让用户了解即可，在这里去掉了颜色的干扰。
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.button_ghost|trim">
          <div slot="title">
            幽灵按钮（Ghost Button）
          </div>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.button_ghost }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-ghost-primary">主要按钮</button>
            <button class="cd-btn cd-btn-ghost-default">默认按钮</button>
            <span style="background: #313131; padding: 8px; display:inline-block; border-radius: 4px;">
              <button class="cd-btn cd-btn-ghost-light" style="margin-right:0">白色按钮</button>
            </span>
          </div>
          <div class="cd-text-xs" slot="dec">
            在一些需要弱化按钮视觉点并且需要不断重复某个组件的场景下，我们可以采用幽灵按钮代替通用按钮（例如设置列表），从而不在视觉流上喧宾夺主。
          </div>
        </x-panel>
        <x-panel :code="code.button_size|trim">
          <div slot="title">
            按钮尺寸（Button Size）
          </div>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.button_size }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.button_size"></div>
          <div class="cd-text-xs" slot="dec">
            Codeages Design 目前提供了三种按钮尺寸，根据不同场景来选择合适的按钮尺寸能够给设计更多的发挥空间。
          </div>
        </x-panel>
        <x-panel :code="code.button_api|trim">
          <div slot="title">
            按钮加载（Button Loading）
          </div>
          <div slot="code">
            <pre v-highlightjs><code class="js">
              {{ code.button_api }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-primary" @click="loading">按钮加载</button>
          </div>
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
      </div>
    </div>

    <x-api-table :attrData="attrData" :eventData="eventData" :code="code.button_api">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './button';
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
  {
    name: 'loadingText',
    dec: 'loading时显示的文本',
    type: 'String',
    value: 'loading...',
    optional: '--',
    data: 'loading-text'
  }
];

const eventData = [
  {
    name: 'loading',
    dec: '触发loading效果',
    callback: '--',
    args: 'args1: $el，被绑定的Dom元素的jquery对象'
  },
  {
    name: 'reset',
    dec: '取消loading效果',
    callback: '--',
    args: 'args1: $el，被绑定的Dom元素的jquery对象'
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
      eventData,
    }
  },
  methods: {
    loading(event) {
      const btn = cd.btn({
        el: event.currentTarget,
        loadingText: '加载中...'
      });

      btn.trigger('loading', () => {
        console.log('loading...');
      });

      setTimeout(() => {
        btn.trigger('reset', () => {
          console.log('reset...');
        });
      }, 1000);
    }
  }
}
</script>

<style lang="less">
.button-page .cd-btn {
  margin-right: 16px;
}
</style>
