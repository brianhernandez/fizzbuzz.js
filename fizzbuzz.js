//----- Fizz Buzz -----

for (var i = 1; i <= 100; i = i + 1){
	var fnumber = 3;
	var bnumber = 5;
	// Test if the index number is divisible by 3
	if (i % fnumber == 0) { 

		// If true, test if index is divisible by 5
		if (i % bnumber == 0) {

			// If true, print fizzbuzz
			console.log("fizzbuzz");

		// If not, print fizz	
		} else {
			console.log("fizz");
		}

	// If not (divisible by 3), check if its divisible by 5.
	} else if (i % bnumber == 0) {

		//If true, print buzz
		console.log("buzz")

	// Finally, print index number before moving on to the next number
	} else {
		console.log(i);
	}
}