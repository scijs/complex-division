'use strict';

var div = require('../index.js'),
    assert = require('assert');

describe('(a+bi)/(c+di)',function() {

  it('divides when abs(c) >= abs(d)',function() {
    var a = 4,
        b = 3,
        c = 2,
        d = 1;

    var e = div(a,b,c,d);

    assert( Math.abs(e[0]-2.2) < 1e-8 );
    assert( Math.abs(e[1]-0.4) < 1e-8 );

  });

  it('divides when abs(d) > abs(c)',function() {
    var a = 1,
        b = 2,
        c = 3,
        d = 4;

    var e = div(a,b,c,d);

    assert( Math.abs(e[0]-0.44) < 1e-8 );
    assert( Math.abs(e[1]-0.08) < 1e-8 );

  });
});
