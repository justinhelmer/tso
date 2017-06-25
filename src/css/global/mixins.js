// global mixins - https://github.com/postcss/postcss-mixins

module.exports = {
  inline: function (mixin) {
    // const tXXL =

    const xxl = '30px';

    return {
      '&': {
        'text-align': 'center',
        'width': '100%'
      },
      '& li': {
        'display': 'inline-block',
        'margin-left': xxl,
        'margin-right': xxl
      }
    };
  }
};