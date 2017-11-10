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
  {
    isItem: false,
    text: '基础'
  },
  {
    isItem: true,
    text_en: 'Button',
    text_zh: '按钮',
    name: 'component_button'
  },
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
@brand-primary: #43bc60;

.site-sidebar {
  position: absolute;
  top: 16px;
  left: 0;
  bottom: 16px;
  width: 200px;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  // height: 100%;
  overflow: auto;
}

.site-sidebar__nav {
  list-style: none;
  padding-left: 8px;
}

.site-sidebar__nav-item {
  padding: 8px 16px;
  display: block;
  .site-sidebar__nav-item__title {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.32);
  }
  .site-sidebar__nav-item__subtitle {
    font-size: 14px;
    &.active,
    &:hover {
      color: @brand-primary;
    }
    &:hover {
      cursor: pointer;
    }
    span + span {
      margin-left: 8px;
      font-size: 12px
    }
  }
}
</style>
