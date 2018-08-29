const stream = require('stream')
const fs = require('fs');
const file = fs.createWriteStream('memo.txt');

function getRandom() {
  return Math.floor(Math.random()*1000);
}

const readable = (function() {

    const data = []
    const $ = new stream.Readable({
        highWaterMark:0,
        objectMode: true,
        read() {}
    })
    $.push(getRandom())
    return $
})()

readable.on('data', (data) => {
    file.write('number: ' + data + '-' + getRandom());
})