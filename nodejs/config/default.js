module.exports = {
    port: 3000,
    session: {
      secret: 'gongbi',
      key: 'gongbi',
      maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/gongbi'
  }