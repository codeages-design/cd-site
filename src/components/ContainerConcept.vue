<template>
  <section class="concept">
    <section 
      class="concept__name"
      :name="name">{{ name }}</section>
    <section
      class="concept__content"
      :content="content">{{ content }}</section>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    content: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
  .concept {
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      clear: both;
    }

    &__name {
      color: #333333;
      font-weight: 700;
      padding-bottom: 9999px;
      margin-bottom: -9999px;
      float: left;
    }

    &__content {
      color: #666666; 
      font-size: 14px;
      letter-spacing: 0;
      line-height: 20px;
      float: left;
    }
  }
</style>