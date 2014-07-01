
module.exports = function (arr) {
  var buf = arr.slice(0)
  var out = []
  var x
  while (buf.length) {
    out.push(x = buf.shift())
    for (var i = 0; i < buf.length; i++)
      if (x.equals(buf[i]))
        buf.splice(i--, 1)
  }
  return out
}
