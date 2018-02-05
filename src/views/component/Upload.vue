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
          <div class="" slot="dec">
            
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.upload_file|trim">
          <span slot="title">
            上传文件
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.upload_file }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.upload_file"></div>
          <div class="" slot="dec">
            
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.upload_api" 
      :attrData="attrData" 
      :hookData="hookData"
    ></x-api-table>
  </div>
</template>

<script>
import * as code from './upload';
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
    name: 'fileSize',
    dec: '文件大小限制，单位M',
    type: 'String',
    value: '2',
    optional: '--'
  },
  {
    name: 'isLimitFileType',
    dec: '是否限制文件类型',
    type: 'Boolean',
    value: 'false',
    optional: '--'
  },
  {
    name: 'fileTypes',
    dec: '允许的文件类型，只有当isLimitFileType值为true，才生效',
    type: 'Array',
    value: "['image/bmp', 'image/jpeg', 'image/png']",
    optional: '--'
  },
];

const hookData = [
  {
    name: 'success',
    dec: '上传成功后触发的钩子',
    callback: '--',
    args: `
      args1: event，被绑定的Dom元素的事件对象<br>
      args2: file，被上传的文件的信息，包括name、type等<br>
      args3: src，被上传的文件的base64信息
    `
  },
  {
    name: 'error',
    dec: '上传失败后触发的钩子',
    callback: '--',
    args: `
      args1: code，错误码；有FILE_SIZE_LIMIT、FLIE_TYPE_LIMIT<br>
    `
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
  methods: {
  },
  mounted() {
    cd.upload({
      el: '#cd-upload',
    }).on('success', (event, file, src) => {
      let $this = $(event.currentTarget);
      let $target = $($this.data('target'));

      $target.attr('src', src);
    }).on('error', (code) => {
      let message = '';
      if (code === 'FILE_SIZE_LIMIT') {
        message = '文件大小超过了限制';
      } else if (code === 'FLIE_TYPE_LIMIT') {
        message = '文件格式不符合要求';
      }
      cd.message({
        type: 'danger',
        message: message
      })
    });

    cd.upload({
      el: '#upload-file',
    }).on('success', (event, file, src) => {
      let $this = $(event.currentTarget);
      let $target = $($this.data('target'));

      $this.siblings().text(file.name);
    }).on('error', (code) => {
      let message = '';
      if (code === 'FILE_SIZE_LIMIT') {
        message = '文件大小超过了限制';
      } else if (code === 'FLIE_TYPE_LIMIT') {
        message = '文件格式不符合要求';
      }
      cd.message({
        type: 'danger',
        message: message
      })
    });
  }
}
</script>

<style lang="less">

</style>
