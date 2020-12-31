<template>
  <div class="principle-content_wrapper">
    <div 
      v-for="(item, index) in 2"
      :key="index"
      class="principle-content_inner"> 
      <container-title :title="data.titles.main[index]" /> 
      <div class="principle-content_text"> 
        <container-text 
          v-for="(text, index) in (data.texts.main).slice(index*4, (index + 1)*4)"
          :key="index"
          :text="text"
          :paddingTop="data.texts.paddingTop[index]"/>  
      </div>
    </div>
  </div>
</template> 

<script>
  import data from './desc.js'; 
  import ContainerTitle from '@/components/ContainerTitle';
  import ContainerText from '@/components/ContainerText';
  export default {
    components: { 
      ContainerTitle,
      ContainerText
    },
    data() {
      return {
        data
      }
    }
  }
</script>

<style lang="less" scoped>
  .main-titlee:last-child {
    padding-top: 48px;
  }
  .principle-content_inner {
    margin-bottom: 32px;
  }
  .principle-content_text {
    p {
      font-size: 16px;
      color: #666666;
      letter-spacing: 0;
      line-height: 24px;

      &:last-child {
        line-height: 22px;
      }
    }  
  }
</style>