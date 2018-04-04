<template>
  <div class="site-sidebar">
    <div class="site-sidebar__column" 
      v-for="(menu, menuIndex) in componentMenu" 
      :key="menuIndex">
      <div class="site-sidebar__column__title">
        {{ menu.text }}
      </div>
      <ul class="site-sidebar__nav">
        <li 
          v-for="(submenu, submenuIndex) in menu.children" 
          :key="submenuIndex"
          :class="{ active: routeName === submenu.name }"
          @click="switchNav(submenu.name)">
          <span>{{ submenu.text_zh }}</span>
          <span class="nav-en">{{ submenu.text_en }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { componentMenu } from '@/data';

@Component
export default class extends Vue {
  componentMenu: any[] = componentMenu;
  routeName:string = '';

  @Watch('$route')
  getRoute() {
    this.routeName = this.$route.name;
  }

  created() {
    this.getRoute();
  }

  sidebarToggle() {
    this.$emit('sidebarToggle');
  }

  switchNav(name) {
    this.$router.push({ name: name });
  }
}
</script>