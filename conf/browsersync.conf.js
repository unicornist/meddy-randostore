const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ],
      routes: {
        '/bower_components': 'bower_components'
      },
      middleware: [
        require('http-proxy-middleware')('/api', {
          target: 'http://localhost:3000',
          changeOrigin: true
        })
      ]
    },
    open: false
  };
};
