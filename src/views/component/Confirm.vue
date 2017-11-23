<template>
  <div>
    <div class="site-content-title">确认框</div>
    <div class="site-content-des">确认框的描述</div>
    <x-panel :code="code.confirm_js|trim">
      <div slot="title">
        基础
      </div>
      <div slot="code">
        <pre v-highlightjs><code class="js">
          {{ code.confirm_js }}
        </code></pre>
      </div>
      <div class="cd-mb16" slot="style">
        <button class="cd-btn cd-btn-primary" id="cofirm-btn" @click="onConfirm">点击触发</button>
      </div>
      <div class="cd-text-xs" slot="dec">
        描述
      </div>
    </x-panel>
    <div class="site-content-subtitle">API</div>
    <pre v-highlightjs><code class="js">
      {{ code.confirm_js }}
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
            <td>title</td>
            <td>标题</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>content</td>
            <td>主体内容</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>okText</td>
            <td>确定按钮的文案</td>
            <td>String</td>
            <td>Confirm</td>
            <td>--</td>
          </tr>
          <tr>
            <td>cancelText</td>
            <td>取消按钮的文案</td>
            <td>String</td>
            <td>Cancel</td>
            <td>--</td>
          </tr>
          <tr>
            <td>confirmClass</td>
            <td>confirm组件的Class</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>ok</td>
            <td>点击确定后的回调函数</td>
            <td>Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>cancel</td>
            <td>点击取消后的回调函数</td>
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
import * as code from './confirm';
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
    onConfirm() {
      cd.confirm({
        title: '标题',
        content: '确定要这么做吗？',
        okText: '确定',
        cancelText: '取消',
        confirmClass: '',
        ok(event, $confirm) {
          console.log('点击确定按钮后的回调函数')
        },
        close(event) {
          console.log('点击取消按钮后的回调函数')
        }
      })
    }
  },
  mounted() {
  }
}
</script>
