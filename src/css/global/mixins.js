// global mixins - https://github.com/postcss/postcss-mixins

module.exports = {
  font: function (mixin, fontSize) {
    const lineHeightMultiplier = 1.5;

    return {
      '&': {
        'font-size': fontSize,
        'line-height': fontSize * lineHeightMultiplier
      }
    };
  },
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