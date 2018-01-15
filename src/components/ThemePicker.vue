<template>
  <div class="site-theme-picker">
    <div class="picker" :style="{background: colors.hex}" @click="select"></div>
    <div class="vc-sketch-warp" v-show="isShow">
      <sketch-picker :value="colors" @input="updateValue"></sketch-picker>
      <div class="vc-sketch-action">
        <button class="cd-btn cd-btn-sm cd-btn-ghost-default" @click="cancel">取消</button>
        <button class="cd-btn cd-btn-sm cd-btn-ghost-default" @click="ok">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Sketch } from 'vue-color';

const defaultColors = {
  hex: '#43bc60'
};

export default {
  components: {
    'sketch-picker': Sketch
  },
  data() {
    return {
      colors: defaultColors,
      newColors: {},
      isShow: false
    }
  },
  methods: {
    select() {
      this.isShow = !this.isShow;
    },
    cancel() {
      this.isShow = false;
      this.colors = defaultColors;
    },
    ok() {
      this.colors = this.newColors;

      // const url = ``;
    },
    updateValue(colors) {
      this.newColors = colors;
      console.log(colors, 'colors');
    },
  }
}
</script>

<style lang="less">
.site-theme-picker {
  position: relative;
  float: right;
  .picker {
    width: 48px;
    height: 24px;
    margin-top: 16px;
    border: 1px solid #fafafa;
    cursor: pointer;
    border-radius: 4px;
  }
  .vc-sketch-warp {
    position: absolute;
    top: 105%;
    right: 0;
    width: 200px;
    padding: 10px 10px 0;
    box-sizing: initial;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);
  }
  .vc-sketch-action {
    margin-bottom: 10px;
    text-align: right;
  }
  .vc-sketch {
    padding: 0 !important;
    border-radius: none !important;
    box-shadow: none !important;
  }
  .vc-sketch-field .vc-input__input {
    width: 100% !important;
  }
}
</style>


