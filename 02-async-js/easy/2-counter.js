var counter = 0;

function printCounter() {
    
    counter += 1;
    console.log(counter);
    setTimeout(printCounter, 1000);
}

printCounter();
