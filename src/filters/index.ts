import moment from 'moment';

export default {
  install(Vue: any):void {
    Vue.filter('trim', value => value.replace(/(^\s*)|(\s*$)/g, ''));

    Vue.filter('datetime', value => moment(+new Date(value)).format('YYYY-MM-DD HH:mm'));
  },
};
