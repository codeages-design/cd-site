
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import XPanel from '@/components/panel.vue';
import XApiTable from '@/components/api-table.vue';


@Component({
  components: {
    XPanel,
    XApiTable
  }
})
export default class extends Vue {
  
}