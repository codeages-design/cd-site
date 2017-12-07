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
import { navData } from '@/assets/js/data';

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
