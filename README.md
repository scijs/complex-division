# complex-division

[![Build Status](https://travis-ci.org/scijs/complex-division.svg?branch=master)](https://travis-ci.org/scijs/complex-division) [![npm version](https://badge.fury.io/js/complex-division.svg)](http://badge.fury.io/js/complex-division)  [![Dependency Status](https://david-dm.org/scijs/complex-division.svg)](https://david-dm.org/scijs/complex-division)


Floating point complex division

## Intro

Complex floating point division isn't quite trivial. The naive method may encounter overflow, underflow, or loss of precision due to the intermediate floating point results. A simple remedy is[1]:

![Complex division](docs/images/division.png)

## Usage

##### `require('complex-division')( a, b, c, d [, result] )`

Calculates (a + ib)/(c + id) and returns a two-element JS array with the real and imaginary components.

`result` is an optional `Array` or typed array into which the output is inserted.


## Example

```javascript
var cdiv = require('complex-division');

var result = cdiv( 1, 2, 3, 4 );

// result = [ 0.44, 0.08 ]
```


## References

[1] Press, William H. *[Numerical Recipes 3rd Edition: The Art of Scientific Computing](https://books.google.com/books?id=1aAOdzK3FegC&pg=PA226&lpg=PA226&dq=complex+division+underflow&source=bl&ots=3jPhF9Irii&sig=JwEAckqmfBNd8dIQTrUD-Pk9dzE&hl=en&sa=X&ei=-VZQVYDpJImRyATAoYCwBg&ved=0CDwQ6AEwBA#v=onepage&q=complex%20division%20underflow&f=false)*. Cambridge University Press, 2007.

## Credits
(c) 2015 Ricky Reusser. MIT License
