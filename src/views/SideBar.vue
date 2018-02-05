<template>
  <div class="site-sidebar">
    <ul class="site-sidebar__nav">
      <li class="site-sidebar__nav-item" 
        v-for="(component, index) in componentData" 
        :key="index">
        <span class="site-sidebar__nav-item__subtitle" 
          v-if="component.isItem" 
          :class="{ active: routeName === component.name }"
          @click="switchNav(component.name)">
          <span>{{component.text_zh}}</span>
          <span class="nav-en">{{ component.text_en }}</span>
        </span>
        <span class="site-sidebar__nav-item__title" v-else>
          {{ component.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { component } from '@/assets/data.json';

export default {
  data() {
    return {
      componentData: component,
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