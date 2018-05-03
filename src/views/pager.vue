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
import { Component, Watch, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop()
  data: any;

  currentName: string = '';
  preName: any = '';
  nextName: any = '';

  @Watch('$route')
  getSibling() {
    this.currentName = this.$route.name;
    
    this.data.map((item, index) => {
      if(item.name == this.currentName) {
        this.preName = index - 1 >= 0 ? this.data[index - 1] : '';
        this.nextName = index + 1 < this.data.length ? this.data[index + 1] : '';
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


