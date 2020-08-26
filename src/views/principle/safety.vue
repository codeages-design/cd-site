<template>
<div>
  <div class="desc-content">
    <div class="desc-content-title">安全性</div>
    <div class="coh-row">
      <span>我们给用户提供安全稳定的使用体验。对用户关心的数据和隐私进行保护，对敏感操作设置防护。此外，我们力图打造安全的交易环境和稳定的系统，让用户更放心。</span>
      <div class="friendly-content-info">
        <div class="desc-content-info__l"><span class="desc-content-info-name">1.数据安全</span></div>
        <div class="bou-content-info__r">
          <span>我们从设计出发，多角度保护用户的数据信息，使其得到安全的保障。</span>
        </div>
        <div class="bou-content-info safety-content-info safety-content-info-l pull-left">
          <span class="safety-content-info-span">数据传输：</span><span class="safety-content-info-span__custom">
            对于数据对外访问，我们提供标准的加密传输协议，无论是用户的电脑、手机访问
            我们的平台服务时，都提供了向外与互联网通信的 HTTPS 加密通道，采用 SSL/TLS 协议，
            可提供 256 位密钥的加密强度，可满足敏感数据加密传输需求。
          </span>
        </div>
        <div class="bou-content-info safety-content-info safety-content-info-r pull-left">
          <span class="safety-content-info-span">数据存储与备份：</span><span class="safety-content-info-span__custom">
            我们的系统架构有着严格的前后端分离，业务服务器只处理业务逻辑，数据不在业务服务器上落地。
            所有的数据存储在独立的数据库集群中，数据库集群由 DBA 专人维护，无关人员没有访问权限，实行严格的访问权限限制。
            数据是用户最宝贵的财产，我们的数据库集群都是主从架构，同一份数据会被同时存储多份，保证在线数据的安全。
          </span>
        </div>
      </div>

    </div>
    <div class="friendly-content-info">
      <div class="desc-content-info__l"><span class="desc-content-info-name">2.隐私保护</span></div>
      <div class="bou-content-info__r">
        <span>我们在设计产品时会对用户的个人信息及隐私做到全方位的保护。</span>
      </div>
      <img
        class="coh-img"
        src="static/img/principle/yinsibaohu.png"
        alt=""
      >
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style>
</style>