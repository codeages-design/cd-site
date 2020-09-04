<template>
  <div>
    <div class="site-principle-content">
      <div class="site-principle-content-title">安全性</div>
      <div class="pt-28">
        <span class="brief">我们给用户提供安全稳定的使用体验。对用户关心的数据和隐私进行保护，对敏感操作设置防护。此外，我们力图打造安全的交易环境和稳定的系统，让用户更放心。</span>
        <div class="pt-40">
          <div class="site-principle-content-small-title">
            <span class="site-principle-content-info-name">1.数据安全</span>
          </div>
          <div class="pt-12">
            <span class="sm-block-brief">我们从设计出发，多角度保护用户的数据信息，使其得到安全的保障。</span>
          </div>
          <div class="data-safety-block pt-24 clearfix">
            <div class="left-block fl">
              <span class="block-title">数据传输：</span>
              <span>
                对于数据对外访问，我们提供标准的加密传输协议，无论是用户的电脑、手机访问
                我们的平台服务时，都提供了向外与互联网通信的 HTTPS 加密通道，采用 SSL/TLS 协议，
                可提供 256 位密钥的加密强度，可满足敏感数据加密传输需求。　
              </span>
            </div>
            <div class="right-block fl ml-24">
              <span class="block-title">数据存储与备份：</span>
              <span>
                我们的系统架构有着严格的前后端分离，业务服务器只处理业务逻辑，数据不在业务服务器上落地。
                所有的数据存储在独立的数据库集群中，数据库集群由 DBA 专人维护，无关人员没有访问权限，实行严格的访问权限限制。
                数据是用户最宝贵的财产，我们的数据库集群都是主从架构，同一份数据会被同时存储多份，保证在线数据的安全。
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-40">
        <span class="site-principle-content-info-name">2.隐私保护</span>
        <div class="pt-12">
          <span class="sm-block-brief">我们在设计产品时会对用户的个人信息及隐私做到全方位的保护。</span>
        </div>
        <img class="site-principle-content-img pt-24" src="static/img/principle/yinsibaohu.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="less" scoped>
  .brief {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #666666;
    letter-spacing: 0;
  }

  .sm-block-brief {
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;

    & + span {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      letter-spacing: 0;
      line-height: 20px;
    }
  }

  .block-title {
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 700;
  }

  .site-principle-content-info-name {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 700;
  }

  .data-safety-block {
    .left-block,
    .right-block {
      padding: 24px;
      min-height: 120px;
      background: #F9F9F9;
    }

    .left-block {
      width: 41%; 
    }

    .right-block {
      width: 54%; 
    }

    @media (max-width: 821px) { 
      .left-block {
        width: 100%;
        min-width: 180px;
      }

      .right-block {
        margin-left: 0 !important;
        margin-top: 20px;
        width: 100%;
        min-height: 180px;
      }
    }
  } 

  .safety-content-info-span {
    color: #333333;
  }
</style>