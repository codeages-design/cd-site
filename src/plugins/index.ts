export default {
  install(Vue) {
    Vue.prototype.isDev = (): boolean => process.env.NODE_ENV !== 'production';

    Vue.prototype.setTitle = (title: string): string => document.title = title;
  },
};