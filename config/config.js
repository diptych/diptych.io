var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'diptych-io'
    },
    port: 3000,
    db: 'mongodb://localhost/diptych-io-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'diptych-io'
    },
    port: 3000,
    db: 'mongodb://localhost/diptych-io-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'diptych-io'
    },
    port: 3000,
    db: 'mongodb://localhost/diptych-io-production'
  }
};

module.exports = config[env];
