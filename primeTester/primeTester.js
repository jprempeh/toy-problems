/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  var primes = [];
  for (var i = start; i < end; i++) {
    if (primeTester(i)) {
      primes.push(i);
    }
  }
  return primes;
};

// if start was 10 and end was 15
// choose two as a prime then
// go through the whole range two at a time and mark all multiples of two as not prime


var primeSieve = function(start, end) {
  var current = 2;
  var primes = range(0, end);
  while (current < end) {
    // mark all multiples not prime
    for(var i = current * 2; i <= end; i+= current;) {
      primes[i] = null;
    }
    //find the next currrent
    current += 1;
    while(!primes[current] && current <= end) { current ++; }
  }
  return primes.slice(2).filter(function (val) { return val && val >= start; });
};


var range = function(start, end) {
  var result = [];
  for (var i = start; i < end; i++) { result.push(i); }
  return result
};