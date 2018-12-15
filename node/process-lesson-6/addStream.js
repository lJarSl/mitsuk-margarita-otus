const util = require('util')
const assign = require('object-assign')
const random = require('./random')
const TransformStream = require('stream').Transform

util.inherits(addStream, TransformStream)

function addStream(opt) {
    let options = assign(opt || {}, { objectMode: true })
    if (!(this instanceof addStream)) {
        return new addStream(options)
    }
    TransformStream.call(this, options)
}

addStream.prototype._transform = function(chunk, encoding, done) {
  this.push(JSON.stringify(chunk) + '-' + random(0, 100) +'\n')
  done()
}

module.exports = addStream