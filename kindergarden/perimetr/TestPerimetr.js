import BasePerimetr from './BasePerimetr';

export default new BasePerimetr({
  purpose: 'bye',

  govern: {    
    'can read': function(){
        console.log(this, 222222)
        return this.isAdmin()
        },

    // 'can viewParagraph': function () {
    //   return this.isAdmin();
    // },
  },
});