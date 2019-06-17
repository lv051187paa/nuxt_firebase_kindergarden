import BasePerimeter from './BasePerimetr';

export default new BasePerimeter({
  purpose: 'secret',

  govern: {
    'can route': function () {
      return this.isAdmin();
    },
  },
});