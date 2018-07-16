<template>
<div>
  <div class='midlayout' v-html="code.layout_base">
  </div>
  <div slot="code">
    <pre v-highlightjs><code class="html">
      {{ code.layout_base }}
    </code></pre>
  </div>
</div>

</template>

<script>
import * as code from './backstage.js';
import * as cd from 'codeages-design';
export default {
  components:{},
  props:{},
  data(){
    return {
      code,
    }
  },
  created(){},
  mounted(){
    cd.layout(code)
  },
  computed:{},
  methods:{},
  watch:{},
}
</script>
<style scoped lang="less">
</style>