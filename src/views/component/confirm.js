export const confirm_js = `
cd.confirm({
  title: '标题',
  content: '确定要这么做吗？',
  confirmText: '确定',
  cancelText: '取消',
  confirmClass: 'cd-btn cd-btn-link-danger cd-btn-lg',
  cancelClass: 'cd-btn cd-btn-link-default cd-btn-lg',
  dialogClass: 'cd-modal-dialog-sm',
  confirm(event, $confirm) {
    console.log('点击确定按钮后的回调函数')
  },
  close(event) {
    console.log('点击取消按钮后的回调函数')
  }
})
`;