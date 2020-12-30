<template>
  <section class="img-sec">
    <img :src="imgPath">
  </section>
</template>

<script>
export default {
  props: {
    imgPath: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>