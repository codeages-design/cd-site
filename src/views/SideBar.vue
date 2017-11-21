<template>
  <div class="site-sidebar">
    <ul class="site-sidebar__nav">
      <li class="site-sidebar__nav-item" v-for="(nav, index) in navData" :key="index">
        <span class="site-sidebar__nav-item__subtitle" v-if="nav.isItem" 
          :class="{ active: routeName === nav.name }" @click="switchNav(nav.name)">
          <span>{{ nav.text_en }}</span><span>{{nav.text_zh}}</span>
        </span>
        <span class="site-sidebar__nav-item__title" v-else>
          {{ nav.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
const navData = [
  // {
  //   isItem: false,
  //   text: '基础'
  // },
  // {
  //   isItem: true,
  //   // text_en: 'Color',
  //   text_zh: '色彩',
  //   name: 'base_color'
  // },
  // {
  //   isItem: true,
  //   // text_en: 'Font',
  //   text_zh: '字体',
  //   name: 'base_font'
  // },
  // {
  //   isItem: true,
  //   // text_en: 'Grid',
  //   text_zh: '排版',
  //   name: 'base_grid'
  // },
  // {
  //   isItem: true,
  //   // text_en: 'Layout',
  //   text_zh: '布局',
  //   name: 'base_layout'
  // },
  {
    isItem: false,
    text: '通用'
  },
  {
    isItem: true,
    // text_en: 'Button',
    text_zh: '按钮',
    name: 'component_button'
  },
  // {
  //   isItem: true,
  //   // text_en: 'Icon',
  //   text_zh: '图标',
  //   name: 'other_icon'
  // },
  {
    isItem: false,
    text: '表单'
  },
  {
    isItem: true,
    // text_en: 'Radio',
    text_zh: '单选框',
    name: 'component_radio'
  },
  {
    isItem: false,
    text: '通知'
  },
  {
    isItem: true,
    // text_en: 'Alert',
    text_zh: '提示框',
    name: 'component_alert'
  },
  {
    isItem: true,
    // text_en: 'Confirm',
    text_zh: '确认框',
    name: 'component_confirm'
  },
  {
    isItem: false,
    text: '导航'
  },
  {
    isItem: true,
    // text_en: 'Tabs',
    text_zh: '标签页',
    name: 'component_tabs'
  },
  {
    isItem: true,
    // text_en: 'Steps',
    text_zh: '步骤条',
    name: 'component_steps'
  },
  {
    isItem: false,
    text: '其他'
  },
  {
    isItem: true,
    // text_en: 'Avatar',
    text_zh: '头像',
    name: 'component_avatar'
  },
  {
    isItem: true,
    // text_en: 'Loading',
    text_zh: '加载',
    name: 'component_loading'
  },
  // {
  //   isItem: true,
  //   // text_en: 'Model',
  //   text_zh: '模态框',
  //   name: 'component_model'
  // },
];

export default {
  data() {
    return {
      navData: navData,
      routeName: ''
    }
  },
  watch: {
    '$route': 'getRoute'
  },
  created() {
    this.getRoute();
  },
  methods: {
    getRoute() {
      this.routeName = this.$route.name;
    },
    sidebarToggle() {
      this.$emit('sidebarToggle');
    },
    switchNav(name) {
      this.$router.push({ name: name });
    }
  }
}
</script>

<style lang="less">
</style>
