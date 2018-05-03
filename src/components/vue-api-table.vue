<template>
  <div class="site-api">
    <div v-if="attrData.length">
      <div class="site-content-subtitle">
        API
      </div>
      <div class="cd-table-responsive">
        <table class="cd-table">
          <thead>
            <tr>
              <th v-for="(item, index) in attrThead" :key="index">
                {{item}} 
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in attrData" :key="index">
              <td>{{item.name}}</td>
              <td v-html="item.dec"></td>
              <td>{{item.type}}</td>
              <td>{{item.value}}</td>
              <td v-html="item.optional"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

const attrThead = ['属性名', '说明', '类型', '默认值', '可选值'];

@Component
export default class extends Vue {
  attrThead: any[] = attrThead;

  @Prop()
  code: any;

  @Prop({
    type: Array,
    default: () => {
      return [];
    }
  })
  attrData: any[];
}
</script>


<style lang="less">
.cd-table-responsive {
  margin-bottom: 24px;
  overflow-x: visible;
  min-height: auto;
  @media(max-width: 767px) {
    overflow-x: auto;
    min-height: 0.01%;
    border: none;
  }
  > .cd-table {
    border: 0;
    margin-bottom: 0;
  }
}

.cd-table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 24px;
  border-collapse: collapse;
  border-spacing: 0;
  td {
    word-wrap: break-word;
    word-break: break-all;
  }
  th {
    text-align: left;
  }
  > tbody > tr > td,
  > tbody > tr > th,
  > thead > tr > td,
  > thead > tr > th {
    font-size: 12px;
    color: rgba(0, 0, 0, .88);
  }
  > tbody > tr > th,
  > thead > tr > th {
    background: #f5f5f5;
    font-weight: bold;
    border: none;
    padding: 16px;
    line-height: 20px;
    vertical-align: middle;
  }
  > tbody > tr > th:first-child,
  > thead > tr > th:first-child {
    border-top-left-radius: 4px;
  }
  > tbody > tr > th:last-child,
  > thead > tr > th:last-child {
    border-top-right-radius: 4px;
  }
  > tbody > tr {
    transition: all .3s ease;
    &:hover {
      background: #fafafa;
      transition: all .3s ease;
    }
  }
  > tbody > tr > td {
    line-height: 20px;
    padding: 6px 16px;
    height: 50px;
    vertical-align: middle;
    border-top: 0;
    border-bottom: 1px solid #f5f5f5;
  }
}
</style>


