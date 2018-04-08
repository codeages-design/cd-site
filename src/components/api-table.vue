<template>
  <div class="site-api">
    <div v-if="dataApiData && dataApiData.length">
      <div class="site-content-subtitle" >
        DATA-API
      </div>
      <div class="site-content-des">
        注：DATA-API为在html上添加data属性，从而自动触发JS，实现零JS调用
      </div>
      <div class="cd-table-responsive">
        <table class="cd-table">
          <thead>
            <tr>
              <th v-for="(item, index) in dataApiThead" :key="index">{{item}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in dataApiData" :key="index">
              <td>{{item.name}}</td>
              <td v-html="item.dec"></td>
              <td>{{item.type}}</td>
              <td v-html="item.value"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="code">
      <div class="site-content-subtitle">
        API
      </div>
      <pre v-highlightjs><code class="js">
        {{ code }}
      </code></pre>
    </div>

    <div  v-if="attrData && attrData.length">
      <div class="site-content-subtitle">
        属性
      </div>
      <div class="cd-table-responsive">
        <table class="cd-table">
          <thead>
            <tr>
              <th v-for="(item, index) in attrThead" :key="index">
                <span v-if="index == attrThead.length - 1">
                  {{item}} 
                  <i class="cd-icon cd-icon-help-o cd-text-sm  cd-dark-minor" data-toggle="cd-tooltip" 
                    data-title="DATA属性为在html上添加的data属性，可替代对应的属性">
                  </i>
                </span>
                <span v-else>{{item}}</span>
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
              <td>{{item.data || '无'}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="eventData && eventData.length">
      <div class="site-content-subtitle">
        事件
      </div>
      <div class="site-content-des">
        注：事件统一用<code class="code">.trigger('EVENT_NAME', callback)</code>的方式来调用触发
      </div>
      <div class="cd-table-responsive">
        <table class="cd-table">
          <thead>
            <tr>
              <th v-for="(item, index) in eventThead" :key="index">{{item}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in eventData" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.dec}}</td>
              <td>{{item.callback}}</td>
              <td v-html="item.args"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="hookData && hookData.length">
      <div class="site-content-subtitle">
        钩子方法
      </div>
      <div class="site-content-des">
        注：钩子方法统一用<code class="code">.on('HOOK_NAME', callback)</code>的方式来书写
      </div>
      <div class="cd-table-responsive">
        <table class="cd-table">
          <thead>
            <tr>
              <th v-for="(item, index) in hookThead" :key="index">{{item}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in hookData" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.dec}}</td>
              <td>{{item.callback}}</td>
              <td v-html="item.args"></td>
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

const dataApiThead = ['data属性', '说明', '类型', '固定值'];
const attrThead = ['属性名', '说明', '类型', '默认值', '可选值', 'data属性'];
const eventThead = ['事件名', '说明', '回调函数', '回调函数参数说明'];
const hookThead = ['钩子名', '说明', '回调函数', '回调函数参数说明'];

@Component
export default class extends Vue {
  dataApiThead: any[] = dataApiThead;
  attrThead: any[] = attrThead;
  eventThead: any[] = eventThead;
  hookThead: any[] = hookThead;

  @Prop()
  code: any;

  @Prop()
  dataApiData: any[];

  @Prop()
  attrData: any[];

  @Prop()
  eventData: any[];

  @Prop()
  hookData: any[];
  
  created() {
    (<any>window).cd.tooltip();
  }
}
</script>

