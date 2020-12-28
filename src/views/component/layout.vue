<template>
  <div>
    <div class="site-content-title">布局</div>
    <div class="site-content-des">
    </div>
    <div class="site-layout">
      <div class="cd-content">
        <div class="cd-sidebar">
          <ul class="cd-sidebar__list">
            <li class="cd-sidebar__heading">分类1</li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__heading">分类2</li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
            <li class="cd-sidebar__item"><a href="">一级导航</a></li>
          </ul>
        </div>
        <div class="cd-main">
          <div class="cd-main__heading">
            <div class="cd-main__title">标题</div>
          </div>
          <div class="cd-main__body">主体内容</div>
        </div>
      </div>
    </div>
    <pre v-highlightjs><code class="js">
      {{ code.layout_base }}
    </code></pre>
  </div>
</template>

<script>
import * as code from './layout';
import XPanel from '@/components/panel.vue';

export default {
  components: {
    XPanel
  },
  data() {
    return {
      code,
    }
  },
  mounted() {
    
  },
  methods: {
  }
}
</script>

<style lang="less">
.site-layout {
  background: #f1f1f1;
  padding: 1px 24px;
  margin-bottom: 24px;
}
</style>
