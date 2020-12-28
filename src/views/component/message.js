export const message_base = `
cd.message({
  type: 'info',
  message: '这是普通信息。'
});
`;

export const message_type = `
cd.message({
  type: 'success',
  message: '这是成功信息。'
});

cd.message({
  type: 'warning',
  message: '这是警告信息。'
});

cd.message({
  type: 'danger',
  message: '这是危险信息。'
});
`;

export const message_action = `
cd.message({
  type: 'info',
  message: '这是普通信息。',
  action: {
    title: '操作',
    href: '#'
  }
});
`;

export const message_delay = `
cd.message({
  type: 'info',
  message: '这是普通信息。',
  delay: '10000'
});
`;

export const message_api = `
cd.message({
  type: 'danger',
  message: '这是信息主体。',
  delay: '3000',
  z_index: '9999',
  offset: '80',
  action: {
    title: '',
    url: '',
    template: ''
  },
  animate: {
    enter: 'cd-animated cd-fadeInDownSmall',
    exit: 'cd-animated cd-fadeOutUp'
  },
})
`;
