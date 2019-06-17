import BasePerimetr from './BasePerimetr';

export default new BasePerimetr({
  purpose: 'bye',

  govern: {    
    'can read': function(){
        return this.isAdmin()
        },

    // 'can viewParagraph': function () {
    //   return this.isAdmin();
    // },
  },
});