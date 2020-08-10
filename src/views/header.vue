<template>
  <header class="site-header">
    <div class="site-header__logo">
      <router-link :to="{name: 'homepage'}">
        <img src="/static/img/logo@2x.png" srcset="/static/img/logo.png 1x, /static/img/logo@2x.png 2x" alt="">
      </router-link>
    </div>
    <div class="site-header__nav cd-clearfix">
      <ul class="">
        <li :class="{ active: routeName === nav.name }"
            @click="switchNav(nav)"
            v-for="nav in navMenu">
          {{nav.text}}
					<template v-if="nav.children">
						<div class="nav-child-icon"></div>
						<ul class="nav-child" v-if="nav.children" v-show="childShow[nav.name]">
							<li v-for="item in nav.children" :key="item.name" @click="switchNav(item, nav)">{{ item.text }}</li>
						</ul>
					</template>
        </li>
      </ul>
      <theme-picker @ok="pickerOk">
        <embed src="/static/svg/color.svg" type="" height="13" width="10" style="vertical-align: middle; margin-top: -2px">
        主题色
      </theme-picker>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

import ThemePicker from '@/components/theme-picker.vue';
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
    ThemePicker,
  },
})

export default class extends Vue {
  navMenu: Nav[] = navMenu;
  routeName: string = null;
  chalk: string = (<any>window).chalk;
	childShow: Object = {};
	
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

  pickerOk(oldColor, newColor) {
    const chalkHandler = this.getHandler(oldColor, newColor, 'chalk-style');

    if (!this.chalk) {
      const url = `https://unpkg.com/codeages-design@${version}/dist/cd-main-color.css`;
      this.getCSSString(url, chalkHandler);
    } else {
      chalkHandler();
    };

    const styles = [].slice.call(document.querySelectorAll('style'))
      .filter(style => {
        const text = style.innerText;
        return new RegExp(oldColor.hex, 'i').test(text) && /.site-/.test(text) && !/@font-face/.test(text);
      })

    styles.forEach(style => {
      const { innerText } = style;
      if (typeof innerText !== 'string') return;
      style.innerText = this.updateStyle(innerText, oldColor, newColor);
    });

    cd.message({
      type: 'success',
      message: '修改主色调成功'
    });
  }

  getHandler(oldColor, newColor, id) {
    return () => {
      const newStyle = this.updateStyle(this.chalk, oldColor, newColor);

      this.chalk = newStyle;
      (<any>window).chalk = newStyle;

      let styleTag = document.getElementById(id);
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.setAttribute('id', id);
        document.head.appendChild(styleTag);
      }
      styleTag.innerText = newStyle;
    }
  }

  updateStyle(style, oldColor, newColor) {
    let newStyle = style;

    const rgb = (color) => {
      return [color.rgba.r, color.rgba.g, color.rgba.b].join(',');
    }

    newStyle = newStyle.replace(new RegExp(oldColor.hex, 'ig'), newColor.hex);
    newStyle = newStyle.replace(new RegExp(rgb(oldColor), 'ig'), rgb(newColor));

    return newStyle;
  }

  getCSSString(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.chalk = xhr.responseText;
        (<any>window).chalk = xhr.responseText;
        callback();
      }
    }
    xhr.open('GET', url);
    xhr.send();
  }
}
</script>
