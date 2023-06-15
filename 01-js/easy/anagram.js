/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


function isAnagram(str1, str2) {

    // Check if the lengths are different
    if (str1.length !== str2.length) {
	return false;
    }
    else {
	if (str1.length == 0) {
	    return true;
	}
	
	// Convert strings to lowercase and remove whitespace
	str1 = str1.toLowerCase().replace(/\s/g, "");
	str2 = str2.toLowerCase().replace(/\s/g, "");
	

	// Convert strings to arrays and sort them
	let str1Array = Array.from(str1).sort();
	let str2Array = Array.from(str2).sort();
	
	
	// Compare the sorted arrays
	for (let i = 0; i < str1Array.length; i++){
	    if (str1Array[i] == str2Array[i]) {
		return true;
	    }
	    else {
		return false;
	    }
	}

    }
}


module.exports = isAnagram;
