<template>
  <div class="compontent-alert">
    <div class="site-main-title">Alert 提示框</div>
    <div class="site-main-des">提示框用于开始一个即时操作</div>
    <div class="site-main-subtitle">代码演示</div>
    <div class="cd-row">
      <div class="col-xs-6">
        <div class="site-panel">
          <div class="site-panel__heading">
            <div class="cd-alert cd-alert-success">成功提示框，展示成功信息。</div>
            <div class="cd-alert cd-alert-danger">错误提示框，展示错误信息。</div>
            <div class="cd-alert cd-alert-warning">警告提示框，展示重要信息。</div>
            <div class="cd-alert cd-alert-info">信息提示框，展示基本信息。</div>
          </div>
          <div class="site-panel__body">
            <div class="site-panel__title">提示框颜色</div>
            针对提示框颜色的描述
          </div>
          <div class="site-panel__footer">
            <pre><code class="html">
              {{code.alert_color}}
            </code></pre>
          </div>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="site-panel">
          <div class="site-panel__heading">
            <div class="cd-alert cd-alert-success">
              可关闭的提示框。
              <button type="button" class="close" data-dismiss="alert">
                <i class="cd-icon cd-icon-close"></i>
              </button>
            </div>
          </div>
          <div class="site-panel__body">
            <div class="site-panel__title">可关闭的提示框</div>
            针对可关闭的提示框的描述
          </div>
          <div class="site-panel__footer">
            <pre><code class="html">
              {{code.alert_close}}
            </code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './alert';

export default {
  data() {
    return {
      code,
    }
  }
}
</script>
