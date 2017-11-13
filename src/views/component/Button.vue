<template>
  <div class="compontent-button">
    <div class="site-main-title">Button 按钮</div>
    <div class="site-main-des">按钮用于开始一个即时操作</div>
    <div class="site-main-subtitle">代码演示</div>
    <div class="cd-row">
      <div class="col-xs-6">
        <div class="site-panel">
          <div class="site-panel__heading">
            <button class="cd-btn cd-btn-primary">Raised按钮</button>
            <button class="cd-btn cd-btn-ghost-primary">Ghost按钮</button>
            <button class="cd-btn cd-btn-flat-primary">Flat按钮</button>
          </div>
          <div class="site-panel__body">
            <div class="site-panel__title">按钮类型</div>
            针对按钮类型的描述
          </div>
          <div class="site-panel__footer">
            <pre v-highlightjs><code class="html">
              {{ code.button_type }}
            </code></pre>
          </div>
        </div>
        <div class="site-panel">
          <div class="site-panel__heading">
            <button class="cd-btn cd-btn-primary cd-mt8">Primary按钮</button>
            <button class="cd-btn cd-btn-default">Default按钮</button>
            <button class="cd-btn cd-btn-danger">Danger按钮</button>
            <button class="cd-btn cd-btn-success">Success按钮</button>
            <button class="cd-btn cd-btn-warning">Warning按钮</button>
            <button class="cd-btn cd-btn-info">Info按钮</button>
          </div>
          <div class="site-panel__body">
            <div class="site-panel__title">按钮颜色</div>
            针对按钮颜色的描述
          </div>
          <div class="site-panel__footer">
            <pre v-highlightjs><code class="html">
              {{ code.button_color }}
            </code></pre>
          </div>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="site-panel">
          <div class="site-panel__heading">
            <button class="cd-btn cd-btn-primary cd-btn-sm">小号按钮</button>
            <button class="cd-btn cd-btn-primary">默认按钮</button>
            <button class="cd-btn cd-btn-primary cd-btn-lg">大号按钮</button>
          </div>
          <div class="site-panel__body">
            <div class="site-panel__title">按钮大小</div>
            针对按钮大小的描述
          </div>
          <div class="site-panel__footer">
            <pre v-highlightjs><code class="html">
              {{ code.button_size }}
            </code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './button';
export default {
  data() {
    return {
      code,
    }
  }
}
</script>

<style lang="less" scoped>
.compontent-button .cd-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
