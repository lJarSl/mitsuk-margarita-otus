var AddStream = require('./addStream');
var RandomStream = require('./randomStream');
var util = require('util');

RandomStream(10, 0, 100)
    .pipe(AddStream())
    .pipe(process.stdout)

  function runningAverage(len) {
    var values = [];
  
    function addToList(val) {
      if (!(values.length < len)) values.shift();
      values.push(val);
    }
  
    return function(prev, next, callback) {
      addToList(next);
      setImmediate(function() {
        callback(null, values.reduce(function(a, b) {
          return a + b;
        }, 0) / values.length);
      });
    };
  }