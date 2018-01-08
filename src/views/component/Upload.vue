<template>
  <div>
    <div class="site-content-title">上传</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="col-xs-6">
        <x-panel :code="code.upload_avatar|trim">
          <span slot="title">
            上传图片
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.upload_avatar }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.upload_avatar"></div>
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel>
      </div>
      <div class="col-xs-6">
        <!-- <x-panel :code="code.upload_file|trim">
          <span slot="title">
            上传文件
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.upload_file }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.upload_file"></div>
          <div class="cd-text-xs" slot="dec">
            
          </div>
        </x-panel> -->
      </div>
    </div>
    <div class="site-content-subtitle">API</div>
    <!-- <pre v-highlightjs><code class="js">
      {{ code.tabs_api }}
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
            <td>el</td>
            <td>要绑定的元素</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>target</td>
            <td>要存放的内容元素</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>url</td>
            <td>初始化要请求的路由</td>
            <td>String</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>success</td>
            <td>请求数据成功回调函数</td>
            <td>Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
          <tr>
            <td>error</td>
            <td>请求数据失败回调函数</td>
            <td>Function</td>
            <td>无</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script>
import * as code from './upload';
import XPanel from '@/components/Panel';
import '@/mock';

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
  },
  mounted() {
    cd.upload({
      el: '#upload-avatar',
      success(event, src, $target) {
        $target.attr('src', src);
      },
      error(code) {
        console.log(code);
      }
    });
    // cd.upload({
    //   el: '#upload-file',
    //   fileTypes: ['application/msword', 'text/csv'],
    //   success(event, src, $target) {
    //     console.log(event, src);
    //   },
    //   error(code) {
    //     console.log(code);
    //   }
    // })
  }
}
</script>

<style lang="less">

</style>
