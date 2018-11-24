var AddStream = require('./addStream');
var RandomStream = require('./randomStream');
var util = require('util');

console.log('колличество генерируемых чисел:');
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      RandomStream(chunk, 0, 100)
        .pipe(AddStream())
        .pipe(process.stdout)
    }
  });