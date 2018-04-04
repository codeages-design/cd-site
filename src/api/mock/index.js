import Mock from 'mockjs';

Mock.mock(/\/demo\/tabs\/[0-9]+/, {
  'message': 'Ajax 标签页内容',
  'id|1-100': 100 
});
