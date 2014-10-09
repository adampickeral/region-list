// Karma configuration
// Generated on Wed Oct 08 2014 14:55:14 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    files: [
      'test/**/*-test.react.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      'test/**/*-test.react.js': ['browserify']
    },
    browsers: ['Chrome'],
    reporters: ['spec', 'failed', 'junit'],
    browserify: {
      debug: true,
      transform: ['reactify']
    }
  });
};
