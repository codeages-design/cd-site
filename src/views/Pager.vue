<template>
  <div class="site-pager">
    <span class="site-page site-page-left" @click="switchRoute(preName)" v-if="preName">
      <i class="cd-icon cd-icon-arrow-left"></i>{{preName.text_zh}}
    </span>
    <span class="site-page site-page-right" @click="switchRoute(nextName)" v-if="nextName">
      {{nextName.text_zh}}<i class="cd-icon cd-icon-arrow-right"></i>
    </span>
  </div>
</template>

<script>
import { componentData } from '@/assets/js/data';

const newCompData = componentData.filter((item) => {
  return item.isItem;
});

export default {
  data() {
    return {
      currentName: this.$route.name,
      preName: '',
      nextName: ''
    }
  },
  created() {
    this.getSibling();
  },
  watch: {
    '$route': function() {
      this.currentName = this.$route.name;
      this.getSibling();
    }
  },
  methods: {
    getSibling() {
      newCompData.map((item, index) => {
        if(item.name == this.currentName) {
          this.preName = index - 1 >= 0 ? newCompData[index - 1] : '';
          this.nextName = index + 1 < newCompData.length ? newCompData[index + 1] : '';
        }
      })
    },
    switchRoute(routeName) {
      this.$router.push(routeName);
    },
  }
}
</script>


