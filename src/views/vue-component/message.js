export const message_base = `
this.$message({
  type: 'info',
  message: '这是普通信息。'
});
`;

export const message_type = `
this.$message({
  type: 'success',
  message: '这是成功信息。'
});

this.$message({
  type: 'warning',
  message: '这是警告信息。'
});

this.$message({
  type: 'danger',
  message: '这是危险信息。'
});
`;

export const message_action = `
this.$message({
  type: 'info',
  message: '这是普通信息。',
  isShowClose: true
});
`;

export const message_delay = `
this.$message({
  type: 'info',
  message: '这是普通信息。',
  duration: '10000'
});
`;

export const message_api = `
this.$message({
  type: 'danger',
  message: '这是信息主体。',
  duration: '3000',
  z_index: '9999',
  offset: '80',
})
`;
