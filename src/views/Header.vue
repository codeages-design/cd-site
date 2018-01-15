<template>
  <header class="site-header">
    <div class="site-header__logo">
      <router-link :to="{name: 'homepage'}">
        <img src="/static/img/logo@2x.png" srcset="/static/img/logo.png 1x, /static/img/logo@2x.png 2x" alt="">
      </router-link>
    </div>
    <div class="site-header__nav site-clearfix">
      <ul class="">
        <li :class="{ active: routeName === nav.name }" @click="switchNav(nav.name)" v-for="(nav, index) in navData" :key="index">
          {{nav.text}}
        </li>
      </ul>
      <!-- <theme-picker></theme-picker> -->
    </div>
  </header>
</template>

<script>
import ThemePicker from '@/components/ThemePicker';

const navData = [
  {
    text: '首页',
    name: 'homepage'
  }, 
  {
    text: '组件',
    name: 'component'
  }
];

export default {
  components: {
    ThemePicker,
  },
  data() {
    return {
      navData: navData,
      routeName: null
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
      this.routeName = this.$route.matched[0].name;
    },
    switchNav(name) {
      this.$router.push({ name: name });
    }
  }
}
</script>

<style lang="less">
// @brand-primary: #43bc60;
</style>

