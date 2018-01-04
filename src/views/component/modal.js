export const modal_base = `
  <div class="cd-modal-dialog" id="cd-modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-toggle="cd-modal-cancel" aria-hidden="true">
          <i class="cd-icon cd-icon-close"></i>
        </button>
        <h4 class="modal-title">头部标题</h4>
      </div>
      <div class="modal-body">
        <div class="cd-pb24 cd-dark-major">
          内容主体
        </div>
      </div>
      <div class="modal-footer">
        <button class="cd-btn cd-btn-link-default cd-btn-lg" type="button" data-toggle="cd-modal-cancel">
          关闭
        </button>
        <button class="cd-btn cd-btn-link-primary cd-btn-lg" type="button" data-toggle="cd-modal-ok">
          确定
        </button>
      </div>
    </div>
  </div>
`;

export const modal_api = `
cd.modal({
  el: '#cd-modal',
  ajax: false,
  url: '',
  maskClosable: true,
  cancel(event, $modal, modal) {
    console.log('关闭后的回调')
  },
  ok(event, $modal, modal) {
    modal.rmModal();
  }
})
`;