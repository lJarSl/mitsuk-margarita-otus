const AddStream = require('./addStream')
const RandomStream = require('./randomStream')

console.log('колличество генерируемых чисел:')
process.stdin.on('readable', () => {
    const chunk = process.stdin.read()
    if (chunk !== null) {
        RandomStream(chunk, 0, 100)
            .pipe(AddStream())
            .pipe(process.stdout)
    }
  });