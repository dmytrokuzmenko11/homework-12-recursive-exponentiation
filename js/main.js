
// homework 12
// recursive exponentiation


let x = +prompt('Enter number', 5);
let n = +prompt('Enter power of a number', 4)

function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }

alert(`The number ${x} to the power of ${n} is equal ${pow(x, n)}`);
document.write(`${x}<sup>${n}</sup> = ${pow(x, n)}`);


// calculations of pow(5, 4) 
// 5 * 1 = 5
// 5 * 5 = 25
// 5 * 25 = 125
// 5 * 125 = 625


