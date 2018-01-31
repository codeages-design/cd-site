<template>
  <div>
    <div class="site-content-title">上传</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
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
      <div class="cd-xs-12">
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
    //   fileTypes: ['application/msword', 'text/csv', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
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
