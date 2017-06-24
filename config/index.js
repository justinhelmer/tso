require('dotenv').load();

module.exports = {
  template: {
    title: 'The Sacred Order'
  },
  proxy: {
    target: 'https://developer-paragon.epicgames.com',
    headers: {
      'X-Epic-ApiKey': process.env.EPIC_API_KEY
    },
    mock: false
  }
};