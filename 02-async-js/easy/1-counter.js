var counter = 0

function printCounter() {
    counter = counter + 1;
    console.log(counter);
}

setInterval(printCounter, 1000)
