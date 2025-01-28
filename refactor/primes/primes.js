// this function takes in a number and returns true if the number is prime, otherwise it returns false.
function isPrime(n) {
	
	// return false if n is less than or equal to 1
	if (n <= 1) {
		return false;
	}

	// loop over all the numbers from 2 to the square root of n (these are the possible factors of n that we're going to check)
	for (let i = 2; i <= Math.sqrt(n); i++) {
		
		
		// if n is divisible by i (the factor we're checking), return false since n is not prime
		if (n % i === 0) {
			return false;
		}

	}

	//if the function hasn't returned false yet, then we've checked all the possible factors and none of them worked, so n is prime.
	return true;
}

// challenge: write a function that takes in two numbers and returns a list of all prime numbers between the two numbers.
// hint: use the isPrime function above.

function primesBetween(min, max) {
	// your code here

	// hint: create an empty array, then loop through all numbers between min and max, and add them to the array if they are prime. then return the array.
}

// once you write the code for primesBetween, test it by running this file. the line below should make it print out an array of all prime numbers between 6 and 50.
console.log(primesBetween(6, 50));