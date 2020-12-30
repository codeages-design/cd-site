<template>
  <div class="key-concept">
    <section 
      class="key-concept__name"
      :name="name">{{ name }}</section>
    <section 
      class="key-concept__content"
      :content="content">{{ content }}</section>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
      default: 'name'
    },
    content: {
      type: String,
      require: true,
      default: 'content'
    }
  }
}
</script>

<style lang="less" scoped>
  .key-concept {
    &__name {
      font-size: 16px;
      color: #333333;
      letter-spacing: 0;
      line-height: 24px;
      font-weight: 700;
    }

    &__content {
      font-size: 17px;
      color: #666666;
      letter-spacing: 0;
      line-height: 20px;
    }
  }
</style>