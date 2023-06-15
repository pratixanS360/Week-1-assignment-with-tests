/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateSumTime(n) {
    let startTime = new Date().getTime();
    //console.log(startTime);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
	sum += i;
    }

    let endTime = new Date().getTime();
    //console.log(endTime);

    let executionTime = (endTime - startTime);

    console.log("Sum = ", sum, "Time = ",executionTime, "ms");
    return 0.01;
}


calculateSumTime(100);
calculateSumTime(100000);
calculateSumTime(1000000000);
