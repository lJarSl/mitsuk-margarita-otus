const fs = require('fs');
const file = fs.createWriteStream('memo.txt');

function getRandom() {
  return Math.floor(Math.random()*1000);
}

process.stdin.on('readable',() => {
    const data = process.stdin.read();
    if(data !== null){
        file.write('number: ' + getRandom() + '-' + data);
    }
})