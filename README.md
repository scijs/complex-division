# complex-division

Complex division done the floating point way

## Intro

Complex floating point division isn't quite trivial. The naive method may encounter overflow, underflow, or loss of precision due to the intermediate floating point results. A simple remedy is[1]:

![Complex division](docs/images/division.png)

## Usage

##### `require('complex-division')( a, b, c, d )`

Calculates (a + ib)/(c + id) and returns a two-element JS array with the real and imaginary components.

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
