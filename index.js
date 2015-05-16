'use strict';

module.exports = function ( a, b, c, d, output ) {
  output = output || []
  var e,f
  if( Math.abs(c) >= Math.abs(d) ) {
    e = d/c
    f = c + d*e
    output[0] = (a + b*e) / f
    output[1] = (b - a*e) / f
  } else {
    e = c/d
    f = c*e + d
    output[0] = (a*e + b) / f
    output[1] = (b*e - a) / f
  }
  return output
}
