export const table_base = `
<div class="cd-table-responsive">
  <table class="cd-table">
    <thead>
      <tr>
        <th>内容</th>
        <th>流水号</th>
        <th>订单号</th>
        <th>状态</th>
        <th>收支</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>支付宝充值现金 200 元</td>
        <td>2017042121144446163</td>
        <td>V2017042121141876634</td>
        <td><span class="cd-status cd-status-info">待付款</span></td>
        <td>+200.00</td>
        <td><a href="javascript:;" class="cd-link-primary">付款</a></td>
      </tr>
      <tr>
        <td>支付宝充值现金 100 元</td>
        <td>2017042121144446164</td>
        <td>V2017042121141876635</td>
        <td><span class="cd-status cd-status-warning">退款中</span></td>
        <td>+100.00</td>
        <td><a href="javascript:;" class="cd-link-primary">付款</a></td>
      </tr>
      <tr>
        <td>支付宝充值现金 50 元</td>
        <td>2017042121144446166</td>
        <td>V2017042121141876637</td>
        <td><span class="cd-status cd-status-disabled">已关闭</span></td>
        <td>+50.00</td>
        <td><a href="javascript:;" class="cd-link-primary">付款</a></td>
      </tr>
    </tbody>
  </table>
</div>
`;