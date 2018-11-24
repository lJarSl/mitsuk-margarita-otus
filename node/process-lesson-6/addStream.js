var util = require('util');
var assign = require('object-assign');
var TransformStream = require('stream').Transform;

util.inherits(StringifyStream, TransformStream);

function StringifyStream(opt) {
  if (!(this instanceof StringifyStream)) return new StringifyStream(options);
  var options = assign(opt || {}, { objectMode: true });

  TransformStream.call(this, options);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

StringifyStream.prototype._transform = function(chunk, encoding, done) {
  this.push(JSON.stringify(chunk) + '-' +getRandomInt(0, 100) +'\n');
  done();
};

module.exports = StringifyStream;