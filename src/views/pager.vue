<template>
  <div class="site-pager">
    <span class="site-page site-page-left" @click="switchRoute(preName)" v-if="preName">
      <i class="cd-icon cd-icon-arrow-left"></i><span>{{preName.text_zh}}</span>
    </span>
    <span class="site-page site-page-right" @click="switchRoute(nextName)" v-if="nextName">
      <span>{{nextName.text_zh}}</span><i class="cd-icon cd-icon-arrow-right"></i>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { componentData } from '@/data';

@Component
export default class extends Vue {
  currentName: string = '';
  preName: any = '';
  nextName: any = '';

  @Watch('$route')
  getSibling() {
    this.currentName = this.$route.name;
    
    componentData.map((item, index) => {
      if(item.name == this.currentName) {
        this.preName = index - 1 >= 0 ? componentData[index - 1] : '';
        this.nextName = index + 1 < componentData.length ? componentData[index + 1] : '';
      }
    })
  }

  created() {
    this.getSibling();
  }

  switchRoute(routeName) {
    this.$router.push(routeName);
  }
}
</script>


