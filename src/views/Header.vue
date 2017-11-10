<template>
  <header class="site-header clearfix">
    <div class="site-header__logo">CodeAges Design</div>
    <div class="site-header__nav">
      <ul>
        <li :class="{ active: routeName === nav.name }" @click="switchNav(nav.name)" v-for="(nav, index) in navData" :key="index">
          {{nav.text}}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
const navData = [
  {
    text: '首页',
    name: 'index'
  }, 
  {
    text: '组件',
    name: 'component_index'
  }
];

export default {
  data() {
    return {
      navData: navData
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
    switchNav(name) {
      this.$router.push({ name: name });
    }
  }
}
</script>

<style lang="less">
@brand-primary: #43bc60;

.site-header {
  position: relative;
  background-color: #fff;
  margin-bottom: 24px;
  padding: 12px 24px;

}

.site-header__logo {
  float: left;
  height: 40px;
  line-height: 40px;
  width: 200px;
  color: @brand-primary;
}

.site-header__nav {
  float: right;
  > ul {
    list-style: none;
    float: right;
    margin: 0 auto;
    > li {
      line-height: 20px;
      padding: 10px 20px;
      font-size: 14px;
      float: left;
      &.active,
      &:hover {
        color: @brand-primary;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>

