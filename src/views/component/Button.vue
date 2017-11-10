<template>
  <div>
    <div class="site-main-title">Button 按钮</div>
    <div class="site-main-des">按钮用于开始一个即时操作</div>
    <div class="site-main-subtitle">代码演示</div>
    <div class="cd-row">
      <div class="col-xs-6">
        <div class="site-panel">
          <div class="site-panel__heading">
            <div class="site-panel__title">按钮类型</div>
            <button class="btn cd-btn cd-btn-primary">主按钮</button>
          </div>
          <div class="site-panel__body">针对按钮类型的描述</div>
          <div class="site-panel__footer">
            <pre><code class="html">
              {{ code.button_type }}
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

</style>
