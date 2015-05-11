'use strict';

module.exports = function ( a, b, c, d ) {
  var e,f;
  if( Math.abs(c) >= Math.abs(d) ) {
    e = d/c;
    f = c + d*e;
    return [ 
      (a + b*e) / f,
      (b - a*e) / f
    ];
  } else {
    e = c/d;
    f = c*e + d;
    return [
      (a*e + b) / f,
      (b*e - a) / f
    ];
  }
};
