<template>
  <div class="site-api">
    <div class="site-content-subtitle">
      API
    </div>
    <pre v-highlightjs><code class="js">
      {{ code }}
    </code></pre>

    <div class="site-content-subtitle" v-if="attrData.length">
      属性
    </div>

    <div class="site-content-des" v-if="attrData.length">
      注：DATA属性为在html上添加的data属性，可替代对应的属性
    </div>

    <div class="cd-table-responsive" v-if="attrData.length">
      <table class="cd-table">
        <thead>
          <tr>
            <th v-for="(item, index) in attrThead" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in attrData" :key="index">
            <td>{{item.name}}</td>
            <td v-html="item.dec"></td>
            <td>{{item.type}}</td>
            <td>{{item.value}}</td>
            <td>{{item.optional}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="site-content-subtitle" v-if="eventData.length">
      事件
    </div>

    <div class="site-content-des" v-if="eventData.length">
      注：事件统一用<code class="code">.on('EVENT_NAME', callback)</code>的方式调用
    </div>

    <div class="cd-table-responsive" v-if="eventData.length">
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
</template>

<script>
const attrThead = ['属性名', '说明', '类型', '默认值', '可选值'];
const eventThead = ['事件名', '说明', '回调函数', '回调函数参数说明'];

export default {
  props: ['attrData', 'eventData', 'code'],
  data() {
    return {
      attrThead,
      eventThead
    }
  }
}
</script>

