<template>
  <div class="compontent-alert">
    <div class="site-content-title">信息框</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.message_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="js">
              {{ code.message_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-ghost-default" @click="oninfoType">普通信息</button>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
        <x-panel :code="code.message_action|trim">
          <span slot="title">
            带操作的
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="js">
              {{ code.message_action }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-ghost-default" @click="onAction">带操作的</button>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <x-panel :code="code.message_type|trim">
          <span slot="title">
            信息框类型
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="js">
              {{ code.message_type }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-ghost-default" @click="onSuccessType">成功信息</button>
            <button class="cd-btn cd-btn-ghost-default" @click="onWarningType">警告信息</button>
            <button class="cd-btn cd-btn-ghost-default" @click="onDangerType">危险信息</button>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
        <x-panel :code="code.message_delay|trim">
          <span slot="title">
            修改延迟
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="js">
              {{ code.message_delay }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style">
            <button class="cd-btn cd-btn-ghost-default" @click="onDelay">修改延迟</button>
          </div>
          <div class="cd-text-xs" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <div class="site-content-subtitle">
      API
    </div>
    <pre v-highlightjs><code class="js">
      {{ code.message_full }}
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
            <td>type</td>
            <td>类型</td>
            <td>String</td>
            <td>info</td>
            <td>info、success、warning、danger</td>
          </tr>
          <tr>
            <td>message</td>
            <td>主体内容</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>delay</td>
            <td>延迟，单位（豪秒）</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>z_index</td>
            <td>z轴层级</td>
            <td>String</td>
            <td>9999</td>
            <td>--</td>
          </tr>
          <tr>
            <td>offset</td>
            <td>偏移，单位（px）</td>
            <td>String</td>
            <td>80</td>
            <td>--</td>
          </tr>
          <tr>
            <td>action</td>
            <td>操作，包含 title、url、template 3个属性</td>
            <td>Object</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>action.title</td>
            <td>操作标题</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>action.url</td>
            <td>操作链接</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>action.template</td>
            <td>操作自定义模版，支持html片段</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>animate</td>
            <td>动画效果，包含入场动画及退场动画</td>
            <td>Object</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>animate.enter</td>
            <td>入场动画</td>
            <td>String</td>
            <td>cd-animated cd-fadeInDownSmall</td>
            <td>--</td>
          </tr>
          <tr>
            <td>animate.exit</td>
            <td>退场动画</td>
            <td>String</td>
            <td>cd-animated cd-fadeOutUp</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as code from './message';
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
    oninfoType() {
      cd.message({
        type: 'info',
        message: '这是普通信息。'
      });
    },
    onDangerType() {
      cd.message({
        type: 'danger',
        message: '这是危险信息。',
      })
    },
    onSuccessType() {
      cd.message({
        type: 'success',
        message: '这是成功信息。',
      })
    },
    onWarningType() {
      cd.message({
        type: 'warning',
        message: '这是警告信息。',
      })
    },
    onAction() {
      cd.message({
        type: 'info',
        message: '这是普通信息。',
        action: {
          title: '操作',
          href: '#'
        }
      });
    },
    onDelay() {
      cd.message({
        type: 'info',
        message: '这是普通信息。',
        delay: '10000'
      });
    }
  }
}
</script>

<style lang="less">

</style>
