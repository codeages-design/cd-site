<template>
  <header class="site-header" :class="['site-header', {'site-header__top': (this.isTop && this.isIndex)}]" >
    <div class="site-header__container">
      <div class="site-header__logo" :class="[{ 'not-center': notCenter }]">
      <router-link :to="{name: 'homepage'}">
        <img src="/static/img/homepage/logo@2x.png" srcset="/static/img/homepage/logo.png 1x, /static/img/homepage/logo@2x.png 2x" alt="">
      </router-link>
    </div>
    <div v-show="notCenter" class="vertical-split-line"></div>
    <div class="site-header__nav cd-clearfix">
      <ul class="">
        <li :class="{ active: routeName === nav.name }"
            @click="switchNav(nav)"
            v-for="(nav,index) in navMenu"
            :key="index">
          {{nav.text}}
					<template v-if="nav.children">
						<div class="nav-child-icon"></div>
						<ul class="nav-child" v-if="nav.children" v-show="childShow[nav.name]">
							<li v-for="item in nav.children" :key="item.name" @click="switchNav(item, nav)">{{ item.text }}</li>
						</ul>
					</template>
        </li>
      </ul>
    </div>
    </div>
    
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import { version } from 'codeages-design/package.json';
import { navMenu } from '@/data';
import * as _ from 'lodash';

interface Nav {
	name: String,
	text: String,
	children: Nav[],
}

@Component({
  components: {
  },
})



export default class extends Vue {
  navMenu: Nav[] = navMenu;
  routeName: string = null;
  chalk: string = (<any>window).chalk;
  childShow: Object = {};
  scrollTop: Number = 0;
  
  mounted() {
    window.addEventListener('scroll',this.rollingheight,true)
  }

  rollingheight(){
      this.scrollTop =window.pageYOffset
  }

  get notCenter() {
    return ['homepage', 'resources'].indexOf(this.$route.name) === -1 
  }
  
  get isTop() {
    return this.scrollTop == 0
  }

  get isIndex() {
    console.log(this.$parent.$options.name)
    if(this.$parent.$options.name === 'homepage' ) {
      return true
    }
    return false
  }
	
	resetNavMenu() {
		for (let i = 0;i < this.navMenu.length;i++) {
			const nav = this.navMenu[i];
			if (nav.children) {
				const index = _.findIndex(nav.children, item => item.name === this.routeName);
				if (index > -1) {
					this.navMenu[i] = (<any>Object).assign({}, this.navMenu[i], nav.children[index]);
				}
			}
		}
	}

  created() {
    this.getRoute();
    this.resetNavMenu();
  }

  getRoute() {
    this.routeName = this.$route.matched[0].name;
  }

  switchNav(nav, parent) {
		if (nav.children) {
			this.$set(this.childShow, nav.name, !this.childShow[nav.name]);
			return;
		} else if (parent) {
			this.$set(this.childShow, nav.name, false);
			this.routeName = nav.name;
			this.resetNavMenu();
		}
		this.$router.push({ name: nav.name });
  }

}
</script>

<style lang="less" scoped>
  .vertical-split-line {
    position: absolute;
    top: 16px;
    left: 271px;
    width: 1px;
    height: 32px;
    background-color: #eee;
  }
</style>