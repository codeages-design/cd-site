<template>
  <div>
    <div class="site-content-title">单选框</div>
    <div class="site-content-des">
      输入框是表单结构中最为基本的输入组件。
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.input_base|trim">
          <span slot="title">
            基础输入框
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.input_base }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style" >
            <div class="col-xs-8" v-html="code.input_base"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
            基础输入框不带标题，宽度根据具体场景设定。
          </div>
        </x-panel>
        <x-panel :code="code.input_search|trim">
          <span slot="title">
            搜索输入框
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.input_search }}
            </code></pre>
          </div>
          <div slot="style">
            <form action="" class="cd-form-inline">
              <div class="cd-form-group cd-form-group-button">
                <input name="q" type="text" class="cd-form-control cd-form-control-sm" placeholder="搜索框预设内容">
                <button><i class="cd-icon cd-icon-search"></i></button>
              </div>
            </form>
          </div>
          <div class="cd-text-xs" slot="dec">
            基础输入框不带标题，宽度根据具体场景设定。
          </div>
        </x-panel>
        <x-panel :code="code.input_textarea|trim">
          <span slot="title">
            文本域
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.input_textarea }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style">
            <div class="col-xs-8" v-html="code.input_textarea"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
            基础输入框不带标题，宽度根据具体场景设定。
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.input_size|trim">
          <span slot="title">
            输入框尺寸
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.input_size }}
            </code></pre>
          </div>
          <div class="cd-row" slot="style">
            <div class="col-xs-8">
              <input type="text" class="cd-form-control cd-form-control-lg cd-mb16
              " placeholder="最大输入框" />
              <input type="text" class="cd-form-control cd-mb16
              " placeholder="中等输入框" />
              <input type="text" class="cd-form-control cd-form-control-sm cd-mb16
              " placeholder="最小输入框" />
            </div>
          </div>
          <div class="cd-text-xs" slot="dec">
            基础输入框不带标题，宽度根据具体场景设定。
          </div>
        </x-panel>
        <x-panel :code="code.input_disabled|trim">
          <span slot="title">
            禁用输入框
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.input_disabled }}
            </code></pre>
          </div>
          <div class="cd-row cd-mb16" slot="style">
            <div class="col-xs-8" v-html="code.input_disabled"></div>
          </div>
          <div class="cd-text-xs" slot="dec">
            禁用输入框样式。
          </div>
        </x-panel>
      </div>
    </div>
  </div>
</template>

<script>
import * as code from './input';
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

<style lang="less" scoped>

</style>
