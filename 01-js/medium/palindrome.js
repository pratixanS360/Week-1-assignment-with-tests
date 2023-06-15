/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

    str = str.toLowerCase().replace(/\s/g, "").replace(/[!.,?]/g, "")
    N = str.length;
    strarr = Array.from(str);
    console.log(strarr)

    if (strarr.length % 2 != 0) {

	let count1 = 0;

	for (let i = 0; i < 0.5 * (N - 1); i++) {
	 
	    if (strarr[i] == strarr[N-1-i] ) {
		count1 += 1;
	    }
	}
	
	if (count1 == 0.5 * (N - 1) ){
	    //console.log('Palindrome!');
	    return true;
	}
    
    }
    else if (strarr.length % 2 == 0) {

	let count2 = 0;

	for (let i = 0; i < N/2 ; i++) {
	    if (strarr[i] == strarr[N-1-i] ) {
		count2 += 1;
	    }
	}
	if (count2 == N/2){
	    //console.log('Palindrome!');
	    return true;
	}
	
    }
    
    return false;
}

//isPalindrome("Able, was I ere I saw Elba!")
	
module.exports = isPalindrome;
