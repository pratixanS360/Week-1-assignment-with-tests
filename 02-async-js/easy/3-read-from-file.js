const fs = require('fs');

fs.readFile('3-read-from-file.md','utf8', (err, data) => {
    if (err) {
	console.error(err);
	return;
    }
    
    console.log('File content:', data);

});

function sumNumbers(n) {
    sum = 0;
    for (let i = 0; i < n; i++) {
	sum += i;
    }

    return console.log(sum);
}

sumNumbers(1000000000);
