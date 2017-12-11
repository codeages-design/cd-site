export const table_base = `
<div class="cd-table-responsive">
  <table class="cd-table">
    <thead>
      <tr>
        <th>编号</th>
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
        <td>1</td>
        <td>支付宝充值现金 200 元</td>
        <td>2017042121144446163</td>
        <td>V2017042121141876634</td>
        <td><span class="cd-status cd-status-info">待付款</span></td>
        <td>+200.00</td>
        <td><a href="javascript:;" class="cd-link-primary">付款</a></td>
      </tr>
      <tr>
        <td>2</td>
        <td>支付宝充值现金 100 元</td>
        <td>2017042121144446164</td>
        <td>V2017042121141876635</td>
        <td><span class="cd-status cd-status-warning">退款中</span></td>
        <td>+100.00</td>
        <td><a href="javascript:;" class="cd-link-primary">付款</a></td>
      </tr>
      <tr>
        <td>3</td>
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

export const table_api = `
cd.table({
  target: '#my-table',
  url: '/table_api',
  data: {
    sort: {
      name: 'id',
      value: 'asc'
    },
    filter: {
      name: 'status',
      value: '1'
    }
  },
})
`;

export const table_sort_filter = `
<div id="my-table" class="cd-table-responsive">
  <table class="cd-table">
    <thead>
      <tr>
        <th class="table-sort checked" data-target="#my-table" data-toggle="cd-table-sort" data-sort-key="id">
          编号
          <div class="table-sort-icon">
            <i class="cd-icon cd-icon-arrow-line-up active" data-sort-value="asc"></i>
            <i class="cd-icon cd-icon-arrow-line-down" data-sort-value="desc"></i>
          </div>
        </th>
        <th>内容</th>
        <th>流水号</th>
        <th>订单号</th>
        <th>
          <div class="dropdown">
            状态 
            <a href="javascrip:;" class="cd-link-gray-primary" data-toggle="dropdown">
              <i class="cd-icon cd-icon-filter cd-text-xs"></i>
            </a>
            <ul class="dropdown-menu cd-dropdown-menu cd-dropdown-menu-filter" style="display:none">
              <li class="active"><a href="javascript:;" data-toggle="cd-table-filter" data-filter-key="status">全部</a></li>
              <li><a href="javascript:;" data-toggle="cd-table-filter" data-filter-key="status" data-filter-value="1">待付款</a></li>
              <li><a href="javascript:;" data-toggle="cd-table-filter" data-filter-key="status" data-filter-value="2">已付款</a></li>
            </ul>
          </div>
        </th>
        <th>收支</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>支付宝充值现金 200 元</td>
        <td>2017042121144446163</td>
        <td>V2017042121141876634</td>
        <td><span class="cd-status cd-status-info">待付款</span></td>
        <td>+200.00</td>
        <td><a href="javascript:;" class="cd-link-primary">付款</a></td>
      </tr>
      <tr>
        <td>2</td>
        <td>支付宝充值现金 100 元</td>
        <td>2017042121144446164</td>
        <td>V2017042121141876635</td>
        <td><span class="cd-status cd-status-warning">退款中</span></td>
        <td>+100.00</td>
        <td><a href="javascript:;" class="cd-link-primary">付款</a></td>
      </tr>
      <tr>
        <td>3</td>
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