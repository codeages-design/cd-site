export const confirm_js = `
cd.confirm({
  title: '标题',
  content: '确定要这么做吗？',
  okText: '确定',
  cancelText: '取消',
  confirmClass: '',
  ok(event, $confirm) {
    console.log('点击确定按钮后的回调函数')
  },
  close(event) {
    console.log('点击取消按钮后的回调函数')
  }
})
`;