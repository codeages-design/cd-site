<template>
  <div class="site-sidebar">
    <div class="site-sidebar__column"
      v-for="(menu, menuIndex) in menus"
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
          <span class="nav-en" v-if="!menu.isHideEn">{{ submenu.text_en }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop(Array) menus;
  routeName:string = '';

  @Watch('$route')
  getRoute() {
    this.routeName = this.$route.name;
  }

  created() {
    this.getRoute();
    console.log(this.menus);
  }

  switchNav(name) {
    this.$router.push({ name: name });
  }
}
</script>
